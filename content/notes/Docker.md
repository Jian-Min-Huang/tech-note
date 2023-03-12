##### image
* search
```sh
$ docker search $REPOSITORY
$ docker search mysql
```

* pull
```sh
$ docker pull $REPOSITORY:$TAG
$ docker pull ubuntu:14.04
$ docker pull ubuntu (default tag latest)
```

* show
```sh
$ docker images
```

* show id
```sh
$ docker images -aq
```

* remove
```sh
$ docker rmi $$REPOSITORY:$TAG
$ docker rmi $IMAGE_ID
$ docker rmi $IMAGE_ID
$ docker rmi $(docker images -aq)
$ docker rmi -f $(docker images -aq)
$ docker rmi $(docker images -f "dangling=true" -q)
```

* build
```sh
$ docker build -t $USERNAME/$REPOSITORY:$TAG .
$ docker build -f $FILE_NAME -t $USERNAME/$REPOSITORY:$TAG $PATH
```

* commit
```sh
$ docker commit -m="$COMMENT" $NAME/$CONTAINER_ID $USERNAME/$REPOSITORY:$TAG
$ docker commit -m="add htop" ubuntu ubuntu:14.04.1
```

* tag
```sh
$ docker tag $USERNAME/$REPOSITORY1:$TAG1 $USERNAME/$REPOSITORY2:$TAG2
$ docker tag ubuntu:latest ubuntu:16.04
```

* push
```sh
$ docker push $USERNAME/$REPOSITORY:$TAG
```

* save & load
```sh
$ docker save -o xxx.tar $USERNAME/$REPOSITORY:$TAG
$ docker load < xxx.tar
```

* prune
```sh
$ docker image prune
$ docker image prune -a
```

* run
```sh
(-i = stdin) 
(-t = tty) 
(--rm = remove when stop) 
(-d = daemon, can't not use --rm together) 
(-p = port)
(-v = volume) 
(-e = environment variable) 
(--name = specific container name)
(--link = linked container name)
$ docker run $REPOSITORY:$TAG $COMMAND
$ docker run --rm ubuntu:14.04 /bin/date
$ docker run -it ubuntu:14.04 /bin/bash
$ docker run -it --rm ubuntu:14.04 /bin/bash
$ docker run -d -p 3306:3306 -v /opt/data1:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root --name=mysql mysql:5.7.16
$ docker run -d -p 8080:8080 -v ~/Desktop/log:/opt/ibeengo-chat/log --name=chat --link mysql ibeengo-chat:1.4.0
```

##### container
* show
```sh
$ docker ps -a
```

* show id
```sh
$ docker ps -aq
```

* access
```sh
$ docker exec -it $NAME /bin/bash
$ docker exec -it $CONTAINER_ID /bin/bash
```

* stop
```sh
$ docker stop $NAME
$ docker stop $CONTAINER_ID
$ docker stop $(docker ps -aq)
```

* start
```sh
$ docker start $NAME
$ docker start $CONTAINER_ID
```

* remove
```sh
(-f = force)
$ docker rm $NAME
$ docker rm $CONTAINER_ID
$ docker rm $(docker ps -aq)
$ docker rm -f $(docker ps -aq)
```

* remove all
```sh
(-f = force)
$ docker rm $NAME
$ docker rm $CONTAINER_ID
```

* export & import
```sh
$ docker export $CONTAINER_ID > export.tar
$ cat export.tar | docker import - $USERNAME/$REPOSITORY:$TAG
```

* exit terminal of container
```sh
$ exit or Ctrl + D
```

* exit tty of container
```sh
$ Ctrl + P and then Ctrl + Q
```

##### other
* login
```sh
$ docker login
$ docker login 192.168.250.35:9528 -u admin -p admin123
```
* login private registry
```sh
$ docker login 192.168.250.35:9528 -u admin -p admin123
$ docker run -d -p 8081:8081 -p 8082:8082 -p 8083:8083 --name my-nexus sonatype/nexus3:latest
$ docker tag 
$ docker push 127.0.0.1:8082/sport-api
```

* setting private registry

##### debug
* ERROR : denied: requested access to the resource is denied
> login docker

##### hint
* different with save and export
> save will keep change history if you have commit image, export 

* --link use /etc/hosts and environment variable to communicate each container

/etc/docker/daemon.json
{
  "insecure-registries" : ["myregistrydomain.com:5000"]
}
restart

docker 1.7 insercure-registries cannot use

/Users/yfr/Library/Containers/com.docker.docker

EXPOSE 差別是容器可直連

docker network inspect zkkafka_inner

##### images
docker run -it --rm -p 8080:80 dorowu/ubuntu-desktop-lxde-vnc

docker run --name redis -d -p 6379:6379 -e "TZ=Asia/Taipei" redis:3.2.11
docker run --name oracle -d -p 8888:8080 -p 1521:1521 -e "TZ=Asia/Taipei" sath89/oracle-xe-11g

docker run -d --name tc-server -e "TZ=Asia/Taipei" -v /tmp/tc/datadir:/data/teamcity_server/datadir -v /tmp/tc/logs:/opt/teamcity/logs -p 8111:8111 jetbrains/teamcity-server
docker run -d --name tc-agent1 -e "TZ=Asia/Taipei" -e SERVER_URL=192.168.0.164:8111 -v /tmp/tc/conf:/data/teamcity_agent/conf -v /var/run/docker.sock:/var/run/docker.sock jetbrains/teamcity-agent
docker run -it --name tc-server -e "TZ=Asia/Taipei" -v /tmp/tc/datadir:/data/teamcity_server/datadir -v /tmp/tc/logs:/opt/teamcity/logs -p 8111:8111 jetbrains/teamcity-server
docker run -it --name tc-agent1 -e "TZ=Asia/Taipei" -e SERVER_URL=192.168.250.37:8111 -v /tmp/tc/conf:/data/teamcity_agent/conf -v /var/run/docker.sock:/var/run/docker.sock jetbrains/teamcity-agent

https://docs.docker.com/install/linux/docker-ce/centos/https://docs.docker.com/install/linux/docker-ce/centos/

window 8 docker ip $(docker-machine ip default)
usually 192.168.99.100