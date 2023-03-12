##### GitHub check name for calculating contributions
```sh
$ git config user.name=Jian-Min-Huang
$ git config user.email=yfr.huang@hotmail.com
```

##### revert to previous commit
local
```sh
$ git reset
$ git reset --hard SHA
$ git reset --soft SHA
```
remote
```sh
$ git branch
$ git push -f
```

#### reverse single commit 
* SourceTree -> find commit -> right click -> Reverse commit...

##### modify commit message
```sh
$ git reset --soft SHA
$ git commit -m "message"
```

##### git rebase interactive

##### clean git remote branch
```sh
$ git remote update origin --prune
```

##### abort git rebase
```sh
$ rm -r .git/<some rebase dir>
```

##### git fetch & merge
```sh
$ git checkout master
$ git fetch origin master
$ git rebase origin/master
```

##### SourceTree Setting on MAC
* General -> x Check default remotes for updates every 10 minutes
* SourceTree -> Preferences -> Git -> Use System Git