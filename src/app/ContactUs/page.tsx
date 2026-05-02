'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Info, MessageData } from '../interface';
import useSendMessage from '../hooks/useSendMessage';
import toast from 'react-hot-toast';
import SocialLinks from '../_Components/SocialLinks/SocialLinks';

export default function ContactSection() {
  const { mutate: sendMessage } = useSendMessage();
  const MyInfo: Info[] = [
    { name: 'Phone', value: '01159635438', icon: FaPhoneAlt },
    { name: 'Email', value: 'Mostafayahya000@gmail.com', icon: MdEmail },
    { name: 'Location', value: 'Cairo, Egypt - Remote', icon: FaLocationDot },
  ];
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too short').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    subject: Yup.string().required('Required'),
    description: Yup.string().min(10, 'Too short').required('Required'),
  });
  const formik = useFormik<MessageData>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      description: '',
    },

    validationSchema,

    onSubmit: (values, { resetForm }) => {
      sendMessage(values, {
        onSuccess: () => {
          toast.success('Message sent successfully');
        },
        onError: (error) => {
          toast.error(`Something went wrong ${error}`);
        },
      });
      resetForm();
    },
  });

  return (
    <section className="md:mt-40 mt-16 px-3 mb-10">
      <div className="max-w-[1300px] mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-10">
          <h2 className="lg:text-40 md:text-35 text-28 font-bold text-light-teal">
            Let's start a{' '}
            <span className="darkTextStyle text-light-bg-cta">
              conversation.
            </span>
          </h2>

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
          <form onSubmit={formik.handleSubmit} className=" flex flex-col gap-3">
            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-4 ">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full dark:bg-dark-bg-primary p-3 rounded-xl outline-none focus:ring-[.25px] border-none dark:focus:ring-dark-text-primary focus:ring-dark-bg-primary"
                />

                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full dark:bg-dark-bg-primary p-3 rounded-xl outline-none focus:ring-[.25px] border-none dark:focus:ring-dark-text-primary focus:ring-dark-bg-primary"
                />

                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <select
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
                <p className="text-red-400 text-sm mt-1">
                  {formik.errors.subject}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                name="description"
                placeholder="Describe your project vision..."
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full dark:bg-dark-bg-primary h-[200px] resize-none p-3 rounded-xl outline-none focus:ring-[.25px] border-none dark:focus:ring-dark-text-primary focus:ring-dark-bg-primary"
              />

              {formik.touched.description && formik.errors.description && (
                <p className="text-red-400 text-sm mt-1">
                  {formik.errors.description}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="px-5 mt-5 text-14 md:text-16 lg:text-18 font-normal py-2 flex  justify-center rounded-full font-mono bg-light-bg-cta text-light-bg-primary dark:bg-gradient-to-r dark:from-dark-mouve dark:to-dark-teal dark:text-dark-blue transition-colors duration-300"
            >
              {formik.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
