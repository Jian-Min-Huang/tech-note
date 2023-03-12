#!/bin/sh

ZOO_CFG="/zookeeper-3.4.12/conf/zoo.cfg"
KAFKA_CFG="/kafka_2.11-1.1.0/config/server.properties"

# Output server ID
echo "server id (myid): ${SERVER_ID}"
echo "${SERVER_ID}" > /tmp/zookeeper/myid

# Add additional ZooKeeper servers into the zoo.cfg file
echo "${ADDITIONAL_ZOOKEEPER_1}" >> ${ZOO_CFG}
echo "${ADDITIONAL_ZOOKEEPER_2}" >> ${ZOO_CFG}
echo "${ADDITIONAL_ZOOKEEPER_3}" >> ${ZOO_CFG}
echo "${ADDITIONAL_ZOOKEEPER_4}" >> ${ZOO_CFG}
echo "${ADDITIONAL_ZOOKEEPER_5}" >> ${ZOO_CFG}

# Change Kafka ID
sed -i "s/broker.id=0/broker.id=${SERVER_ID}/g" ${KAFKA_CFG}

# Add Kafka listeners
echo "\n" >> ${KAFKA_CFG}
echo "listeners=PLAINTEXT://${HOST}:9092" >> ${KAFKA_CFG}
echo "advertised.listeners=PLAINTEXT://${HOST}:9092" >> ${KAFKA_CFG}

# Add ZooKeeper connect
sed -i "s/zookeeper.connect/#zookeeper.connect/g" ${KAFKA_CFG}
echo "zookeeper.connect=${SERVER1}:2181,${SERVER2}:2181,${SERVER3}:2181" >> ${KAFKA_CFG}

#bash /zookeeper-3.4.12/bin/zkServer.sh start-foreground
bash /zookeeper-3.4.12/bin/zkServer.sh start

sleep 10s

bash /kafka_2.11-1.1.0/bin/kafka-server-start.sh /kafka_2.11-1.1.0/config/server.properties