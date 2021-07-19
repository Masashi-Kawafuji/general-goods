import React, { FC, ComponentProps, ReactEventHandler, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import axios from 'axios';
import Layout from 'layout/Layout';
import Head from 'components/Head';
import Container from 'components/Container';
import PageHero from 'components/PageHero';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import { PageProps } from 'gatsby';

type ContactForm = {
  name: string;
  email: string;
  body: string;
};

type EnquiryResponseData = {
  statusCode: number | string;
};

const Contact: FC<PageProps> = ({ path }) => {
  const initialContactFromValue: ContactForm = {
    name: '',
    email: '',
    body: '',
  };

  const [contactForm, setContactForm] = useState<ContactForm>(
    initialContactFromValue
  );

  const handleContactFormChange: ReactEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.currentTarget;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleContactFormSubmit: ReactEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
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
  };

  const validations: ComponentProps<typeof Input>['validations'] = [
    {
      validate: (value) => !!value,
      message: '必須項目です。',
    },
  ];

  const { name, email, body } = contactForm;

  return (
    <Layout>
      <Head title="Contact" pathname="/contact/" />
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
                validations={validations}
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <Input
                name="email"
                value={email}
                onChange={handleContactFormChange}
                label="メールアドレス"
                validations={validations}
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <TextArea
                name="body"
                value={body}
                onChange={handleContactFormChange}
                label="本文"
                validations={validations}
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
