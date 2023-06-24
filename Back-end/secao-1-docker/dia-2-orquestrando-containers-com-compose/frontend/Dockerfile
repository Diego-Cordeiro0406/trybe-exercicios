FROM node:18-alpine

WORKDIR /frontend

COPY . .

RUN npm install --loglevel=error
# ENV BROWSER=none

CMD ["npm", "start"]
