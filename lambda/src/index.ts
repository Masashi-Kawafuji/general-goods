import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import dotenv from 'dotenv';
import Mailer from './mailer';

type SendMailHandler = APIGatewayProxyHandlerV2;

dotenv.config();

const handler: SendMailHandler = async (event) => {
  const { name, email, body } = JSON.parse(event.body as string);

  const { USER_NAME, USER_EMAIL } = process.env;

  if (!(USER_NAME && USER_EMAIL))
    throw new Error(
      "The user name and The user's email address are not found."
    );

  const mailer = new Mailer({
    name: USER_NAME,
    emailAddress: USER_EMAIL,
  });

  const sendThankYouForContactingUs = mailer.send({
    template: './templates/thank-you-for-contacting-us.ejs',
    to: email,
    name,
    subject: '【General Goods】お問い合わせ受付のお知らせ',
    data: { name, email, body },
  });

  const sendNotification = mailer.send({
    template: './templates/notification.ejs',
    to: USER_EMAIL,
    name: USER_NAME,
    subject: '新着のお問い合わせ',
    data: { name, email, body },
  });

  await Promise.all([sendThankYouForContactingUs, sendNotification]);

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      message: 'The enquiry has been successfully sent.',
    }),
    isBase64Encoded: false,
  };
};

export { handler };
