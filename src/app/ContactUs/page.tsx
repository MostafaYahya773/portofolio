'use client';

import { useFormik } from 'formik';
import { contactSchema } from '../../../lib/contact/schema';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Info, MessageData } from '../interface';
import useSendMessage from '../hooks/useSendMessage';
import toast from 'react-hot-toast';
import SocialLinks from '../_Components/SocialLinks/SocialLinks';

export default function ContactSection() {
  const { mutateAsync: sendMessage, isPending } = useSendMessage();
  const MyInfo: Info[] = [
    { name: 'Phone', value: '01159635438', icon: FaPhoneAlt },
    { name: 'Email', value: 'Mostafayahya000@gmail.com', icon: MdEmail },
    { name: 'Location', value: 'Cairo, Egypt - Remote', icon: FaLocationDot },
  ];
  const formik = useFormik<MessageData & { website: string }>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      description: '',
      website: '',
    },

    validationSchema: contactSchema,

    onSubmit: async (values, { resetForm, setStatus }) => {
      setStatus(undefined);
      try {
        await sendMessage(values);
        resetForm();
        setStatus({ success: true, message: 'Thanks! Your message has been sent.' });
        toast.success('Message sent successfully');
      } catch (error) {
        const message = error instanceof Error && error.name !== 'TimeoutError' ? error.message : 'The request timed out. Your message is still here; please try again.';
        setStatus({ success: false, message });
        toast.error(message);
      }
    },
  });

  return (
    <section className="md:mt-40 mt-16 px-3 mb-10">
      <div className="max-w-[1300px] mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-10">
          <h1 className="lg:text-40 md:text-35 text-28 font-bold text-light-teal dark:text-dark-teal">
            Let's start a{' '}
            <span className="darkTextStyle text-light-bg-cta">
              conversation.
            </span>
          </h1>

          <p className="dark:text-dark-text-secondary text-light-text-secondary">
            Whether you have a groundbreaking idea or a complex engineering
            challenge, I'm here to help you build the future.
          </p>

          <div className="flex flex-col gap-4 ">
            {MyInfo.map((info) => (
              <div
                key={info.name}
                className="flex gap-4 items-center text-16 md:text-18"
              >
                <span className="w-10 h-10 rounded-full bg-light-teal text-light-bg-primary dark:bg-dark-bg-card dark:text-dark-mouve flex justify-center items-center">
                  <info.icon />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] uppercase tracking-[2px] text-light-bg-cta dark:text-dark-text-secondary">
                    {info.name}
                  </p>
                  <p className="text-14 dark:text-dark-button-text text-light-text-secondary">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <SocialLinks />
        </div>

        {/* RIGHT */}
        <div className="bg-light-tag-bg/90 dark:bg-dark-bg-card/40 p-7 dark:text-dark-button-text text-light-text-primary rounded-3xl border border-white/10 shadow-xl">
          <form onSubmit={formik.handleSubmit} noValidate aria-busy={isPending} className="flex flex-col gap-3">
            <div hidden aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" value={formik.values.website} onChange={formik.handleChange} />
            </div>
            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-4 ">
              <div>
                <label htmlFor="contact-name" className="block mb-2 text-14">Name</label>
                <input
                  id="contact-name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  disabled={isPending}
                  aria-invalid={Boolean(formik.touched.name && formik.errors.name)}
                  aria-describedby={formik.touched.name && formik.errors.name ? 'name-error' : undefined}
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full dark:bg-dark-bg-primary p-3 rounded-xl outline-none focus:ring-[.25px] border-none dark:focus:ring-dark-text-primary focus:ring-dark-bg-primary"
                />

                {formik.touched.name && formik.errors.name && (
                  <p id="name-error" className="text-red-700 dark:text-red-300 text-14 mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block mb-2 text-14">Email</label>
                <input
                  id="contact-email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  disabled={isPending}
                  aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
                  aria-describedby={formik.touched.email && formik.errors.email ? 'email-error' : undefined}
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full dark:bg-dark-bg-primary p-3 rounded-xl outline-none focus:ring-[.25px] border-none dark:focus:ring-dark-text-primary focus:ring-dark-bg-primary"
                />

                {formik.touched.email && formik.errors.email && (
                  <p id="email-error" className="text-red-700 dark:text-red-300 text-14 mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label htmlFor="contact-subject" className="block mb-2 text-14">Subject</label>
              <select
                id="contact-subject"
                required
                disabled={isPending}
                aria-invalid={Boolean(formik.touched.subject && formik.errors.subject)}
                aria-describedby={formik.touched.subject && formik.errors.subject ? 'subject-error' : undefined}
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full dark:bg-dark-bg-primary  p-3 rounded-xl outline-none focus:ring-[.25px] border-none dark:focus:ring-dark-text-primary focus:ring-dark-bg-primary"
              >
                <option value="">Select subject</option>
                <option value="project">Project Collaboration</option>
                <option value="freelance">Freelance Work</option>
                <option value="other">Other</option>
              </select>

              {formik.touched.subject && formik.errors.subject && (
                <p id="subject-error" className="text-red-700 dark:text-red-300 text-14 mt-1">
                  {formik.errors.subject}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label htmlFor="contact-description" className="block mb-2 text-14">Message</label>
              <textarea
                id="contact-description"
                maxLength={5000}
                required
                disabled={isPending}
                aria-invalid={Boolean(formik.touched.description && formik.errors.description)}
                aria-describedby={formik.touched.description && formik.errors.description ? 'description-error' : undefined}
                name="description"
                placeholder="Describe your project vision..."
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full dark:bg-dark-bg-primary h-[200px] resize-none p-3 rounded-xl outline-none focus:ring-[.25px] border-none dark:focus:ring-dark-text-primary focus:ring-dark-bg-primary"
              />

              {formik.touched.description && formik.errors.description && (
                <p id="description-error" className="text-red-700 dark:text-red-300 text-14 mt-1">
                  {formik.errors.description}
                </p>
              )}
            </div>

            {formik.status && <p role={formik.status.success ? 'status' : 'alert'} className="text-14">{formik.status.message}</p>}
            <button
              type="submit"
              disabled={isPending || formik.isSubmitting}
              className="px-5 mt-5 text-14 md:text-16 lg:text-18 font-normal py-2 flex  justify-center rounded-full font-mono bg-light-bg-cta text-light-bg-primary dark:bg-gradient-to-r dark:from-dark-mouve dark:to-dark-teal dark:text-dark-blue transition-colors duration-300"
            >
              {isPending || formik.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
