//  app.js
$(document).on('turbolinks:load', function(){

  var btn = document.getElementById('speak-content__btn');
  var content = document.getElementById('speak-content__content');
  
  
  
  
  //音声認識APIの使用
  var speech = new webkitSpeechRecognition();
  
  
  //言語を日本語に設定
  speech.lang = "ja";
  
  
  
  
  btn.addEventListener( 'click' , function() {
    
  
    // 音声認識をスタート
    speech.start();
  
  
  } );
  
  
  
  
  speech.addEventListener( 'result' , function( e ) {
  
  
    var text = e.results[0][0].transcript;
    var words = gon.word

    // 変数wordsの中身を検索する
    $.each(words, function(i, word){
      if (text === word.keyword){
        // 一致したキーワードがあったら関数を呼び出す
        getUrl();
        return false
      }else{
        // 認識された「言葉(text)」を、表示用のdivタグに代入する
        content.textContent = text
      }
        // 登録したキーワードとセットのURLを埋め込む
      function getUrl(){
        console.log(word.content_url)
        var URL = `<iframe width="600" height="340" src="${word.content_url}" frameborder="0" allowfullscreen></iframe>`;
        
        content.innerHTML = URL;
        
      };
    })
  } );

});