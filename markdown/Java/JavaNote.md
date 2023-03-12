##### tomcat jmx
```
add setenv.sh
JAVA_OPTS="$JAVA_OPTS 
-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=8008 
-Dcom.sun.management.jmxremote.ssl=false 
-Dcom.sun.management.jmxremote.authenticate=false 
-Djava.rmi.server.hostname=192.168.250.33"
```