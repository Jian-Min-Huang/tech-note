##### date format
```sql
sql> SELECT TO_CHAR(SYSDATE,'YYYY/MM/DD HH24:MI:SS') FROM DUAL;
```

##### decode
```sql
sql> SELECT DECODE(STATUS, 0, 'PREPARE', 1, 'DOING', 2, 'DONE', 'UNDEFINED') FROM LOTTERY_ISSUE;
```

##### case
```sql
sql> SELECT CASE WHEN ACTUAL_BONUS < 100000 THEN 'LOW'
            WHEN ACTUAL_BONUS < 1000000 THEN 'MEDIUM'
            ELSE 'HIGH' END 
     FROM GAME_AWARD;
```

##### top n record
```sql
sql> SELECT * FROM (SELECT * FROM LOTTERY_TYPE ORDER BY ID) WHERE ROWNUM < (n + 1);
```

##### plus and minus time
```sql
sql> SELECT SYSDATE, SYSDATE+1/24, SYSDATE +1/1440, SYSDATE + 1/86400 FROM DUAL;
```

##### execute store procedure
```sql
sql> begin
P_INIT_USER_RET_POINT_77536_77541();
commit;
end
```

##### trunc
```sql
sql> select trunc(sysdate, 'Y'), trunc(sysdate, 'MONTH'), trunc(sysdate, 'WW'), trunc(sysdate), trunc(sysdate, 'HH'), trunc(sysdate, 'MI') from dual;
```

##### use sequence
```sql
sql> INSERT INTO TABLE(ID, COLUMN1, COLUMN2, ...) VALUES (SEQUENCE.NEXTVAL, VALUE1, VALUE2, ...);
```

##### show all sequence
```sql
sql> SELECT SEQUENCE_OWNER, SEQUENCE_NAME FROM DBA_SEQUENCES;
sql> SELECT SEQUENCE_OWNER, SEQUENCE_NAME FROM ALL_SEQUENCES;
sql> SELECT SEQUENCE_OWNER, SEQUENCE_NAME FROM USERS_SEQUENCES;
```

##### function
* CONCAT(), column1 || '' || column2
* NVL, NVL2, NULLIF, Coalesce

##### ORA-00911:字元無效
;

##### oracle reset sequence
```sql
sql> select seq_name.nextval from dual; // 5656
sql> alter sequence seq_name increment by -5655; // -(n-1)
sql> select seq_name.nextval from dual; // 1
sql> alter sequence seq_name increment by 1;
``` 
* CREATE SEQUENCE SEQ_LOTTERY_OPERATION_LOG_ID INCREMENT BY 1 START WITH 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 NOCYCLE NOORDER CACHE 20;

call dbms_mview.refresh('MVIEW_GAME_ISSUE','C')
