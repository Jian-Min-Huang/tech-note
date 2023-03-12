##### SOLID
* SRP (Single Responsibility Principle)
```
應該且僅有一個原因引起類別的變更
例：
若是要開發一個帳號管理相關的功能，應該把帳號管理的屬性及行為分開。
將帳號資訊封裝成一個物件(AccountEntity)，操作帳號的行為抽取成業務邏輯(AccountService)
若要取得資訊則取得或生成AccountEntity，操作行為則實作AccountService
如此可降低複雜度、提升可讀及可維護性、降低耦合避免連動
註：
介面雖容易達到單一職責，但類別實作則反之，須注意SRP切割的粒度，過度使用會造成類別暴增
建議介面一定要做到單一職責，類別設計盡量做到只有一個原因會引起變更，而方法則盡可能一次只做一件事
```

* OCP (Open Close Principle)
```
對擴充開放，對修改關閉
例：
在滿足其餘OOAD原則的前提下，此為總綱
對於一個已經release的系統，有新增需求
如果已滿足了SRP，會讓變動的類別減少，避免連動產生副作用
如果已滿足了LSP，可以確實的規範繼承行為，釐清責任的分派
如果已滿足了LKP，規範物件之間的溝通，以最低可見度為原則
如果已滿足了ISP，可良好的規範介面的粒度，避免負責任務過度集中
如果已滿足了DIP，物件溝通大部分透過抽象介面，只要確實遵守抽象介面的規範，針對實作類別修改即可
所以便能更安全地擴充系統功能，避免大幅度的修改產生連鎖副作用
```

* LSP (Liskov Substitution Principle)
```
子類別的實作必須可以完全替代父類別
例：
有個Rectangle類別定義了長寬跟計算面積的函數，有個Square類別繼承它並且覆寫計算面積的函數
結果當使用者使用多型來操作時(Rectangle r = new Square(), double area = r.calArea())，卻發生計算錯誤的狀況
違犯這個原則會讓使用者有錯誤的預期
註：
LSP和SRP以及ISP有很強的關聯，一旦類別負責過多責任，子類別一旦無法完整支援就會違反LSP
要遵守LSP，則子類別必須是加強父類別的功能，不能減少
```

* LKP (Least Knowledge Principle)
```
一個物件應該對其他物件有最少了解
例：
設計物件時應謹慎設定每個屬性跟方法的可見度 (public, protected, private)
除了減少不必要的資訊暴露給外部，也避免外部有機會改變內部狀態
註：
LKP核心概念是對類別之間需解耦、弱耦合。只有弱耦合以後，類別的重複利用率才可以提升，
附帶的影響就是會產生大量的中轉或跳轉類別，使系統複雜性上升，因此使用時須反覆衡量。
```

* ISP (Interface Segregation Principle)
```
物件之間的依賴關係應該建立在物件所需的最小interface上
例：
設計介面時不能過度龐大也不能過度精細違反SRP
基本原則是讓一個介面只服務一個子模組或是業務邏輯
適度重構來減少介面方法
註：
ISP是對介面進行規範的原則，試圖對介面的粒度進行規範
原先以為的ISP其實是面對介面撰寫而非實現
```

* DIP (Dependence Inversion Principle)
```
高階模組不應該依賴於低階模組，兩者都應該依賴於抽象
抽象不應該相依於實作，實作應該相依於抽象
例：
一台車子(高階)不應該依賴於特殊規格的零件(低階)，兩者應該依賴公開規格(抽象)來做溝通
公開規格(抽象)不應該相依於特殊零件(實作)，特殊零件(實作)應該相依於公開規格(抽象)
註：
實作類別內部程式碼可自行實作，但必定要符合介面訂定之規則實作，如此可實現高內聚(內部模組化)
物件之間溝通要用公開的 介面 而不是特定 實作，降低物件之間的耦合，以滿足開閉原則
```

##### Other
* DRY (Don't Repeat Yourself)
```
不要寫出重複的程式碼，應考慮提煉至父類或是委託另一個物件處理
如果有重複的變數值產生，也建議以public final宣告以增加維護性
```

* AOP (Aspect-Oriented Programming)
```
在一個服務的流程中(例如執行前或執行後)插入與服務無關的邏輯(Logging、Security)，這樣的邏輯稱為Cross-cutting concerns
將Crossing-cutting concerns獨立出來為一個物件，這樣的物件稱之為Aspect
Aspect-oriented programming著重在Aspect的設計及與應用程式的縫合(Weave)
Spring Transcation 是以這個實作
```

* Favor Object Composition over Class Inheritance 優先使用合成代替繼承 
```
繼承的優點是可以把重複的屬性及行為移至父類別，使得繼承的子類別可以直接獲得這個屬性及方法，以避免DRY
但父類別的方法不一定永遠合適使用，在不斷的繼承衍生類別時常有覆寫父類別屬性及方法或是委託父類別來操作的情境
這便會造成維護及使用上的麻煩
所以在創造一個物件時，好的做法是將其每個部位都以抽象介面來組合成品
之後在維護及修改時直接抽換抽象介面的實作類即可，以達成解耦
例：
鳥抽象類別 (麻雀、鴨子、老鷹)
有一個抽象方法(覓食)，交給不同的子類去實作
現在有個雁子類別，因為覓食方式跟鴨子一樣，為避免DRY所以增加雁科類別，實作覓食方法
再讓雁子跟鴨子繼承雁科類別以獲得相同的覓食方法
如果今天有個類似的的繼承了雁科的鷲鷹科
他實作了飛行這個抽象方法來讓所有繼承他的子類獲得相同的飛行方法
可是此時某些鷲鷹科子類別有不同的覓食方法，必須做覆寫
最後就會越來越龐大，難以維護及使用
好的方法應該是使用組合，設計一個抽象鳥類別，有許多抽象的方法(飛行、覓食 ... )留待子類實作
使用上需要新增一個類別時，其內部就選擇每個抽象方法的實作方法
需要維護修改時，就變更不同的實作方法即可
```

* Program to an Interface Not an Implementation 面對介面撰寫而不是面對實現 
```
物件之間彼此的溝通應盡量以抽象類別或是介面來溝通而非實作類 (善用多型)
概念類似DIP，試圖做到物件之間的解耦，未來在修改時可直接替換實作，降低修改的副作用
```
	
* Delegation Principle 委派原則
```
不要試著在一個類別中做所有的事，把責任委派給該負責的類別
例：
Object之中的equals()就是委派物件自己去跟物件比較，而不是特別寫一個工具類別來比較
```
	
* High Cohesion, Low Coupling 高內聚低耦合
```
物件的程式碼應該要有很高的比率只和物件內其他有關的程式碼有關聯，而對外部的程式碼，物件或元件等的關聯度要愈低愈好(最佳的狀態是零耦合)。
Data Coupling > Message Coupling > Zero Coupling
```

##### Design Pattern
* Gof 23
```
Simple Factory 靜態工廠，XXXFactory.createApi(XXX xxx);
Factory Method 有四個物件，工廠抽象介面及實作類 還有 產品的抽象介面及實作類，把建構的過程切得更細
Abstract Factory 產品集的概念，基本上是組合多個工廠方法
Builder 每個物件的子部分個別建構複雜，統一集中建構隱藏細節 (包含流利介面)
Prototype 建立物件需耗費資源跟時間時，使用複製的方式來產生新物件
Singleton 讓該物件在執行期只有唯一實例產生，但須注意執行緒安全的問題，寫法有許多種(差別是延遲生成實例或是使用ENUM)，最常見的用法是管理某種資源的XXXManager
Adapter 將目前的實現外掛上一個轉換來達到新功能，長相也像代理模式
Bridge 模組之間訂好溝通的協定或是抽象介面，方便實作類的切換，像是JAVA JDBC
Composite 數個物件之間，呈現一種樹狀結構。物件之間可以組合
Decorator 傳入一個核心物件然後再為他加上額外的功能，長相很像代理模式
Facade 限制外部對子模組的大量直接存取，設下一個固定入口，讓外部由此入口進入
Flyweight 細瑣物件占用記憶體，設計成一起共用的概念，像是JAVA STRING POOL
Proxy 長相類似裝飾者，保護代理是為控制核心物件的存取、虛代理是控制資源延時載入
Chain of Responsility 在每個物件操作結束之後依序交後面那個物件繼續操作，像是JAVA SERVLET FILTER
Command 物件來代表實際行動，命令物件可以把行動(action)及其參數封裝起來。這些行動可以被重複或取消 像是SWING ACTION LISTENER
Interpreter 定義特殊語言來讓操作更加直觀
Iterator 定義一個迭代器，用來遍歷資料結構，像是JAVA COLLECTIONS裏頭都有定義
Mediator 擔任多個模組之間的溝通協調中繼角色，避免各模組之間大量直接溝通造成的副作用
Memento 建立物件狀態復原點，通常會搭配clone使用，讓物件做出後續操作之後，如果出錯可以回復到上個復原點
Observer 物件之間的相依變化，當一個被觀察者發生變化要回呼觀察者做出動作
State 以策略模式為基底，加上屬性來表示物件狀態，在每次操作的過程中需要維護物件的狀態
Strategy 傳入多個抽象介面並組合這些抽象介面的方法來定義演算法骨幹
Template Method 用一個抽象類別來定義演算法骨幹，把許多預設實現或是留待子類別實現的方法串起來，像是SPRING JDBC TEMPLATE
Visitor ?

Creational
    Abstract factory pattern groups object factories that have a common theme.
    Builder pattern constructs complex objects by separating construction and representation.
    Factory method pattern creates objects without specifying the exact class to create.
    Prototype pattern creates objects by cloning an existing object.
    Singleton pattern restricts object creation for a class to only one instance.
Structural
    Adapter allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class.
    Bridge decouples an abstraction from its implementation so that the two can vary independently.
    Composite composes zero-or-more similar objects so that they can be manipulated as one object.
    Decorator dynamically adds/overrides behaviour in an existing method of an object.
    Facade provides a simplified interface to a large body of code.
    Flyweight reduces the cost of creating and manipulating a large number of similar objects.
    Proxy provides a placeholder for another object to control access, reduce cost, and reduce complexity.
Behavioral
    Chain of responsibility delegates commands to a chain of processing objects.
    Command creates objects which encapsulate actions and parameters.
    Interpreter implements a specialized language.
    Iterator accesses the elements of an object sequentially without exposing its underlying representation.
    Mediator allows loose coupling between classes by being the only class that has detailed knowledge of their methods.
    Memento provides the ability to restore an object to its previous state (undo).
    Observer is a publish/subscribe pattern which allows a number of observer objects to see an event.
    State allows an object to alter its behavior when its internal state changes.
    Strategy allows one of a family of algorithms to be selected on-the-fly at runtime.
    Template method defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior.
    Visitor separates an algorithm from an object structure by moving the hierarchy of methods into one object.
```

##### multi-thread pattern
```
Guarded Suspension
Producer Consumer
Thread-Per-Message
Worker Thread
Thread Pool
Future
Read-Write-Lock
Two-phase Termination
Thread-Specific Storage
```

##### enterprise pattern
* https://www.enterpriseintegrationpatterns.com/patterns/messaging/