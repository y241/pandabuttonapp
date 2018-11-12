// tweetのget
$.ajax({
  type: 'get',
  url: 'https://aet0ar38og.execute-api.ap-northeast-1.amazonaws.com/panda/panda', // TODO URLの修正
  success: function (res) {
    data = JSON.parse(res);
    data.Items.forEach(function (item) {
      var tweet = `
          <div class="popover right show" style="position:relative; max-width:100%;">
          <div class="arrow"></div>
          <div class="popover-content">${item.message}</div>
        </div>`;
        $("#tweets").append(tweet);
    });
  }});
  // tweetのpost
  function post(view){
    var $form = $('#tweet-form');
    var param = {};
    $($form.serializeArray()).each(function(i, v) {
      param[v.name] = v.value;
    });
    console.log(JSON.stringify(param));
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: JSON.stringify(param),
        contentType: $form.attr('contentType'),
        timeout: 10000,
        complete: function(xhr, textStatus) {
          if(view == 0){
            window.location.href = './index_panda.html';
          }else {
            window.location.reload(); // post完了後に画面のリロード
          }
        },
    });
  }