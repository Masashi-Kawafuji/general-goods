FROM public.ecr.aws/lambda/nodejs:14

COPY ./build .env package.json /var/task/
COPY ./src/templates /var/task/templates/

RUN npm install

CMD ["index.handler"]
