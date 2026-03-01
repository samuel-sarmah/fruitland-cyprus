import ContactPage from '@/components/ContactPage';
import { getContactContent } from '@/sanity/queries';

export default async function Contact() {
  const contactContent = await getContactContent();

  return <ContactPage contactContent={contactContent} />;
}
