import * as Yup from 'yup';

export const contactSchema = Yup.object({
  name: Yup.string().trim().min(3, 'Please enter at least 3 characters').max(100, 'Use 100 characters or fewer').required('Your name is required'),
  email: Yup.string().trim().lowercase().email('Enter a valid email address').max(254, 'Email is too long').required('Your email is required'),
  subject: Yup.string().oneOf(['project', 'freelance', 'other'], 'Select a subject').required('Select a subject'),
  description: Yup.string().trim().min(10, 'Please enter at least 10 characters').max(5000, 'Use 5,000 characters or fewer').required('Your message is required'),
});

export type ContactMessage = Yup.InferType<typeof contactSchema>;
