$( document ).ready(function() {
 $('.contactform').submit(function() {
		if ( $(this).validationEngine('validate') ) {
			$(this).ajaxSubmit();
			$(this).clearForm();
			$.arcticmodal('close');
			$('#modal_2').arcticmodal();
			setTimeout("$.arcticmodal('close')", 5000);
		}
		return false;
	});
    $('.resultslider').bxSlider({
	  pagerCustom: '#resultslider-pager',
	  mode: 'fade',
	  adaptiveHeight: true,
	  controls: false
	});
	$('.howresultslider').bxSlider({
	  pagerCustom: '#howresultslider-pager',
	  mode: 'fade',
	  adaptiveHeight: true,
	  controls: false
	});


var y = $(this).scrollTop();
 if (y > 35) {
		$('.menu').addClass("actmaen");
    } else {
		$('.menu').removeClass("actmaen");
    }
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 35) {
       $('.menu').addClass("actmaen");
    } else {
		$('.menu').removeClass("actmaen");
    }
});

$('.single-page-nav').singlePageNav({
		offset: $('.menu').outerHeight(),
		filter: ':not(.external)',
		speed: 500
	});



$('.modalf').click(function() {
	$('#modalf').arcticmodal({

		afterClose: function(data, el) {
			$(".formError").fadeOut(150, function() {
				$(this).remove();
			});
			 $('#fff5').clearForm();
		}
	});return false;
});
$('.modalf2').click(function() {
	$('#modalf2').arcticmodal({

		afterClose: function(data, el) {
			$(".formError").fadeOut(150, function() {
				$(this).remove();
			});
			 $('#fff4').clearForm();
		}
	});return false;
});
        $("img.lazy").lazyload({
	    threshold : 400,
	    skip_invisible : false
	});
$(document).click(function(){
  $(".dropcity").fadeOut(300);
$(".ycblock").removeClass("dropactive");
});
$(".ycblock").click(function (e) {
      $(".dropcity").fadeToggle(300);
$(".ycblock").toggleClass("dropactive");
e.stopPropagation();
    });
$('.ri-link').click(function() {
portid = $(this).attr('id');
portidnum = portid.replace(/\D/g,"");
arcticurl ="/port/" + portidnum + ".php";
$.arcticmodal( {
    type: 'ajax',
url: (arcticurl),
beforeOpen: function(data, el) {
       $('.arcticmodal-container').addClass('portam');
    },
    afterClose: function(data, el) {
        $('.arcticmodal-container').removeClass('portam');
    },
    ajax: {
        cache: false,
        success: function( d, e, thissite ) {
            d.body.html(
                '<div class="box-modal">' +
                '<div class="box-modal_close arcticmodal-close arcticmodal-close2"></div>' +
                thissite +
                '</div>'
            );
        }
    }
});return false;
});



$('.conf').click(function(){$('#conf').arcticmodal();return false;});
$('.serviceslider').bxSlider({
  mode: 'fade',
  pagerCustom: '.bx-pagerr'
});
 $('.megamenu').megaMenuCompleteSet({
        menu_speed_show : 300,
        menu_speed_hide : 200,
        menu_speed_delay : 0,
        menu_effect : 'hover_fade',
        menu_click_outside : 1,
        menu_show_onload : 1,
        menu_responsive:0
    });
$(".modalf").click(function () {
      $("#fff5 input[name='action']").val('Заявка');
 });
 $(".ycblock").click(function () {
      $("#fff5 input[name='action']").val('Кнопка "Вам перезвонить" в меню');
 });
$("header .obut").click(function () {
      $("#fff5 input[name='action']").val('Кнопка "Получить клиентов из интернета!" в первом экране');
 });
$("#how .obut").click(function () {
      $("#fff5 input[name='action']").val('Кнопка "Получить клиентов из интернета!" в блоке "Как мы будем создавать очередь из клиентов"');
 });
   $(".action1").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание landing page');
});
$(".action2").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание лендо-сайта');
});
$(".action3").click(function () {
      $("#fff5 input[name='action']").val('заявка на настройку Яндекс.Директ');
});
$(".action4").click(function () {
      $("#fff5 input[name='action']").val('заявка на настройку Google Adwords');
});
$(".action5").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание маркетинг-кита');
});
$(".action6").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание группы в VK');
});
$(".action7").click(function () {
      $("#fff5 input[name='action']").val('заявка на настройку рекламы в Instagramm');
});
$(".action8").click(function () {
      $("#fff5 input[name='action']").val('заявка на E-mail маркетинг');
});
$(".action9").click(function () {
      $("#fff5 input[name='action']").val('заявка на запаковку бизнеса «под ключ»');
});
$(".action10").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание скриптов продаж');
});
$(".action11").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание коммер.предложение');
});
$(".action12").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание презентации');
});
$(".action13").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание корпоративного сайта');
});
$(".action14").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание интернет-магазина');
});
$(".action15").click(function () {
      $("#fff5 input[name='action']").val('заявка на создание СМС-рассылки');
});
$(".action16").click(function () {
      $("#fff5 input[name='action']").val('заявка на настройку таргетированной рекламы в VK');
});
$(".actionport1").click(function () {
      $("#fff5 input[name='action']").val('кнопка "Получить такой же качественный Landing Page!" в портфолио');
});
$(".actionport2").click(function () {
      $("#fff5 input[name='action']").val('кнопка "Получить такой же качественный Яндекс.Директ!" в портфолио');
});
$(".actionport3").click(function () {
      $("#fff5 input[name='action']").val('кнопка "Получить такой же качественный Google Adwords!" в портфолио');
});
$(".actionport4").click(function () {
      $("#fff5 input[name='action']").val('кнопка "Получить такой же качественный Маркетинг-кит или презентацию!" в портфолио');
});
$(".howresact").click(function () {
      $("#fff5 input[name='action']").val('кнопка "Узнать подробнее про каждый из инструментов!" в блоке "Как мы добиваемся столь высоких результатов?"');
});
$(".modalf2").click(function () {
      $("#fff4 input[name='action']").val('кнопка "задать вопрос"');
});


});
