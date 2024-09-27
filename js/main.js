// 'use strict';

// let slideImg = $('.slide_imgBox');
// let fadeInout = $('imgSetting');

// function slideShow() {
//   slideImg.show(1000);
//   let fadeOut = slideImg.hide(1000);
//   setTimeout(fadeOut, 4000);
  
//   if ($(slideImg).hasClass('company')) {

//     slideImg.removeClass('company');
//     slideImg.css('background-image', 'url(img/news.png)');
//     slideImg.addClass('news');

//   }
//   else if ($(slideImg).hasClass('news')) {

//     slideImg.removeClass('news');
//     slideImg.css('background-image', 'url(img/office.png)');
//     slideImg.addClass('office');

//   }
//   else {

//     slideImg.removeClass('office');
//     slideImg.css('background-image', 'url(img/company.png)');
//     slideImg.addClass('company');


//   }
// }


// setInterval(slideShow, 5000);


'use strict';

let slideImg = $('.slide_imgBox');

function slideShow() {

  // 1秒かけてフェードイン
  slideImg.show(1000, function () {
    // 3秒後に1秒かけてフェードアウト
    setTimeout(function () {slideImg.hide(1000);}, 3000); 
  });

  // 画像を変更する動作
  if($(slideImg).hasClass('company')){  
    slideImg.removeClass('company');  
    slideImg.css('background-image', 'url(img/news.png)'); 
    slideImg.addClass('news'); 
  }

  else if($(slideImg).hasClass('news')){
    slideImg.removeClass('news');
    slideImg.css('background-image', 'url(img/office.png)');
    slideImg.addClass('office');
  }

  else {
    slideImg.removeClass('office');
    slideImg.css('background-image', 'url(img/company.png)');
    slideImg.addClass('company');
    }
}

// 5秒ごとにスライドショーを実行
setInterval(slideShow, 5000);

// 最初にスライドショーを1回実行
slideShow();
