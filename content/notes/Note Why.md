class field, method (call by class => Class.field or Class.method)
instance field, method (call by instance => new Class().field or new Class().method)
因為在同一個類別之中，沒有建立自己的物件，既然沒有建立物件，那如何存取instance method呢？

static property 1 : use common memory with all instance
static property 2 : declare it to class field or method

final
in variable, it can't be change
in function, it can't be override in child class
in class, it can't be extend

override 覆寫
overload 多載

in primitive, == is compare itself
in class, == is compare the object ref (參照是否指向同一物件)
in class, if you didn't override equals method then the Object.equals is same as ==

ArrayList vs Vector
new, old
faster, slower
not synchronize, synchronize

ArrayList vs LinkedList
contiunus, discreate
random access fast, slow
itertor fast, slow
insert slow, insert fast

StringBuilder and StringBuffer (thread safe)

1=1 in sql syntax ?
為了連接多條件，可以不用決定是否加上AND，全加即可

singleton and util class
singleton can extend or implement

execute order
super static block
static block
super block
super constructor
block
constructor

initialize variable order
variable super static block
variable static block
variable in super
variable in super block
variable in super constructor
variable
variable in block
variable in constructor

extends 實現繼承，對super的擴展
implements 實現接口，實現接口的功能

abstract class 不可實體化，只能繼承，並強迫實作抽象方法

                    abstract class			interface
field 				final					public static final
		            static
		            private
		            public
		            protected
method				abstract				abstract public static final
		            final
		            static
		            private
		            public
		            protected

extend & implement  extend abstract class	only extends interface
                    extend class
                    implements interface

relation            is a					like

POJO(plain old java object)
only private field and its getter/setter

JavaBean
a POJO with non parameter public contructor and implement Serializable

model 1 html + JSP + JavaBean
model 2 model view controller

GET是等冪（idempotent）操作，也就是多次GET操作，都必須傳回相同的結果，GET請求顧名思義，原則上不影響伺服端的狀態。
POST適用於非等冪操作，POST有可能會改變伺服端的狀態，像是修改資料庫的內容。

If your application is page centric(model1) then put .jsp outside the WEB-INF and request them directly .
If your application is servlet centric(model2) then you may add .jsp file under WEB-INF and request them via RequestDispatcher.

catch train 需不需要抓最大的Exception，是看你的執行緒在JVM抓到Exception之後能不能死
能死就不用抓，不能死就要抓到

類別注入 context.getBean(SystemBo.class);
名稱注入 context.getBean("systemBo", SystemBo.class);
         (SystemBo) context.getBean("systemBo");
名稱注入比類別注入靈活，因為可以有很多個

遇到this.name = name盡量改成 this.name = inputName 來做區隔避免BUG

雖然已經有回傳值了，但throws Exception可以強迫呼叫者處理Exception來實現速錯

method extends from Collections interface
Throws exception when error
add()
remove()
element()

method extends from Queue interface
Returns special value when error
offer()
poll()
peek()

這不是命題，沒有否逆命題的真值
if A.equals(B) then A.hashcode() == B.hashcode()
if !A.queals(B) then A.hashcode() != B.hashcode()
而由於兩個物件相等，所以 hashcode 相等
應用 hash table 的 HashMap, HashSet, HashTable 的這幾個 Collections
會以 hashcode 作為 key, 來作為物件的參照
所以若是 hashcode 不同，直接視為不是相同物件
hashcode相同，再呼叫equals來再次判斷

每一個thread都有自己的一個專屬stack，
所以auto級(local)的區域變數是不會有共享的問題，
因為它們都是存放在thread各自的記憶體空間內，彼此不甘擾。
也就是說，若你的程式區塊中，所有使用到的變數都是local(auto)變數，
那你這個區塊，或說這個thread，就算是thread-safe！
相反的，若你的區塊中有用到全域的變數，那麼你的這個thread就有可能是不安全。

每一個Servlet在Web Container在被初始化之後都是以Singleton的形式存在直到銷毀之前
再根據每個Request進來時呼叫Service()分給對應的方法(doGet(), doPost())
並取得一個執行緒來為此Request服務

stage and commit
只有已經stage的檔案才會被commit，這可以讓使用者更清楚地掌握目前工作環境狀況

collections 除了本身資料結構的特性之外，就是探討同步及是否接受Null值及容量

無須特殊功能的話，stack, queue 用 ArrayDueue 實現執行速度最快 (LinkedList的優點在這兩種結構上無速度優勢)

Primary key versus unique index
Things that are the same:
    A primary key implies a unique index.

Things that are different:
    A primary key also implies NOT NULL, but a unique index can be nullable.
    There can be only one primary key, but there can be multiple unique indexes.
    If there is no clustered index defined then the primary key will be the clustered index.

需要 Concurrent Collections 的原因是其內部可能會有其他的同步效應 (像是需要指向NEXT NODE)，使得在迭代或是其他方法時拋出ConcurrentModifyException
並非只是你單純想著對新增移除方法做同步化即可 (如果情境很簡單也可能這樣就可以)

spring 在寫 service 的時候, 若 scope = "singleton" 且有 global 的變數共享, 就必須注意執行緒安全的問題
反之如果 scope = "prototype" 或是皆為 local 變數就沒有這個問題
若是 spring mvc 的話可以把設定 scope = "request"

singleton thread safe 分兩個層面，物件生成時 及 使用方法時
enum 只保證了生成, 未保證使用方法時的執行緒安全, 若使用全域變數時請注意此問題

20150614
在CompTickGwPoc專案試著原始JDK API方式，想寫出符合OOAD及高內聚低耦合
使用了許多的inner queue，發現對於解耦十分有幫助
其中為了符合依賴反轉 (因為沒有SPRING框架輔助，所以大量使用工廠模式以及設定檔來讓架構變得動態)
properties過於簡便，讀XML雖然動態，但程式已經過於複雜，最後暫告一段落決定還是不要走火入魔連一行CODE都不改
解耦層級暫時放在修改程式碼那層即可
20150615
由於QueueWorker有很多重複的CODE，把CODE移至抽象父類
在Listener, Queue都設計出可以重用的元件, 係使用dom讀取xml設定並使用reflection來動態載入物件

為什麼要使用抽象類別?
顧名思義抽象類別不是一個實體的東西，他常代表的是一個骨幹、框架，還有很多功能未實作，無法直接生成
例如你有一個車子的半成品，他可能有一些已經完成的東西，但重要的引擎、傳動尚待實作
今天有個汽車實作車子這個半成品，把其他未完成的東西時做出來
所以你可以 new 汽車, 卻無法 new 車子
使用上抽象類別是可以沒有抽象方法的，端看實務上你想表達的概念，這個東西需要半成品到什麼程度

什麼時候使用抽象類別 ?
通常在既要約束子類別的行為(強迫實作抽象方法)，又要為他提供公共功能時使用抽象類別(擁有非抽象的方法，介面沒辦法)

選定修飾子的原則是由嚴到寬

>>> template
提供外部方法，由內部的抽象方法組合而成，留待子類別實作
優：邏輯直接實作在子類，簡單乾淨好整理
缺：繼承為強耦合，未來不易更改父類架構 (觀察使用情境是否需要繼承及更改架構)
	(也許有時候你更希望他是一個繼承結構，意義更明確)
>>> callback
A類別的方法中，直接使用引數的介面內的方法來操作
其他類別在使用A類別的方法時要傳入介面的實作或是直接使用匿名類別
優：寫法簡潔且十分動態，耦合度最低 (連設定都不用，但引數個數須注意)
缺：直接實作介面可能會散落各處，有管理上的問題，為了動態使用匿名方法則是要實作全部方法 (可能只需要一個)
	(如果介面的方法只有一個副作用會少一點)
>>> strategy
此方法即是著名的以組合代替繼承
在A類別中先把需要的介面設定進去，提供由介面內的方法組成的外部方法
優：耦合度低，靈活度高
缺：直接實作介面可能會散落各處，有管理上的問題
註：如果介面內容簡單，類別需要的介面又少，推薦callback，反之則使用strategy

額外使用情境 strategy + template
Context 引用 Strategy 介面，再先以 AbstractStrategy 實作 Strategy 提供公共方法 (不要覆寫Strategy內部方法)
再繼承AbstractStrategy並覆寫Strategy內部方法，生出Strategy1, Strategy2, ...
如此Strategy1, Strategy2便可擁有公共方法同時又有不同的Strategy內部方法實作
可以說是由Strategy提煉出抽象父類

Q1. 為什麼不用抽象類別 + 介面設定進去，做出一個template+strategy的東西呢?
A1.	如果要用設定進來的介面內部的方法，用途便跟template的抽象方法衝突
	如果全部選擇前者，那沒有抽象方法的話就跟一般類別一樣，不須要訂成抽象類別，就變成一般的strategy
	如果混合使用，同時吸收兩者缺點，優點又會被覆蓋掉，不建議

善用 && || 來讓程式更精簡

註解過多代表程式碼無法閱讀，請重構
最終目標是由log和Version Control Commit log取代

抓了例外再丟是為了紀錄LOG
throws Exception 標記呼叫者必須處理例外，實現速錯，強迫呼叫者處理例外 (受檢例外)

找機會往RWD+金流去走

			constructor	vs	init
load config Y				Y
回傳值		N				Y
控制Timing	N				Y

mock and reflection會遇到過多建構子引數的問題，使用init來設計可以避開這個問題
servlet 也是這樣設計，這有其歷史，請GOOGLE

      遞迴                      非遞迴
優點  程式較簡潔明確            較節省執行的時間
      節省記憶體空間            不須額外的堆疊空間
	  表達力較強
	  區域變數與暫存變數較少

缺點  執行時參數的存取較費時間  程式較長
      需額外堆疊空間支援        浪費記憶體空間
	                            表達力較弱
	                            區域變數與暫存變數較多

service 需要回傳值是因為方便單元測試的MOCK

JSON.stringify() 有類似於Serializable的功能

always stupid bug, 順序錯
手動清掉, 下次重拉

前後溝通招數
寫html
cookie
session
header
url帶參數


用spring profile在啟動參數在帶進去完成解耦

mac預設是ipv6 要加上
有時候會發生 Getting `Can't assign requested address` java.net.SocketException
解法是 加上 jvm argument -Djava.net.preferIPv4Stack=true


億級資料查詢
index怎麼設計
subquery反正規 與 inner join正規
stored procedure
view

把用户ID=1的昵称改为王蛋蛋。它和PUT的区别就在于，PUT必须提供全量的user属性替换原有的服务器资源。而PATCH只会更新提供的字段。
假如user中还有一个version字段用来记录版本，每次PATCH，version++。正因为这样的不可控性 ，所以PATCH被定义为可能是非幂等（idempotent ）的。


java.lang.IllegalArgumentException: Comparison method violates its general contract! 
先说如何解决，解决方式有两种。 
修改代码 
上面代码写的本身就有问题，第4行没有考虑o1 == o2的情况，再者说我们不需要自己去比较，修改为如下代码即可： 
[java] view plain copy print?在CODE上查看代码片派生到我的代码片 
Collections.sort(list, new Comparator<Integer>() {  
    @Override  
    public int compare(Integer o1, Integer o2) {  
        // return o1 > o2 ? 1 : -1;  
        return o1.compareTo(o2);// 正确的方式  
    }  
});  
不修改代码 
那么问题来了。为什么上面代码在JDK6中运行无问题，而在JDK7中却会抛异常呢？这是因为JDK7底层的排序算法换了，如果要继续使用JDK6的排序算法，可以在JVM的启动参数中加入如下参数： 
[plain] view plain copy print?在CODE上查看代码片派生到我的代码片 
-Djava.util.Arrays.useLegacyMergeSort=true  