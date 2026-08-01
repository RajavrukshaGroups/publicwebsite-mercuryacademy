import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Mercury Academy',
  description: 'Get in touch with Mercury Academy for admission queries, scholarships, and career counselling.',
};

export default function ContactPage() {
  return <ContactClient />;
}