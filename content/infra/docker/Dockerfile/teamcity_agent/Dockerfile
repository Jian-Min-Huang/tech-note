FROM jetbrains/teamcity-agent:2017.2.4

MAINTAINER Jian-Min Huang <yfr.huang@gmail.com>

RUN curl -sL https://deb.nodesource.com/setup_9.x | bash - && \
    apt-get update && \
    apt-get install nodejs && \
    apt-get install bzip2 && \
    npm install -g yarn && \
    npm install -g gulp && \
    npm install -g grunt && \
    npm install -g grunt-cli
