import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Mostafa Yahya to discuss frontend development, freelance work, or a project collaboration.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
