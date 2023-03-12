##### find duplicate record
```sql
sql> SELECT
        LOTTERY_ID,
        WEB_ISSUE_CODE,
        COUNT(*)
     FROM
        LOTTERY_ISSUE
     GROUP BY
        LOTTERY_ID,
        WEB_ISSUE_CODE
     HAVING
        COUNT(*) > 1;
```

##### 必要欄位
* id
* create time
* update time
* comment
* extra