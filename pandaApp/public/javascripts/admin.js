function selectSpeaker(speaker) {
  var xhr = new XMLHttpRequest();
  var url = location.href.replace("admin", "");
  xhr.open("post", url + "speaker");
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('speaker=' + speaker);
  xhr.addEventListener("load", function() {
    document.getElementById('current-speaker').textContent = speaker;
  }, false);
}
 var xhr = new XMLHttpRequest();
var url = location.href.replace("admin", "");
xhr.open("get", url + "speaker");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send();
xhr.addEventListener("load", function() {
  document.getElementById('current-speaker').textContent = this.response;
}, false); 