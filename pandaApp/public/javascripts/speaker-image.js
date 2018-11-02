var speakers = [
  //↓↓本番データ:タイムスケジュール、変更が多すぎる；；
  {
    name: '準備中',
    imagePath: '/images/speaker/junbi.png'
  },
  {
    name: '登壇者1',
    imagePath: '/images/speaker/pancake.png'
  },
  {
    name: '登壇者2',
    imagePath: '/images/speaker/parfait.png'
  },
];

function speakerChanger() {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "http://localhost:3001/speaker");
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send();
  xhr.addEventListener("load", function() {
    var speakerIndex = 0;
    try {
      speakerIndex = parseInt(this.response);
    }
    catch (e) {
      return;
    }
    document.getElementById('name').textContent = speakers[speakerIndex].name;
    document.getElementById('speaker').src = speakers[speakerIndex].imagePath;
  }, false);
}

$(window).load(function() {
  speakerChanger();
  setInterval("speakerChanger()", 60000);
});
