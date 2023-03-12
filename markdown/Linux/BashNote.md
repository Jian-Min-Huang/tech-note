##### Q : split large file
```sh
$ split -b 50m catalina.out log.part.
```

##### Q : fetch last 100 line and dump to file
```sh
$ tail -n 100 catalina.out > log
```

##### Q : mkdir recusively
```sh
$ mkdir -p ~/x/y
```

##### Q : compress and decompress tar file
```sh
$ tar -zcf log.tar.gz log*
$ tar -zxf log.tar.gz
```

##### Q : decompress gz file
```sh
$ gunzip log.gz
$ gunzip -S zip lottery-kill.log.2018-08-22.0.zip
```

##### Q : SCP remote to local and local to remote
```sh
$ scp dev1:~/log.tar.gz .
$ scp ROOT.war dev1:~
```

##### Q : kill process in one command
```sh
$ kill -9 $(ps aux | grep java | grep catch | awk {'print $2'})
ps aux | grep zookeeper | grep -v grep | awk {'print $2'}
```

##### Q : while loop
```sh
$ while true; do date; sleep 1s; done;
```

##### other
```
sed, top
```

##### find top 10 large file in directory
```sh
$ du -a /var | sort -n -r | head -n 10
```
 
##### find file or directory with name 
```sh
$ find /home -iname 'showVersion.sh' -type f
$ find /home -iname 'script' -type d
```

##### find ps
```sh
$ ps aux --sort -rss
```

##### ab
```
$ ab -n 10 -c 10 http://www.0878.com/
```

##### port
```
$ telnet ip port
$ nc -zv ip port
$ nc -zv ip port~port
```

##### thread dump
```sh
$ jstack -l ${PID} > ~/jstack.out
```

# find file size
```sh
$ du -sh * | sort -n -r -k 1
```

# kill process
```sh
pid=$(ssh root@$DEPLOY_TO "ps aux | grep java | grep $project | grep -v 'ps' | awk '{print \$2}' | head -1")
if [[ ! -z "$pid" ]]; then
	ssh root@$DEPLOY_TO "kill -9 $pid" 
fi
```

##### grep
```sh
$ grep -v grep
```

##### du
```sh
du -sh /opt/nexus3/sonatype-work/nexus3/blobs/default/content
```

cat *.sql > all.sql

curl -d '{"testCount":100}' -H "Content-Type: application/json" -X POST http://localhost:8061/draw/normal

https://stackoverflow.com/questions/13210880/replace-one-substring-for-another-string-in-shell-script