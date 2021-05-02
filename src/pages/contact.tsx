import React, { ReactEventHandler, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import axios from 'axios';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

type ContactForm = {
  name: string;
  email: string;
  body: string;
};

type EnquiryResponseData = {
  statusCode: number | string;
};

type IsInputEmpty = Record<'name' | 'email' | 'body', boolean>;

const Contact: React.FC = () => {
  const initialContactFromValue: ContactForm = {
    name: '',
    email: '',
    body: '',
  };

  const [contactForm, setContactForm] = useState<ContactForm>(
    initialContactFromValue
  );

  const [isInputEmpty, setIsInputEmpty] = useState<IsInputEmpty>({
    name: false,
    email: false,
    body: false,
  });

  const handleContactFormChange: ReactEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.currentTarget;
    setContactForm({ ...contactForm, [name]: value });
    setIsInputEmpty({ ...isInputEmpty, [name]: value === '' });
  };

  function validate(formInputs: { [key: string]: string }): boolean {
    const values = Object.values(formInputs);
    return values.findIndex((value) => value === '') <= -1;
  }

  const handleContactFormSubmit: ReactEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    if (validate(contactForm)) {
      try {
        await axios.post<EnquiryResponseData>(
          'https://r3igz3lme5.execute-api.ap-northeast-1.amazonaws.com/general-goods-enquiry',
          contactForm,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        setContactForm(initialContactFromValue);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      setIsInputEmpty({
        name: contactForm.name === '',
        email: contactForm.email === '',
        body: contactForm.body === '',
      });
    }
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
          <form onSubmit={handleContactFormSubmit}>
            <div className="mb-4 sm:mb-6">
              <Input
                name="name"
                value={contactForm.name}
                onChange={handleContactFormChange}
                label="お名前"
                error={isInputEmpty.name}
                errorMessage="お名前を入力してください。"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <Input
                name="email"
                value={contactForm.email}
                onChange={handleContactFormChange}
                label="メールアドレス"
                error={isInputEmpty.email}
                errorMessage="メールアドレスを入力してください。"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <TextArea
                name="body"
                value={contactForm.body}
                onChange={handleContactFormChange}
                label="本文"
                error={isInputEmpty.body}
                errorMessage="本文を入力してください。"
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
