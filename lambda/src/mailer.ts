import { google } from 'googleapis';
import dotenv from 'dotenv';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

/* eslint-disable class-methods-use-this */

type MailerOptions = {
  name: string;
  emailAddress: string;
};

type SendMailOptions = {
  template: string;
  to: string;
  name: string;
  subject: string;
  data: { [key: string]: string };
};

type WriteBodyOptions = {
  template: SendMailOptions['template'];
  data: { [key: string]: any };
};

dotenv.config();

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REFRESH_TOKEN } = process.env;

class Mailer {
  private oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
  );

  private gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });

  constructor(public options: MailerOptions) {
    this.options = options;
  }

  private writeBody(options: WriteBodyOptions): string {
    const templatePath = path.resolve(__dirname, options.template);
    const template = fs.readFileSync(templatePath, { encoding: 'utf-8' });

    const { data } = options;

    return ejs.render(template, data);
  }

  private compose(options: SendMailOptions): string {
    const utf8Subject = `=?utf-8?B?${Buffer.from(options.subject).toString(
      'base64'
    )}?=`;

    const { data } = options;

    const body = this.writeBody({
      template: options.template,
      data,
    });

    const messageParts = [
      `From: ${this.options.name} <${this.options.emailAddress}>`,
      `To: ${options.name} <${options.to}>`,
      'Content-Type: text/html; charset=utf-8',
      'MIME-Version: 1.0',
      `Subject: ${utf8Subject}`,
      '',
      body,
    ];

    const message = messageParts.join('\n');

    const encodedMessage = Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    return encodedMessage;
  }

  public send(options: SendMailOptions) {
    const encodedMessage = this.compose(options);

    this.oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    return this.gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });
  }
}

export default Mailer;
