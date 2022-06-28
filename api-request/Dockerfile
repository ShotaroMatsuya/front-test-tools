FROM node:16

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

# RUN chmod 744 startup.sh

EXPOSE 3000
EXPOSE 8080

CMD ["/bin/bash","startup.sh"]

