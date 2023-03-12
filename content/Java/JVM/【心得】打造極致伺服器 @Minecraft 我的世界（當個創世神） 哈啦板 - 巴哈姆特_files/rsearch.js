var KWold = '';
function rsearch(who) {
  if( 'rsearch' == who ) {
    this.elementID = 'suggestol';
    this.liID = 'suggestli';
    this.mainID = 'rsearch';
    this.num=0;
    this.formID='fSearch';
    this.script = '/rsearch.php';
    this.keyName = 'kw';
  }
  else if('forum' == who){
    this.elementID = 'suggestol_forum';
    this.liID = 'suggestli_forum';
    this.mainID = 'rsearch_forum';
    this.num=0;
    this.formID = 'fSearch_forum';
    this.script = '/ajax/rsearch_forum.php';
    this.keyName = 'search';
  }
}

rsearch.prototype.add_item = function(v, fid, kid) {
  oo = document.getElementById(this.elementID);
  oo.innerHTML += '<li class="BH-searchlist2" id="'+this.liID+this.num+'" onmouseover="this.className=\'BH-searchlist\';" onmouseout="this.className=\'BH-searchlist2\';" onclick="backv_s(\''+fid+'\', \''+kid+'\', this.innerHTML);">'+v+'</li>';
  this.num++;
}
rsearch.prototype.clear = function() {
  oo = document.getElementById(this.elementID);
  oo.innerHTML = '';
  this.num=0;
}

function init_s(sss, rtxt) {
  a = rtxt.split(",")
  for(i=0;i<a.length;i++) {
    sss.add_item(a[i], sss.formID, sss.keyName);
    show_s(sss);
  }
}
function hidden_s(sss){
  oo = document.getElementById(sss.mainID);
  oo.style.display = 'none';
  document.onclick = nn_s;
}
function show_s(sss){
  oo = document.getElementById(sss.mainID);
  oo.style.display = '';
  document.onclick = function (){
    document.getElementById(sss.mainID).style.display = 'none';
    document.onclick = nn_s;
  };
}
function backv_s(fid, kid, v2) {
  if( fid && kid ) { 
  oo = document.forms[fid].elements[kid];
  oo.value = v2.replace('&amp;','&');
  }
}
function nn_s() {}
function key_s(sss, kw, e) {
  ekey = window.event ? e.keyCode : e.which;
  sel = -1;
  if( ekey == 38 && sss){
    for(i=0;i<sss.num;i++){
      oo = document.getElementById(sss.liID+i);
      if( oo.className == 'BH-searchlist' ) {
        sel = i;
      }
      oo.className = 'BH-searchlist2';
    }
    if( sel == 0 || sel == -1) {
      oo2 = document.getElementById(sss.liID+(sss.num-1));
    }else{
      oo2 = document.getElementById(sss.liID+(sel-1));
    }
    oo2.className='BH-searchlist';
    backv_s(sss.formID, sss.keyName, oo2.innerHTML);
    return false;
  }

  if( ekey == 40 && sss){
    for(i=0;i<sss.num;i++){
      oo = document.getElementById(sss.liID+i);
      if( oo.className == 'BH-searchlist' ) {
        sel = i;
      }
      oo.className = 'BH-searchlist2';
    }
    if( sel == (sss.num-1) || sel == -1) {
      oo2 = document.getElementById(sss.liID+'0');
    }else{
      oo2 = document.getElementById(sss.liID+(sel+1));
    }
    oo2.className='BH-searchlist';
    //backv_s(oo2.innerHTML);
    backv_s(sss.formID, sss.keyName, oo2.innerHTML);
    return false;
  }

  if( ekey == 13 && sss){
    for(i=0;i<sss.num;i++){
      oo = document.getElementById(sss.liID+i);
      if( oo.className == 'BH-searchlist' ) {
        sel = i;
      }
      oo.className = 'BH-searchlist2';
    }
    if( sel != -1 ){
    oo2 = document.getElementById(sss.liID+(sel));
    oo2.onclick();
    hidden_s(sss);
    return false;
    }
  }
  if( kw != '' ) {
    if( KWold != kw ) {
      KWold = kw;
      getsuggest(sss, kw);
    }
  }
  else if(sss) {
   hidden_s(sss);
  }
}

function createAJAX_s() {

  if( window.ActiveXObject ) {
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e2) {
          return null;
      }
    }
  }else if(window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }else{
    return null;
  }
}

function getsuggest(sss, kw) {
  ajax = createAJAX_s();
  if(ajax) {
    //ajax.onreadystatechange = rdata_s;
    ajax.onreadystatechange = function(){

      if( 4 == ajax.readyState ) {
        if( 200 == ajax.status ) {
          if( '' != ajax.responseText ) {
            sss.clear();
            init_s(sss, ajax.responseText);
          }
          else {
            hidden_s(sss);
          }
        }
        else {
        }
      }
      
    };
    ajax.open("GET", sss.script+'?kw='+encodeURI(kw),true);
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajax.send('kw='+kw);
  }
}
