##### 烏托邦
* 漂亮的UI
* 良好的UX
* 適合的工具及函式庫
* 一致的 Coding Style
* 高內聚低耦合的架構
* 水平伸縮
* 快速佈署
* 易於測試
* 方便監控
* 無狀態或強健的狀態流程
* 快速響應
* 異常回復

##### Safe Application Container
* Http Handler
* Bean Management
* Dynamic Data Source & Replication
* Message Oriented Middleware
* Sub module
  * Safe Tcp Link
  * Safe Cache

##### N層式系統結構
* CDN
* API Gateway (反向代理, 負載平衡, 靜態資源管理, 路由管理, 服務發現 降級 熔斷, 監聽及過濾, 健康檢查, 權限, 監控, 限流, 快取, 轉換, 日誌)
  * 表現層
  * 控制層 檢查引數, 驗證權限, 派發請求, 處理回應
    * 快取層 使用快取
  * 服務層 撰寫邏輯, 異常處理 
    * 通訊層 模組溝通 連結服務
  * 持久層 數據保存
* 資料庫

##### 風控多模組系統架構
##### 任務式系統架構
##### 單體基本三層式架構
##### 網頁後台基本三層式架構
##### 即時通訊系統架構
* 推觸發再過來拉
* 一致性哈希應用於 akka actor 連線分群 & redis
* redis broadcast or message queue
##### 推播系統
##### 策略演算法
##### AA系統
##### 開獎中心
##### 彩票系統
##### 運彩系統
##### 鎖機制
* ZooKeeper
* Redis
* Database
##### 主從
* ZooKeeper
##### 水平擴展
* OAuth Token無狀態負載平衡
##### 分散式應用程序
* Akka messaging, RESTFul, RPC, RMI, SOAP
##### Microservice
* api gateway, serivce mesh
##### Gateway & Exchange


##### 大型系統
* api 純函數無內部狀態, 可水平擴展 (avoid servlet thread per request)
* nginx for load balancing, 散掉大量query跟insert的壓力
* pressure for database
* big query
* big insert
* big task (水平擴展提高吞吐量)
  * task中控模組與worker, 設計一個task trigger, 由這個模組來分派任務給其他多台worker
  * 引入mq, 走生產及消費者模式 (監控議題)
  * 引入akka, 走akka cluster, router & routee, persistence (監控議題)

* 大量query
	* sql 優化 (index, 範圍太大, 欄位太多, 比數太多, 關聯太多table, 用錯函數)
	* code 優化 (減少request db次數, call stored procedure)
	* 引入cache
	* 資料庫架構
		* 分表
		* 分庫
		* 讀寫分離

* 大量insert
    * 業務面 (Redis Lock)
	* 引入cache, 批次執行節省開銷 (2秒 or 500筆)
		* 異步, server放進去cache回傳一個中間狀態(待確認)給client, 當後續worker流程執行完成之後, 再依靠client pull or server push方式通知
	* 引入message queue, 然後藉由水平擴展提高吞吐量 批次執行增加吞吐量
		* 同步, server放進去queue即刻回傳成功給client, queue須提供可靠度保證worker執行任務, 若是後續流程執行失敗則另外走異常流程
		* 異步, server放進去queue回傳一個中間狀態(待確認)給client, 當後續worker流程執行完成之後, 再依靠client pull or server push方式通知	
	* 資料庫架構
		* 分表
		* 分庫
		* 讀寫分離
	* 換nosql

##### 深度問題
* CPU Bound
  * 切割問題 平行處理
  * 到達極限 限制 線上遊戲
  * 瞬間爆量 走勢圖運算 cache
* Memory Bound
  * 到達極限 限制 線上遊戲
* IO Bound

##### docker deploy vs jar deploy
* docker deploy
  * -v /SP/logs:logs
  * -v /SP/config/api/:/config
  * --add-host=host.kafka:192.168.250.38 
  * --add-host=api.fund:192.168.250.37
  * -e activeProfiles=docker
  * -e serverPort=8901
  * -e "TZ=Asia/Taipei"
  * entryPoint(['java', '-Dspring.profiles.active=${activeProfiles}', '-jar', 'app.jar'])
* jar deploy
  * /SP/api/sport-api-0.0.1.jar
  *        /config
  *        /logs
  * java -jar -Dspring.profiles.active=${activeProfiles} sport-api-0.0.1.jar
* if you want auto scaling, docker will be good choice


##### Naming Conversions
```java
com.${TEAM_NAME}.${PROJECT_NAME}.${LANGUAGE}.XXX
org.${TEAM_NAME}.${PROJECT_NAME}.${LANGUAGE}.XXX
simpleVariable
simpleVariable_Unit
xxxController
xxxService
xxxRepository
  insert(xxxDto) : int
  select(...) : int
  select(...) : List[xxxEntity]
  update(xxxDto) : int
  delete(xxxDto) : int
database-name
table_name
${COLUMN_TYPE}_COLUMN_NAME
```

# Object member order
```
fields
constructors
methods
getter/setter
private class
```

# Style
x Constant obey encapsulation rule, cause low cohesion and high coupling
x xxxUtil obey delegation rule, cause high coupling and duplicate code
o xxxVo as argument can decrease amount of arguments
o xxxDto is for different client and xxxVo is for server, so it need to transform

# Special Object
* Pojo
* JavaBean
* Bo (business)
* Dao (data access)
* Vo (value)
* Do (domain)
* Qo (query)
* To (transfer)
* Dto (data transfer)
* Po (persistent)
* Session Bean
  * Stateless Session Bean
  * Stateful Session Bean
* Entity Bean
* Message Driven Bean

##### debug procedure
* open issue
* open feature/hotfix branch
* reappear
* modify
* local test
* submit
* merge branch
* integration test
* close issue

##### 經驗&技巧
* 空間換時間
* 快取 > 硬碟
* 省流量 差異 > 全部
* 熱身 暖機 熱資料
* method inline (例如 logger isDebugEnabled)
* 用多型代替if else
* 封裝行為與使用委派原則 (例如不要用xxxUtil)
* 用String來表示狀態會更有意義
* 用Int則是方便數學計算，程式碼更簡潔
* 避免子函數互相呼叫(放到主流程邏輯會比較清晰)
* 10Mbps = 10 * 1024K bit / s = 10 * 1024 / 8 KBs = 1250 KB/s = 1.25 MB/s
* 一個thread約1mb, 一個actor約300bytes, 一個fiber約400bytes 
* short:2,int:4,long:8,float:4,double:8,char:2,byte:1,boolean:dependent jvm
* POC經驗
  * 小型範例與測試
  * 寫下來
  * 圖形化
  * 創意
  * 簡化變因
  * divide and conquer
* 盡量寫成純函數(輸入輸出資料串流全是顯式 Explicit 的)，無狀態、執行緒安全，任意組合後還是純函數，可對運算結果快取
  * 只能操作輸入的final argument
  * 不能讀寫全域變數、IO(否則便是非純函數)
  * 不能更改argument的內容(否則便是非純函數)
  * 再透過回傳新物件傳遞給外部
* 推 拉 叫你來拉
* task trigger cache update
* 不要直線思考往前衝往前解 退一步棄一步海闊天空
* telnet 不到, 關掉防火牆 重開服務(docker or iptables)
* 用 sql join 代替 for loop
* 基礎型別會比Wrapper快 (double -> BigDecimal)
* 正規化過頭時會導致修改相依度過高 直接壓死數值在該紀錄 odds not oddsId
* 注意一個操作的原子性 (不是整批退款 是給錢之前退款)
* 另外紀錄或是加表來檢核一個重要結果
* Table 必要欄位 id, status, createTime, updateTime
* 行程 線程 協程
* otp 避免多重觸發
* 編碼時使用36進位省空間
* mono 取代 try catch
* 適當的使用redis打散結構化物件達到快取的效果(不該存一個json而是打散成key value)
* 做每一步都要慢下來看效能設計有沒有更好的地方 lottery-api (100*1 100*1, 300*1 100*1)
* 分散式交易大概有四種做法 (two phase, Q, 一個thread監督, 寫紀錄事後監督)
* left join 可以做到傳統join寫法做不到的事
* DNS prefetching GZIP
* 設定類只記有的 沒得給預設
* 接受 理解 提問 假設 改進 結論 出師
* post的優點是可以只改object內容 經過之處不用多動 當然你可以透過改造get來得到一樣效果  /issue/search?xxx, xxx=object, 但這個對於純正restful來說又有點變異
* new Date().getTime() vs System.currentTimeMillis()
* springfox 文件化
* 確保每個重要block有log
* guava, apache common lang
* kafka 開獎大概3ms/筆
* while -> stream

##### 坑
* 編碼(HTTP, JAVA COMPILE, LOG, DB)
* 執行緒安全
* 轉型及相等性
* get 的型別問題, Object Key
* 非同步
* 變數生命週期
* Dead Lock
* 資源釋放 (try catch finally)
* scala函數明確return
* 浮點數進位計算
* 函式庫版本及相依問題 (maven, npm)
* 貿然修正 錯錯得對 放出妖怪
* 合併導致語法正確但語意錯誤
* 框架版本不要用太新
* localhost vs 0.0.0.0 vs fix ip
* transaction isolation
* Nginx Header
* 注意Docker每次都是新的, 忘記掛kafka-stream出來
* save, saveAndFlush & async
* Nginx 自動重試
* 找不到問題的時候就還懷疑是環境問題
* @Transaction 坑 互咬
* @Bean 不需要 直接new
* Kafka 有兩個錯誤議題 一個是NoSuchFile, 一個是index不同步, producerfencedexception
* 注意docker alpine有缺epoll kqueue
* jpa 名字壞掉直接炸 spring boot直接開不起來又沒有log
* fuckinnnnnnnnnnnnnnnnnnnnnnng selinux docker 權限R
* docker 要掛東西要記得權限問題 chmod 777
* 採新雷 文件殘破 設定零散 版本不穩 套件相依

##### 寫程式的演進
```
(凌群) 一支主程式 可以動就好 直接硬寫(不OOP 資料跟行為混在一起)
(凌群) 自訂函數(不OOP 資料跟行為沒混在一起)
(國票) 功能性物件分類(java bean dto vo dao bo util ...)
(亞太) 藉參數設定(Config)取得基本彈性
(中華) Spring Code Type IOC/DI AOP ISP and Programming for Interface not implementation
(自學) 用 XML 設定做出更複雜的設定檔 應用在 Reflection 及 JMX (更多的操作彈性)
(自學) 應用設計模式並符合設計原則(OOP(sollid))
(自學) 做好例外處理 寫出易測的程式
(紐摩) 必要時使用原始 API 別依賴 Framework
(瑞豪) 學會在不同的狀況選擇適合的框架(工具)
(瑞豪) 進階議題 SA SD 
                 設計架構(SOA, Microservice, n-Tier)
			  PG
			     敏捷
				 瀑布
				 DevOps
				 演算法視覺化
				 安全性
				 效能調教(GC)
				 輔助工具(Postman)
				 除錯(斷點 遠端JDPA)
				 單元測試
			  SE
				 虛擬化部署
			  QA
				 功能測試
			     整合測試
				 壓力測試
		      MIS
				 管理後台
			     監控告警
			  DBA
				 資料庫備份
(瑞豪) 正視物件導向，使用class(OOP、資料跟行為在一起、封裝資料、善用委派)
(瑞豪) 設計分散式系統
(伯牙) 更多的DB操作(SEQ 階層 JOIN VIEW STORED PROCEDURE) 
       前端操作(JQUERY REACT) 效能調教(HTTP POOL) 
       AA模組 MyBatis(Paging) 
       後端操作(Nginx Redis) 
       架構(橫向擴展)
       Infra(CDN, 線路) 
       前後端合作技巧(static domain thymeleaf api init setting)
       QA(順序 速度 步驟)
(伯牙) 學習當主管 Build Team
       member 有強有弱, 
       jira, 
       trello, 
       wiki, 
       issue for meeting, 
       跨部門合作DS PM RD QA CS INFRA OP 業務 BOSS, 
       每季的檢討
(自學) 語言特性的本質 (例如純函數 FP method invoke chain 其實也能透過java+dp完成 是看寫的人的態度)
(自學) 問問題 
       What Why How 
       這個東西用在什麼情境? 
       一個情境通常怎麼解? 
       Pros & Cons ? 
       如何導入它 ? 
       問自己能不能更好 ? 
       效能瓶頸在哪 ? 
       自己替自己解答 ?
(伯牙) Winter & Sport & Lottery Project 
(伯牙) 好好寫Google Doc
(伯牙) 同一個東西能不能用不同架構完成 (開獎用mq 改成 actor)
(伯牙) 更深度的docker應用, private registry, docker-compose, kubenates
(伯牙) 學會面試人
(伯牙) 為了別的部門設想（使用docker可以讓他們只學一套）
(伯牙) 丹尼爾的一系列新政（github flow mr, checkstyle & pmd, gitlab ci/cd pipeline, efk）
(伯牙) spring clund, k8s
(伯牙) 更大的架構 (ark-platform), 架構的演進 實體機部署 虛擬機部署() 雲端虛擬化(AWS) 雲端原生化(docker, k8s)
(伯牙) gcp, gke, gcs, gcr, trace, stackdriver, big query, memorystore
(伯牙) 思考事情做出輕重判斷, 釐清責任(主管)
```
