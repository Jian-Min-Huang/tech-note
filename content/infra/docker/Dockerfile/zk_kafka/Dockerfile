FROM openjdk:8-jre-slim

MAINTAINER Jian-Min Huang <yfr.huang@gmail.com>

RUN apt-get update
RUN apt-get install -y wget

RUN wget http://apache.stu.edu.tw/zookeeper/zookeeper-3.4.12/zookeeper-3.4.12.tar.gz
RUN tar -zxf zookeeper-3.4.12.tar.gz
RUN cp zookeeper-3.4.12/conf/zoo_sample.cfg zookeeper-3.4.12/conf/zoo.cfg
RUN mkdir -p /tmp/zookeeper

RUN wget http://ftp.mirror.tw/pub/apache/kafka/1.1.0/kafka_2.11-1.1.0.tgz
RUN tar -zxf kafka_2.11-1.1.0.tgz

EXPOSE 2181 2888 3888 9092

ADD ./run.sh /run.sh
RUN chmod 777 /run.sh

CMD /run.sh