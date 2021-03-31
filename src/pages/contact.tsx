import React, { ReactEventHandler, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import Label from '../components/Label';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

type ContactForm = {
  name: string;
  email: string;
  body: string;
};

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    body: '',
  });

  const handleContactFormChange: ReactEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.currentTarget;
    setContactForm({ ...contactForm, [name]: value });
  };

  return (
    <Layout>
      <Head title="Contact" />
      <PageHero
        name="Contact"
        image={
          <StaticImage
            src="../images/contact-page-hero.jpg"
            alt="page hero"
            layout="fullWidth"
            className="h-full"
          />
        }
      />
      <Container>
        <div className="mx-auto max-w-xl">
          <form>
            <div className="mb-4 sm:mb-6">
              <Label name="name">お名前</Label>
              <Input
                name="name"
                value={contactForm.name}
                onChange={handleContactFormChange}
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <Label name="email">メールアドレス</Label>
              <Input
                name="email"
                value={contactForm.email}
                onChange={handleContactFormChange}
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <Label name="body">本文</Label>
              <TextArea
                name="body"
                value={contactForm.body}
                onChange={handleContactFormChange}
              />
            </div>
            <button
              type="submit"
              className="block w-full px-3 py-1 bg-gray-300 hover:bg-gray-400 text-gray-900 sm:text-lg font-medium tracking-widest transition-colors duration-300"
            >
              送信
            </button>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default Contact;
