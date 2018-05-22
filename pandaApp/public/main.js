$(function() {
  var FADE_TIME = 150; // ms

  var $window = $(window);
  var $messages = $('.messages'); // Messages area
  var $pandaNum = $('.pandaN');

  var $loginPage = $('.readme'); // The login page
  var $emoPage = $('.tmp'); // The chatroom page

  var $loginButton = $('.loginButton'); // ログインボタン用
  var $emoIine = $('.emoIine'); //いいねボタン用
  var $emoWao = $('.emoWao'); //わおボタン用
  var $emoUwan = $('.emoUwan'); //うわーんボタン用
  var $emoMumu = $('.emoMumu'); //むむボタン用

  // Prompt for setting a username
  var username;
  var connected = false;

  var socket = io();

  function addParticipantsMessage (data) {
    if (data.numUsers === 1) {
      $pandaNum.text("× 1");
    } else {
      $pandaNum.text("× " + data.numUsers);
    }
  }

  // Sets the client's username
  function setUsername () {
    username = "匿名パンダさん";
    $loginPage.fadeOut();
    $emoPage.show();
    socket.emit('add user', "匿名パンダさん");
  }

  function sendIine (){
    var message = "iine";
    if (message && connected) {
      addChatMessage({
        username: username,
        message: message
      });
      socket.emit('new message', message);
    }
  }
  function sendWao (){
    var message = "wao";
    if (message && connected) {
      addChatMessage({
        username: username,
        message: message
      });
      socket.emit('new message', message);
    }
  }
  function sendUwan (){
    var message = "uwan";
    if (message && connected) {
      addChatMessage({
        username: username,
        message: message
      });
      socket.emit('new message', message);
    }
  }
  function sendMumu (){
    var message = "mumu";
    if (message && connected) {
      addChatMessage({
        username: username,
        message: message
      });
      socket.emit('new message', message);
    }
  }

  function sendMessage () {
    var message = "message";
    message = cleanInput(message);
    if (message && connected) {
      addChatMessage({
        username: username,
        message: message
      });
      socket.emit('new message', message);
    }
  }

  // Log a message
  function log (message, options) {
    var $el = $('<li>').addClass('log').text(message);
    addMessageElement($el, options);
  }

  var messagelimit = 0;
  var limitTime = new Date();
  function addChatMessage (data, options) {
    messagelimit++;
    if(messagelimit < 50){
      switch( data.message ) {
          case 'wao':
              var $waoImg = $('<img src="/images/wao-c.png" class="emoFace"/>');
              $("#timeline").append($waoImg);
              $el = $($waoImg);
              break;

          case 'uwan':
              var $uwanImg = $('<img src="/images/uwan-c.png" class="emoFace"/>');
              $("#timeline").append($uwanImg);
              $el = $($uwanImg);
              break;

          case 'mumu':
              var $mumuImg = $('<img src="/images/mumu-c.png" class="emoFace"/>');
              $("#timeline").append($mumuImg);
              $el = $($mumuImg);
              break;

          default: // あてはまらないものはiine!
              var $iineImg = $('<img src="/images/iine-c.png" class="emoFace"/>');
              $("#timeline").append($iineImg);
              $el = $($iineImg);
              break;
      }
      $.when(
        $el.animate({
          top: "+=" + (Math.random() * 91 - 45) + "%",
          left: "+=" + (Math.random() * 91 - 45) + "%",
          opacity: 0.2,
          }, "slow")
      ).done(function(){
          $(this).delay(500).remove();
      });
    } else if(messagelimit < 300) {
      if(new Date() - limitTime > 3000) {
        messagelimit=0;
        limitTime = new Date();
      }
    } else {
      messagelimit=0;
    }
  }

  function addMessageElement (el, options) { // TODO 要素追加処理（エモーション別にするか等検討）
    var $el = $(el);

    if (!options) {
      options = {};
    }
    if (typeof options.fade === 'undefined') {
      options.fade = true;
    }
    if (typeof options.prepend === 'undefined') {
      options.prepend = false;
    }

    // Apply options
    if (options.fade) {
      $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el);
    }
    $messages[0].scrollTop = $messages[0].scrollHeight;
    $el.show().animate({
        fontSize: 80
      }, 500);
    $.when(
      $el.fadeIn("slow",function(){
      $(this).delay(3000).fadeOut("slow");})
    ).done(function(){
        $(this).delay(500).remove();
    });
  }

  // Prevents input from having injected markup
  function cleanInput (input) {
    return $('<div/>').text(input).html();
  }

  // Click events
  $loginButton.click(function(e) { // TODO ログイン処理
    username = "匿名パンダさん";
    $loginPage.fadeOut();
    $emoPage.show();
    socket.emit('add user', "匿名パンダさん");
  });

  $emoIine.click(function(e) {
    sendIine();
  });
  $emoWao.click(function(e) {
    sendWao();
  });
  $emoUwan.click(function(e) {
    sendUwan();
  });
  $emoMumu.click(function(e) {
    sendMumu();
  });

  // Socket events
  socket.on('login', function (data) {
    connected = true;
    var message = "Welcome!!";
    addParticipantsMessage(data);
  });

  socket.on('new message', function (data) {
    addChatMessage(data);
  });

  socket.on('user joined', function (data) {
    addParticipantsMessage(data);
  });

  socket.on('user left', function (data) {
    addParticipantsMessage(data);
  });

  socket.on('disconnect', function () {
  });

  socket.on('reconnect', function () {
    socket.emit('add user', "匿名パンダさん");
  });

  socket.on('reconnect_error', function () {
    //TODO 接続失敗している時の何か
  });

});
