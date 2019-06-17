# Junior Java 面試題

```text
Assume these three class is part of poker program,
Please complete it .

// Random random = new Random(new Date().getTime() +
                Runtime.getRuntime().freeMemory()));

class Card {

    private Enum suit; // not Enum solution ?
    private Integer number; // int vs Integer ?

    // getter
    // setter
    // hashcode
    // equals
    // toString

}

class Deck {

    private List<Card> cards = new ArrayList<>(); // List ? Array ? Set ? Map ? Queue ? Deque ?

    public Deck() {
        create();
    }
    private or public void create() {
        // code
        // bigO
    }
    public void shuffle() {
        // code
    }

}

class PokerUtil {

    public static Boolean compare(List<Card> cards1, List<Card> cards2)

}

1. 在獲得這份工作之前 你做了什麼準備好讓自己有辦法進入業界 ?
2. 為什麼你覺得你可以寫好程式 你跟別人哪裡不一樣 ?
3. 能否舉出你有過人毅力解決困難問題的例子
```

## 挑選標準

* 學歷 --&gt; 聰明程度
* 補習班出身但有被撿走 --&gt; 努力保證
* 補習班出身但沒被撿走 --&gt; 扣分
* 數理相關背景 --&gt; 資訊腦
* 資策會 --&gt; 需特別驗證程度 成功加分 失敗扣分
* 考題 --&gt; 測試個性及即時反應

## 培訓目標

* 無論試用通過與否, 你們學到的技能都是業界線上實戰技能, 期望對於中途出家的你們有所幫助
* 這是公司不是學校, 你的評價是別人給的, 切莫陷入一個自我感覺良好及自我滿足的窘態, 跟不上腳步就只能說再見
* 0~2個月
  * 了解Java Backend Web App的生態及學習J2SE, J2EE各個面向與工作所需技能
* 2個月~1年
  * 加深第一階段學到的東西 開始學習商業邏輯
  * 接觸現有的系統 能夠開始做一些簡單的小需求及除錯
* 1年~2年
  * 加深前兩個階段學習的東西 觸類旁通一些新的面向
  * 接手開發並維運目前的系統

## 重要軟技能

* 學會問問題, 不要天花亂墜的描述, 直接說你遇到什麼難題 想要做什麼, 幫助定位並解決問題
* 根據關鍵字找解答, 關鍵字不會下就來問
* 學習的第一步是模仿, 學過不好的才知道什麼是好的
* RD的日常
* 互相幫助, 合作不內鬥, 團隊精神, 公司角度

## 發offer時請他們預習的項目

* 在練習時請試著用 IntelliJ IDEA 而非 Eclipse
* java本質部份 請多加複習 找java入門書及servlet書研習
* 學習完成 tomcat webapp
* 學習操作 redis
* 學習操作 sql & database
* 學習 maven & gradle 建立與管理專案
* 學習操作 git
* 學習操作 linux
* ----- 額外項目 有餘力再做 -----
* jquery dom 操作 與 Ajax 請求
* spring 本質 與 ecosystem

## 教學

* \(D\) 建立GitLab帳號
* \(V\) ssh
* \(V\) Sourcetree git clone
* \(V\) Git 基礎操作, gitflow, pmd & checkstyle
* \(V\) Intellij IDEA community
* \(V\) Postman 操作與 Debugger
* \(V\) Maven 編譯與部署 持續集成
* \(V\) Linux 操作
* \(K\) jQuery Ajax Request
* \(K\) Redis
* \(K\) Database & Sql
* \(K\) Hibernate & MyBatis
* \(DVK\) Java 本質 與 Servlet本質
* \(DVK\) Spring 本質 與其生態系

> MVC\(repository pattern\) -&gt; dto / vo / entity -&gt; JPA / myBatis -&gt; sql\(join / groupBy / primaryKey / ForeignKey / Index / Unique / Sequence / SP\) -&gt; redis -&gt; transaction / Try Catch / Finally -&gt; @autowired @resource / @Value -&gt; java8\(Optional / Lambda / Collections / Functional\)

