FROM node:16

RUN apt-get update \
    && apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

WORKDIR /app

RUN npm install cypress
COPY package*.json .

RUN npm install

COPY . .

# RUN chmod 744 startup.sh

EXPOSE 3000
EXPOSE 8080

CMD ["/bin/bash","startup.sh"]

