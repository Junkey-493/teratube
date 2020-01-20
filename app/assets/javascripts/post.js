$(function(){
  var buildHTML = function(video) {
    var html = 
    `<li class="bottom__items__item" data-video-id=` + video.id + `>` +
      `<a href="/videos/` + video.id + `">` +
        `<div class="bottom__items__item__video">` +
          `<img class="bottom__items__item__video" src="` + video.image_url + `">` +
        `</div>` +
        `<div class="bottom__items__item__title">` +
          video.title + 
        `</div>` +
        `<div class="bottom__items__item__user-name">` +
          video.user.nickname +
        `</div>` +
        `<div class="bottom__items__item__detail">` +
          `<div class="bottom__items__item__detail__view-count">` +
            video.impressionist_count + 
            `回視聴・` +
          `</div>` +
          `<div class="bottom__items__item__detail__time">` +
            video.created_at + '前' +
          `</div>` +
        `</div>` +
      `</a>` +
    `</li>`
    return html;
  };
  var reloadVideos = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_video_id = $('.bottom__items__item').data("video-id");
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/videos",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_video_id}
    })
    .done(function(videos) {
      var insertHTML = '';
      $.each(videos, function(i, video){
        insertHTML += buildHTML(video)
      });
      $('.bottom__items').append(insertHTML);
      console.log(last_video_id);
    })
    .fail(function() {
      console.log('error');
    });
  };
    setInterval(reloadVideos, 5000);
  
});