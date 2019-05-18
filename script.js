var klikje = document.querySelector('div.titel h1:nth-of-type(3)');
var jpnweg = document.querySelector('svg[data-name=JPN]');
var jpnofnl = 0;

klikje.addEventListener('click', function() {
  if (jpnofnl === 0) {
    jpnweg.classList.remove('japankleur');
    klikje.innerHTML = "Holland";
    jpnofnl = 1;
  }
  else if (jpnofnl === 1) {
    jpnweg.classList.add('japankleur');
    klikje.innerHTML = "Japan";
    jpnofnl = 0;
  }
});


var usvis = document.querySelector('svg[data-name=US]');

usvis.addEventListener('click', function() {
  usvis.classList.toggle("omdraaien");
});


var jpnofnlvisi = 1;
var chinesevisi = 1;
var geenlandmeer = document.querySelector('div.titel');
var vissengroep = document.querySelector('div.vissen');
var rusvis = document.querySelector('svg[data-name=RUS]');
var chnvis = document.querySelector('svg[data-name=CHN]');

window.addEventListener('keydown', function (e) {
  var jpnofnlvis = document.querySelector('.vis' + jpnofnlvisi);
  var jpnofnlvisblub = document.querySelector('.blub' + jpnofnlvisi);
  var chinesevis = document.querySelector('.china' + chinesevisi);
  if (37 == e.keyCode) {
    jpnofnlvisi++;
    jpnofnlvis.classList.add("jpnnlweg");
    jpnofnlvisblub.classList.add("bubbelanimatieabsoluutniet");
    if (jpnofnlvisi == 14) {
      geenlandmeer.classList.add("geenlandmeer");
    }
  } else if (39 == e.keyCode) {
    chinesevisi++;
    chinesevis.classList.add("chinaweg");
  }
  else if (13 == e.keyCode) {
    usvis.classList.add("omdraaien");
    usvis.classList.add("vissenbang");
    jpnweg.classList.add("vissenbang");
    chnvis.classList.add("vissenbang");
    rusvis.classList.add("ruserin");
    setTimeout(function() {
      geenlandmeer.classList.add("geenlandmeer");
    }, 1000);
    setTimeout(function() {
      usvis.classList.add("helemaalweg");
      jpnweg.classList.add("helemaalweg");
      chnvis.classList.add("helemaalweg");
    }, 3000);
  }
});








// -------------------- VISSEN BLUBBEN --------------------


var blub1 = document.querySelector('.vis1');
var blub1circle = document.querySelector('.blub1');
var blub1span = document.querySelector('.blub1groep');

blub1.addEventListener('mouseover', function() {
  blub1circle.classList.add('bubbelanimatie1');
  blub1span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub1circle.classList.remove('bubbelanimatie1');
    blub1span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub2 = document.querySelector('.vis2');
var blub2circle = document.querySelector('.blub2');
var blub2span = document.querySelector('.blub2groep');

blub2.addEventListener('mouseover', function() {
  blub2circle.classList.add('bubbelanimatie1');
  blub2span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub2circle.classList.remove('bubbelanimatie1');
    blub2span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub3 = document.querySelector('.vis3');
var blub3circle = document.querySelector('.blub3');
var blub3span = document.querySelector('.blub3groep');

blub3.addEventListener('mouseover', function() {
  blub3circle.classList.add('bubbelanimatie1');
  blub3span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub3circle.classList.remove('bubbelanimatie1');
    blub3span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub3 = document.querySelector('.vis3');
var blub3circle = document.querySelector('.blub3');
var blub3span = document.querySelector('.blub3groep');

blub3.addEventListener('mouseover', function() {
  blub3circle.classList.add('bubbelanimatie1');
  blub3span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub3circle.classList.remove('bubbelanimatie1');
    blub3span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub4 = document.querySelector('.vis4');
var blub4circle = document.querySelector('.blub4');
var blub4span = document.querySelector('.blub4groep');

blub4.addEventListener('mouseover', function() {
  blub4circle.classList.add('bubbelanimatie1');
  blub4span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub4circle.classList.remove('bubbelanimatie1');
    blub4span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub5 = document.querySelector('.vis5');
var blub5circle = document.querySelector('.blub5');
var blub5span = document.querySelector('.blub5groep');

blub5.addEventListener('mouseover', function() {
  blub5circle.classList.add('bubbelanimatie1');
  blub5span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub5circle.classList.remove('bubbelanimatie1');
    blub5span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub6 = document.querySelector('.vis6');
var blub6circle = document.querySelector('.blub6');
var blub6span = document.querySelector('.blub6groep');

blub6.addEventListener('mouseover', function() {
  blub6circle.classList.add('bubbelanimatie1');
  blub6span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub6circle.classList.remove('bubbelanimatie1');
    blub6span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub7 = document.querySelector('.vis7');
var blub7circle = document.querySelector('.blub7');
var blub7span = document.querySelector('.blub7groep');

blub7.addEventListener('mouseover', function() {
  blub7circle.classList.add('bubbelanimatie1');
  blub7span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub7circle.classList.remove('bubbelanimatie1');
    blub7span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub8 = document.querySelector('.vis8');
var blub8circle = document.querySelector('.blub8');
var blub8span = document.querySelector('.blub8groep');

blub8.addEventListener('mouseover', function() {
  blub8circle.classList.add('bubbelanimatie1');
  blub8span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub8circle.classList.remove('bubbelanimatie1');
    blub8span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub9 = document.querySelector('.vis9');
var blub9circle = document.querySelector('.blub9');
var blub9span = document.querySelector('.blub9groep');

blub9.addEventListener('mouseover', function() {
  blub9circle.classList.add('bubbelanimatie1');
  blub9span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub9circle.classList.remove('bubbelanimatie1');
    blub9span.classList.remove('bubbelanimatie2');
  }, 20000);
});



var blub10 = document.querySelector('.vis10');
var blub10circle = document.querySelector('.blub10');
var blub10span = document.querySelector('.blub10groep');

blub10.addEventListener('mouseover', function() {
  blub10circle.classList.add('bubbelanimatie1');
  blub10span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub10circle.classList.remove('bubbelanimatie1');
    blub10span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub11 = document.querySelector('.vis11');
var blub11circle = document.querySelector('.blub11');
var blub11span = document.querySelector('.blub11groep');

blub11.addEventListener('mouseover', function() {
  blub11circle.classList.add('bubbelanimatie1');
  blub11span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub11circle.classList.remove('bubbelanimatie1');
    blub11span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub12 = document.querySelector('.vis12');
var blub12circle = document.querySelector('.blub12');
var blub12span = document.querySelector('.blub12groep');

blub12.addEventListener('mouseover', function() {
  blub12circle.classList.add('bubbelanimatie1');
  blub12span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub12circle.classList.remove('bubbelanimatie1');
    blub12span.classList.remove('bubbelanimatie2');
  }, 20000);
});


var blub13 = document.querySelector('.vis13');
var blub13circle = document.querySelector('.blub13');
var blub13span = document.querySelector('.blub13groep');

blub13.addEventListener('mouseover', function() {
  blub13circle.classList.add('bubbelanimatie1');
  blub13span.classList.add('bubbelanimatie2');

  setTimeout(function() {
    blub13circle.classList.remove('bubbelanimatie1');
    blub13span.classList.remove('bubbelanimatie2');
  }, 20000);
});
