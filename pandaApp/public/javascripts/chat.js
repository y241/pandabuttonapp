// tweetのget
$.ajax({
  type: 'get',
  url: 'https://aet0ar38og.execute-api.ap-northeast-1.amazonaws.com/panda/panda', // TODO URLの修正
  success: function(res) {
    data = JSON.parse(res);
    data.Items.forEach(function(item) {
      var tweet = `
          <div class="popover right show" style="position:relative; max-width:100%;">
          <div class="arrow"></div>
          <div class="popover-content">${item.message}</div>
        </div>`;
      $("#tweets").append(tweet);
    });
  }
});
// tweetのpost
function post(view) {
  var $form = $('#tweet-form');
  var param = {};
  $($form.serializeArray()).each(function(i, v) {
    param[v.name] = v.value;
  });
  $.ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: JSON.stringify(param),
    contentType: $form.attr('contentType'),
    timeout: 10000,
    complete: function(xhr, textStatus) {
      if (view == 0) {
        $.toast({
          text: "投稿しました! chat画面で確認してください", // Text that is to be shown in the toast
          heading: 'お気持ちchat', // Optional heading to be shown on the toast
          showHideTransition: 'fade', // fade, slide or plain
          allowToastClose: true, // Boolean value true or false
          hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
          stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
          position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

          bgColor: '#ff9933',  // Background color of the toast
          textColor: '#eeeeee',  // Text color of the toast
          textAlign: 'left',  // Text alignment i.e. left, right or center
        });
        $('#tweet-text-form').val('');
      } else {
        window.location.reload(); // post完了後に画面のリロード
      }
    },
  });
}