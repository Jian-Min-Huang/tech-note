Press F12

install Ubuntu 14.04 English

check install this third-party software option

mount	size		format?
/boot	501	MB	yes
swap	20481	MB	_
/	51201	MB	yes
/opt	51202	MB	no
/home	_	MB	yes

update Incomplete Language Support

update Software from Software Updater

sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y dist-upgrade
sudo apt-get clean

install dropbox (double click)
install chrome (double click)
install dbeaver-ce (double click)
install vmware-player (chmod +x and execute it)
install vim
	sudo apt-get update
	sudo apt-get install vim
	sudo apt-get clean
install git
	sudo apt-get update
	sudo apt-get install git
	sudo apt-get clean
	git --version
	git config --global user.name "Jian-Min-Huang"
	git config --global user.email "yfr.huang@hotmail.com"
	git config --global color.status auto
	git config --global credential.helper store
install rar
	sudo apt-get update
	sudo apt-get install rar
	sudo apt-get install unrar
	sudo apt-get clean
install 7z
        sudo apt-get update
        sudo apt-get install p7zip p7zip-full
        sudo apt-get clean
install docker
	wget -qO- https://get.docker.com/ | sh
	sudo start docker
	sudo usermod -aG docker yfr
	docker --version
install jdk
	sudo add-apt-repository ppa:webupd8team/java
	sudo apt-get update
	sudo apt-get install oracle-java8-installer
	sudo apt-get clean
	java -version
install nodejs
	sudo apt-get update
	sudo apt-get install nodejs
	sudo apt-get install npm
	sudo apt-get clean
	nodejs --version
	npm --version
install htop
	sudo apt-get update
	sudo apt-get install htop
	sudo apt-get clean
install scala
	wget http://www.scala-lang.org/files/archive/scala-2.11.6.tgz
	tar -xvf scala-2.11.5.tgz
	sudo mv scala-2.11.6 /usr/local/scala
	vi ~/.bashrc
		# SCALA Variables
		export SCALA_HOME=/usr/local/scala
		export PATH=$PATH:$SCALA_HOME/bin
	source ~/.bashrc
install sbt
	echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
	sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
	sudo apt-get update
	sudo apt-get install sbt
	sudo apt-get clean
	sbt --version

add .vimrc
set nocompatible
set backspace=2
set nu
set hlsearch
set bg=dark
syntax on

(use docker) install mysql
	sudo apt-get update
	sudo apt-get mysql-server
	sudo apt-get clean
	mysqldamin -h localhost -u root password root

sudo dpkg-reconfigure tzdata
