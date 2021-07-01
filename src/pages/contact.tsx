import React, { ReactEventHandler, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import axios from 'axios';
import Layout from 'components/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import PageHero from 'components/PageHero';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

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
        console.error(error);
      }
    } else {
      setIsInputEmpty({
        name: contactForm.name === '',
        email: contactForm.email === '',
        body: contactForm.body === '',
      });
    }
  };

  const { name, email, body } = contactForm;

  return (
    <Layout>
      <Head pageTitle="Contact" />
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
                value={name}
                onChange={handleContactFormChange}
                label="お名前"
                error={!name}
                errorMessage="お名前を入力してください。"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <Input
                name="email"
                value={email}
                onChange={handleContactFormChange}
                label="メールアドレス"
                error={!email}
                errorMessage="メールアドレスを入力してください。"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <TextArea
                name="body"
                value={body}
                onChange={handleContactFormChange}
                label="本文"
                error={!body}
                errorMessage="本文を入力してください。"
              />
            </div>
            <Button type="submit" className="w-full">
              送信
            </Button>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default Contact;
