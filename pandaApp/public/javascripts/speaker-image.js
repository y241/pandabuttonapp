var speakers = [
  //↓↓本番データ:タイムスケジュール、変更が多すぎる；；
  {
    name: 'たいちょー',
    startTime: new Date(2018, 03, 12, 13, 40),
    endTime: new Date(2018, 03, 12, 14, 10),
    imagePath:'/images/speaker/pancake.png'
  },
  {
    name: 'ふくたいちょー',
    startTime: new Date(2018, 03, 12, 14, 20),
    endTime: new Date(2018, 03, 12, 14, 40),
    imagePath:'/images/speaker/pancake.png'
  },
  {
    name: 'ししょー',
    startTime: new Date(2018, 03, 12, 14, 40),
    endTime: new Date(2018, 03, 12, 14, 50),
    imagePath:'/images/speaker/pancake.png'
  },
  {
    name: '休憩',
    startTime: new Date(2018, 03, 12, 14, 50),
    endTime: new Date(2018, 03, 12, 15, 10),
    imagePath:'/images/speaker/junbi.png'
  },
  {
    name: 'continue...',
    startTime: new Date(2018, 03, 12, 15, 10),
    endTime: new Date(2018, 03, 12, 17, 00),
    imagePath:'/images/speaker/pancake.png'
  },
  //↑↑本番データ
  //↓↓for test
  {
    name: 'テストいいね',
    startTime: new Date(2018, 03, 09, 18, 53),
    endTime: new Date(2018, 03, 09, 15, 57),
    imagePath:'/images/iine.png'
  },
  {
    name: 'テストむむっ',
    startTime: new Date(2018, 03, 09, 18, 57),
    endTime: new Date(2018, 03, 09, 18, 59),
    imagePath:'/images/mumu.png'
  },
  {
    name: 'テストワオ',
    startTime: new Date(2018, 03, 09, 18, 59),
    endTime: new Date(2018, 03, 09, 20, 50),
    imagePath:'/images/wao.png'
  },
];

function speakerChanger() {
  var time = new Date();
  speakers.forEach(function(speaker){
    if(speaker.startTime < time && speaker.endTime > time){
      document.getElementById('speaker').src = speaker.imagePath;
      document.getElementById('name').textContent = speaker.name;
      }
  });
}

$(window).load(function(){
  speakerChanger();
  setInterval("speakerChanger()",60000);
});
