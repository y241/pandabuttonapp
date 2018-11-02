function selectSpeaker (speaker) {
  var xhr = new XMLHttpRequest();
  xhr.open("post", "http://localhost:3001/speaker");
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('speaker=' + speaker);
  xhr.addEventListener("load", function() {
  }, false);
}