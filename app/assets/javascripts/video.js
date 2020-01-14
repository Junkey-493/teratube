$(document).on('turbolinks:load', function() {
  $fileField = $('#upload-video')

  $($fileField).on('change', $fileField, function(e) {

      file = e.target.files[0]
      reader = new FileReader(),
      $preview = $(".submit-page-topic__video__label");

      reader.onload = (function(file) {
        return function(e) {
          $preview.empty();
          $preview.append($('<video>').attr({
            src: e.target.result,
            width: "100%",
            height: "100%",
            class: "preview-video",
            autoplay: "autoplay",
            loop: "loop",
            playsinline: "true",
            title: file.name
          }));
        };
      })(file);
      reader.readAsDataURL(file);
    });
  });