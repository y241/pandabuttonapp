// スマホ画面を連打した時に拡大・縮小されないようにする
// https://qiita.com/eudyptesc/items/d74e5758a36478fbc039
/*let lastTouch = 0;
document.addEventListener('touchend', event => {
  const now = window.performance.now();
  if (now - lastTouch <= 200) {
    event.preventDefault();
  }
  lastTouch = now;
}, false);*/

function pushed(statusid){
  console.log(statusid);
  // db保存のAPI叩く
  insertdb(statusid);

  //push通知

}

function insertdb(statusid){
  var xhr = new XMLHttpRequest();

  // ハンドラの登録.
  xhr.onreadystatechange = function() {
    switch ( xhr.readyState ) {
      case 0:
        // 未初期化状態.
        console.log( 'uninitialized!' );
        break;
      case 1: // データ送信中.
        console.log( 'loading...' );
        break;
      case 2: // 応答待ち.
        console.log( 'loaded.' );
        break;
      case 3: // データ受信中.
        console.log( 'interactive... '+xhr.responseText.length+' bytes.' );
        break;
      case 4: // データ受信完了.
        if( xhr.status == 200 || xhr.status == 304 ) {
          var data = xhr.responseText; // responseXML もあり
          console.log( 'COMPLETE! :'+data );
        } else {
          
          ( 'Failed. HttpStatus: '+xhr.statusText );
        }
      break;
    }
  };

  xhr.open( 'GET', `/${statusid}/status`);
  xhr.setRequestHeader( 'Content-Type', 'application/json;charset=UTF-8');
  console.log("statusid: ", statusid);
  xhr.send(statusid);
}
