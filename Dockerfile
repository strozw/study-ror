FROM ruby:2.5.0

ENV APP_ROOT /usr/src/app
ENV ENTRYKIT_VERSION 0.4.0

RUN mkdir $APP_ROOT

WORKDIR $APP_ROOT

RUN apt-get update -qq

# Install ENTRYKIT
#RUN apt-get install -y openssl \
#  && wget https://github.com/progrium/entrykit/releases/download/v${ENTRYKIT_VERSION}/entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
#  && tar -xvzf entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
#  && rm entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
#  && mv entrykit /bin/entrykit \
#  && chmod +x /bin/entrykit \
#  && entrykit --symlink

RUN apt-get install -y --no-install-recommends apt-utils
RUN apt-get install -y build-essential libpq-dev

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs

RUN npm install -g n
RUN n stable

RUN npm install -g yarn

#COPY Gemfile $APP_ROOT
#COPY Gemfile.lock $APP_ROOT

COPY . $APP_ROOT

RUN  bundle install --jobs 4
RUN  yarn install

EXPOSE  3000
