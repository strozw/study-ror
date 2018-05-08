FROM ruby:2.5.0

ENV LANG C.UTF-8
ENV APP_ROOT /usr/src/app
ENV ENTRYKIT_VERSION 0.4.0

RUN mkdir $APP_ROOT

WORKDIR $APP_ROOT

RUN apt-get update -qq
RUN apt-get install -y --no-install-recommends apt-utils
RUN apt-get install -y build-essential libpq-dev

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs

RUN npm install -g n
RUN n stable

RUN npm install -g yarn

COPY . $APP_ROOT

RUN  bundle install --jobs 4
RUN  yarn install
