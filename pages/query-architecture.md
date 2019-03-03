# 高並發查詢架構設計

### sql 優化
* index沒中
* query範圍太大
* 查詢欄位太多
* 回傳筆數太多
* 關聯table太多張
* 用錯函數

### code 優化
* 減少request db次數
* call stored procedure
* 使用cache

### 資料庫架構
* 讀寫分離, 主備庫同時避免query update lock, write index slow
* 水平分表
* 垂直分庫
