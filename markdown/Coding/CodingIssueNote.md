##### Compare
* Service Discover, client vs server
* jwt token security & cookie session
* Akka vs MQ
* batch vs stream processing
  * batch, no organize, schedule trigger, spark streaming is micro batch
  * stream, organize, event-driven, storm streaming
  * Batch processing is generally appropriate for use cases where having the most up-to-date data is not important and where tolerance for slower response time is higher. For example, offline analysis of historical data to compute results or identify correlations is a common batch processing use case.
  * Stream processing, on the other hand, is necessary for use cases that require live interaction and real-time responsiveness. Financial transaction processing, real-time fraud detection, and real-time pricing are examples that best-fit stream processing.
* Docker 與虛擬機器
* oo, fp, stream
* spring cloud gw vs zuul
* 

##### Web
* OAUTH
* Security
  * OWASP
  * Sql Injection
  * XSS
  * CSRF
  * DDOS
* CORS
* SEO
* GA

##### Architecture Design
* Model1, Model2
* Model View Controller, Model View Presenter, Presentation Model, Model View View Model
* Single Page Application, Client Side Render, Server Side Render
* Event-Driven Architecture
* Service-Oriented Architecture
* Enterprise Service Bus
* Staged Event-Driven Architecture
* Micro Service
  * API Gateway
    * Service Invocation
    * Service Discover
    * Health Check
    * Routing
    * Filter
    * Listener
    * Service Downgrade
    * Circuit Breaker
    * Auth
    * Monitor
    * Load Balance
    * Cache
    * Service Sharding
    * Static Resource Management and Processing
* Service Mesh
* Nginx Routing
* Command Query Responsibility Segregation
* Event Sourcing
* Stream Processing
* 3-Tier Architecture
* Anemic Domain Model
* Rich Domain Model
* High Availability
  * Active Active (Master Master)
  * Active Passive (Active Standby) (Master Slave)
  * Cluster
* Transaction
  * Two Phase Commit Protocol
  * Three Phase Commit Protocol
  * Paxos
  * Message Topic
  * Pagination and Isolation
* Publish and Subscribe (Producer and Consumer)
* Synchronous and Asynchronous
* Centralized and Decentralized
* Polling, Long Polling and Push Model
* Business Horizontal and Vertical Split
* Message-Oriented Middleware
  * peer-to-peer, queue
  * peer-to-server, topic
  * Message Delivery Reliability
    * At most once
    * At least once
      * Repeat Problem
    * exactly once
  * Order Problem
* Cache System
  * just assist
* Finite Status Machine
    * Initial
    * Processing
    * Done
    * Error
    * Change
    * Save
    * Redo
    * Monitor
* CAP Theorem
  * Consistence, all user can get same data at same time
  * Availability, save data on many node, cluster can work well when a node fail
  * Partition-tolerant each node can keep working when network is error
* BASE Theorem
  * BA,  Basically Available
  * S, Soft state
  * E, Eventual consistency
* Consistent Hashing
* Distributed Hash Tables

##### RDBMS
* Sql Joins(Cross, Inner, Left, Right, Full)
* Normalization and De-Normalization
* Subquery and Join
* Transaction
* ACID
  * Atomicity
  * Consistency
  * Isolation
  * Durability
* Separate Read Write Action
  * Application
  * Database
* Database Lock
* Oracle Real Application Cluster

##### NOSQL

##### DevOps
* Hot and Cold Deployment
* Continuous Integration
* Continuous Delivery
* Blue/Green Deployment
* Rolling Deployment
* Canary Deployment (A/B Test)

##### Cloud
* IAAS
  * GCP
  * AWS EC2
* PAAS
  * Heroku
* SAAS
  * Google Drive
  * Dropbox
* BAAS
  * Firebase
* FAAS
  * AWS Lambda

##### Functional Programming
* Function Side Effect
* Pure Function
* Referential Transparent
* Immutable
* First-Class Function
* Higher-Order Function
* Tail Recursion

##### Object-Oriented Programming
* Encapsulation
* Inheritance
* Polymorphism
* Diamond Problem

##### Development Style
* Scrum
* Agile
* Waterfall
* Kanban
* Extreme
* Lean
* Iterative and Incremental Development
* (BDD) Behavior Driven Development
* (DDD) Domain Driven Development
* (TDD) Test Driven Development

##### Software
* Backward Compatibility
* Forward Compatibility
* Semantic Versioning
* Syntactic Sugar

##### Famous Person & Organization
* Apache Software Foundation
* Martin Fowler
* Kent Beck
* Erich Gamma
* Doug Lea
* Martin Odersky

##### Skill
* Zen Coding & Emmet

##### Unclassified
> Spaghetti Code, Ravioli Code, Lasagna Code
> Dependency Hell, Callback Hell
> Box Model
> Load Balance (Round-robin DNS)
> DNS
> Forward & Reverse Proxy
> CDN + HLS
> ORM, Garbage Collection
> Garbage Collection
> Period(thread sleep, crontab, java timer, Quartz)
> Software transactional memory
> Actor
> C10K Problem
> Servlet Model (thread per connection)
> Reactor pattern (netty)
> Proactor pattern
> GRASP
> Object transformation
> inviting code
> keep alive
> sql & nosql crud compare
> get red envelop
> RESTFul & RPC
> http : json = rpc : protobuf 
> insert & update fast ?
> Fast Data, Big Data
> Git Flow & GitHub Flow & Git LFS
> N + 1 Problem
> AMQP, JMS, MQTT
> 阿里Dubbo, Netflix, Typesafe Lagom
> Guard Clauses
> Headless, e2e, selenium
> httpbin
> cdn 靜態檔, 全站加速
> hash salting, aes, rsa, md5
> ansible chef puppet terraform nagios splunk elk
> Java Duke’s Choice Award
> terraform, helm
> select for update, race condition
> Infrastructure as Code
> spring retry
> test interface or implement
redis lock
http://rockingcloud.blogspot.com/2013/01/update-select-race-condition-table.html
http://rockingcloud.blogspot.com/2013/01/ex-0-1-2-5-6-3.html
https://blog.xuite.net/vexed/tech/22289223-%E7%94%A8+SELECT+...+FOR+UPDATE+%E9%81%BF%E5%85%8D+Race+condition
https://blog.csdn.net/zdwzzu2006/article/details/50490157
https://blog.csdn.net/ToBeABetterOne/article/details/78227033