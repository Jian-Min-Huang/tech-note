# ssh-keygen
```sh
ssh-keygen -t rsa -b 2048
id_rsa_xxx
enter
enter

ssh USER@HOST 'mkdir -p ~/.ssh;cat >> ~/.ssh/authorized_keys' < ~/.ssh/id_rsa.pub
ssh-copy-id -i id_rsa_gitlab.pub root@192.168.250.36

paste public to github
```

# .ssh/config
```sh
# GitHub
Host github.com
HostName github.com
User git
Identity File /Users/yFr/.ssh/github/id_rsa_github
# Gitlab
Host gitlab.preuat.com.tw
HostName gitlab.preuat.com.tw
User git
Identity File /Users/yFr/.ssh/gitlab/id_rsa_gitlab
```

# CentOS 7
```sh
$ sudo yum install ntp -y
$ sudo ntpdate time.stdtime.gov.tw (manual)
$ sudo vi /etc/ntp.conf (setting Server block)
$ sudo systemctl start ntpd
$ sudo systemctl enable ntpd

$ systemctl disable firewalld
$ systemctl stop firewalld
$ systemctl status firewalld

$ yum install unzip
$ timedatectl set-timezone Asia/Taipei
```

# hosts & hostname
```
$ vi /etc/hosts
$ vi /etc/sysconfig/network
```

# service location
```
$ /etc/init.d/xxx
```

# stop fireware
```sh
$ service iptables stop (temporary
$ chkconfig iptables off (permanent
```

# check linux distribution type
```sh
$ cat /etc/redhat-release
$ cat /proc/version
```

# install java
```sh
$ rpm -ivh jdk-8u162-linux-x64.rpm

$ sudo apt-get install openjdk-8-jre
$ sudo apt-get install openjdk-8-jdk

$ sudo yum install java-1.8.0-openjdk.x86_64
$ sudo yum install java-1.8.0-openjdk-devel.x86_64
```

# proc
```
$ /proc/pid/status
```

apt-get install iputils-ping

du -sh
df -h

> /dev/null


###### .bash_profile
```
export CLICOLOR=1
export LSCOLORS=GxFxCxDxBxegedabagaced

PS1="\D{{%Y-%m-%d %H:%M:%S}}[\w]\\$ "

# http://ascii.mastervb.net/text_to_ascii.php
echo "   ____  ___     ____  ___     ____  ___  "
echo "  / ___|/ _ \   / ___|/ _ \   / ___|/ _ \ "
echo " | |  _| | | | | |  _| | | | | |  _| | | |"
echo " | |_| | |_| | | |_| | |_| | | |_| | |_| |"
echo "  \____|\___/   \____|\___/   \____|\___/ "
echo "                                          "

echo "   ____                _  _                                                            "
echo "  / ___|  ___    __   (_)| |_   ___    ___  _ __   __     ___   ___  _   _  _ __ ___   "
echo " | |     / _ \  / _ \ | ||  _| / _ \  / _ \| '__| / _ \  / _ \ / __|| | | ||  _ \  _ \ "
echo " | |___ | (_) || (_| || || |_ | (_) ||  __/| |   | (_| || (_) |\__ \| |_| || | | | | | "
echo "  \____| \___/  \__, ||_| \__| \___/  \___||_|    \__, | \___/ |___/ \__,_||_| |_| |_| "
echo "                |___/                             |___/                                "
echo "                                                                                       "
```

###### .vimrc
```
set nocompatible
set backspace=2
set nu
set hlsearch
set bg=dark
syntax on
```