##### setting upstream header size
Example of proxy buffering configuration
http {
  proxy_buffer_size   128k;
  proxy_buffers   4 256k;
  proxy_busy_buffers_size   256k;
}
Example of disabling your proxy buffer (recommended for long polling servers)
http {
  proxy_buffering off;
}

##### location
```sh
$ cd /usr/local/opt/nginx
$ cd /usr/local/etc/nginx
```
```sh
$ cd /usr/local/nginx
```
```sh
$ cd /usr/local/nginx
$ cd /etc/nginx
```

##### command
```sh
$ nginx
$ nginx -s reload
$ nginx -s reopen
$ nginx -s stop
$ nginx -s quit
$ nginx -t
```