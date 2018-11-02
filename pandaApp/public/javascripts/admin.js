function selectSpeaker (speaker) {
  var xhr = new XMLHttpRequest();
  var url = location.href.replace("admin","");
  xhr.open("post", url + "speaker");
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('speaker=' + speaker);
  xhr.addEventListener("load", function() {
  }, false);
}