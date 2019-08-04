##### web crawler
* get, regular
* jsonp
* json
* selenium


## 大型系統

* api 純函數無內部狀態, 可水平擴展 \(avoid servlet thread per request\)
* nginx for load balancing, 散掉大量query跟insert的壓力
* pressure for database
* big query
* big insert
* big task \(水平擴展提高吞吐量\)
  * task中控模組與worker, 設計一個task trigger, 由這個模組來分派任務給其他多台worker
  * 引入mq, 走生產及消費者模式 \(監控議題\)
  * 引入akka, 走akka cluster, router & routee, persistence \(監控議題\)
* 大量query
  * sql 優化 \(index, 範圍太大, 欄位太多, 比數太多, 關聯太多table, 用錯函數\)
  * code 優化 \(減少request db次數, call stored procedure\)
  * 引入cache
  * 資料庫架構
    * 分表
    * 分庫
    * 讀寫分離
* 大量insert
  * 業務面 \(Redis Lock\)
  * 引入cache, 批次執行節省開銷 \(2秒 or 500筆\)
    * 異步, server放進去cache回傳一個中間狀態\(待確認\)給client, 當後續worker流程執行完成之後, 再依靠client pull or server push方式通知
  * 引入message queue, 然後藉由水平擴展提高吞吐量 批次執行增加吞吐量
    * 同步, server放進去queue即刻回傳成功給client, queue須提供可靠度保證worker執行任務, 若是後續流程執行失敗則另外走異常流程
    * 異步, server放進去queue回傳一個中間狀態\(待確認\)給client, 當後續worker流程執行完成之後, 再依靠client pull or server push方式通知    
  * 資料庫架構
    * 分表
    * 分庫
    * 讀寫分離
  * 換nosql

## 深度問題

* CPU Bound
  * 切割問題 平行處理
  * 到達極限 限制 線上遊戲
  * 瞬間爆量 走勢圖運算 cache
* Memory Bound
  * 到達極限 限制 線上遊戲
* IO Bound
* 內湖區瑞湖街36號5樓

## 必要欄位

* id
* create time
* update time
* comment
* extra

  pk

  index

  not null

## j2se

* multithread
* collections
* custom network
* rdbms
* java 8 three artifact
* ...

## web crawler

* get, regular
* jsonp
* json
* selenium

