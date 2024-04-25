FROM node:16-alpine

WORKDIR /app

COPY . .


# RUN npm install
# RUN tsc -b
# RUN node dist/index.js

EXPOSE 8080

ENV PORT=8080

CMD [ "npm","run","start1" ]