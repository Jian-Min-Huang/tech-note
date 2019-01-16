# Kafka and Open Draw

## Agenda
* 人無法解決的事情 通常程式也沒辦法
* why ? what ? how ?
  * why, 為什麼要談它? 我們遇到了什麼困難要解決?
  * what, Kafka是什麼?
  * how, 如何用它解決我們的困難?
* 開獎設計

## why ?
* according ken's last presentation
* hadoop & spark 為我們解決了巨量儲存跟輸出的問題
* 而現在談的是即時的巨量資料處理之於系統的影響
  * 突然大量的請求, 即時使用者數據分析, 大量的投注單開獎

## what ?
* message queue, first in first out data structure
  * just a message queue ?
  * multi thread program
    * 找到可平行處理的部份, servlet per request per thread, 很多個老闆
    * inner queue, nodejs event driven, netty reactor pattern, 分工合作的餐廳
  * more feature about queue
    * 1 -> 1
    * 1 -> many
    * ...
  * add communication part to be a service
    * redis queue
    * zeromq
    * activemq
    * rabbitmq
    * kafka (zookeeper for cluster)
  * profile of kafka
  * special part of kafka
    * persist first, leveldb
    * push, pull, mix and consumer offset
    * consumer group
    * multi partition
    * isr and replication
    * almost once, at least once, exactly-once semantics
    * batch and stream process (spark, storm, kafka)
    * stream aggregate 拓墣結構
    * connect

## how ?
* 開獎設計
* real case performance

http://spring.io/projects/spring-cloud-zookeeper
