#####
```sh
$ redis-cli KEYS "prefix:*" | xargs redis-cli DEL
```

redis-server config/redis.conf