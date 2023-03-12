# Build
```sh
$ docker build -t jianminhuang/jre8_zk3.4.12_kafka1.1.0:1.0.0 .
$ docker login -ujianminhuang
$ docker push jianminhuang/jre8_zk3.4.12_kafka1.1.0:1.0.0

$ sh kafka-topics.sh --delete --zookeeper zkka-node1:2181,zkka-node2:2181,zkka-node3:2181 --topic EvaluateTopic
$ sh kafka-topics.sh --create --zookeeper zkka-node1:2181,zkka-node2:2181,zkka-node3:2181 --replication-factor 3 -partitions 3 --topic EvaluateTopic
$ sh kafka-topics.sh --describe --zookeeper zkka-node1:2181,zkka-node2:2181,zkka-node3:2181 --topic EvaluateTopic
```