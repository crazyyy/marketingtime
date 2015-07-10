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
	  ymaps.ready(init);

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


ymaps.ready(init);

function init () {
    var map = new ymaps.Map('map', {
            center: [55.553624,77.525955],
            zoom: 3
        }),
       
        // Создание макета содержимого балуна.
        // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="mapball">' +
                '<div class="mapname">{{properties.name}}</div>' +
                '<div class="mapdesc">{{properties.tel}}</div>' +
                '<div class="mapdesc">{{properties.tel2}}</div>' +
            '</div>');

  /* var placemark1 = new ymaps.Placemark([50.296862,57.129675], {
		name: 'г. Актобе, пр-кт Санкибай батыра, 14Д, ТРК «Алатау», оф. 421',
		tel: '+7 (701) 797-88-44',
		tel2: '8-10-7 (701) 797-88-44'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});*/

var placemark2 = new ymaps.Placemark([51.543343,46.005345], {
		name: 'г. Саратов, ул. Степана Разина, д.58 А, оф №7',
		tel: '+7 (937) 800-56-15'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark3 = new ymaps.Placemark([55.626779,37.674002], {
		name: 'г. Москва, ул. Каспийская д. 20 корп. 3 оф. 70',
		tel: '+7 (499) 653-78-91'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark4 = new ymaps.Placemark([57.008368,40.968398], {
		name: 'г. Иваново, пер. Посадский д.4, оф.314',
		tel: '+7 (4932) 46-96-26'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});
var placemark5 = new ymaps.Placemark([56.839407,60.609745], {
		name: 'г. Екатеринбург, проспект Ленина, д. 41',
		tel: '+7 (912) 659-74-74'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark6 = new ymaps.Placemark([55.748232,37.424724], {
			name: 'г. Москва, Рочдельская улица 15, строение 15 Бизнес парк: "Трехгорная мануфактура"',
	tel: '+7 (499) 686-07-31'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

/*var placemark7 = new ymaps.Placemark([55.131982,59.723025], {
		name: 'г. Златоуст, Челябинская область ул. 40-летия Победы 50 - 3',
		tel: '8 (800) 505-90-27',
		tel2: '+7 (919) 356-05-72'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});*/

 var placemark8 = new ymaps.Placemark([57.994671,56.220691], {
		name: 'г. Пермь, ул. Овчинникова 29а',
		tel: '8 (800) 775-58-41'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark9 = new ymaps.Placemark([55.779922,37.615765], {
		name: 'г. Москва, ул. Самотечная, д.17',
		tel: '8 (800) 775-58-41'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark10 = new ymaps.Placemark([55.636510,37.705617], {
		name: 'г. Москва, ул. Борисовские пруды, д.1 стр. 72, офис 9',
		tel: '8 (800) 775-58-41'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark11 = new ymaps.Placemark([55.586155,37.919928], {
		name: 'г. Лыткарино, ул. Парковая, д. 1, корп. 2, этаж 2',
		tel: '+7 (495) 989-84-31'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark12 = new ymaps.Placemark([55.629221,36.973365], {
		name: 'МО, Одинцовский р-н, Голицыно, Можайское ш. д 79',
		tel: '+7 (499) 394-17-46'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});
   /* var placemark13 = new ymaps.Placemark([54.782517,32.044144], {
		name: 'г. Смоленск',
		tel: '8 (800) 775-58-41'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});*/

/*var placemark14 = new ymaps.Placemark([57.152899,65.534156], {
		name: 'г. Тюмень',
		tel: '8 (800) 775-58-41'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});*/
var placemark15 = new ymaps.Placemark([51.140251,71.466421], {
		name: 'г. Астана',
tel: '+7 (702) 773-81-41'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});
var placemark16 = new ymaps.Placemark([53.906067,27.554919], {
		name: 'г. Минск',
tel: '8 (029) 613-65-60'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});
var placemark17 = new ymaps.Placemark([50.436899,30.537202], {
	name: 'г. Киев, Печерский спуск, 15',
tel: '38 (050) 725-96-76'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark18 = new ymaps.Placemark([57.659935,39.841305], {
	name: 'г.Ярославль, ул.Базовая 2, офис 312',
tel: '+7 (4852) 67-02-03'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark19 = new ymaps.Placemark([43.116363,131.882464], {
		name: 'г. Владивосток',
tel: ' +7 (924) 731-73-17'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark20 = new ymaps.Placemark([55.054834,82.911640], {
		name: 'г. Новосибирск, ул. Красный проспект, д. 99',
tel: '+7 (913) 489-21-00'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark21 = new ymaps.Placemark([55.805077,37.586276], {
		name: 'г. Москва, Большая Новодмитровская улица, 36 - Дизайн завод Флакон',
tel: '+7 (926) 976-24-22'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});
var placemark22 = new ymaps.Placemark([58.006913,56.231476], {
		name: 'г. Пермь, ул. Екатерининская д. 87',
tel: '+7 (919) 702-38-61'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});


var placemark23 = new ymaps.Placemark([45.024864, 39.010136], {
		name: 'г. Краснодар. ул. Шевченко 152/4, офис 308',
tel: '+7 (918) 329-72-88'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});

var placemark24 = new ymaps.Placemark([64.544653, 40.516432], {
		name: 'г. Архангельск,  ул. Троицкий проспект, д. 67, офис 511 (ТЦ "Пирамида")',
tel: '+7 (8182) 49-08-30'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00',
closeButton: true
});
var placemark25 = new ymaps.Placemark([51.773997,55.100277], {
		name: 'г. Оренбург, ул. Зиминская д.35',
		tel: '8 (3532) 505-707'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
		iconColor: '#ff5f00',
		closeButton: true
});

/*

var placemark26 = new ymaps.Placemark([47.232867,39.714719], {
		name: 'г. Ростов-на-Дону, Ворошиловский пр-кт, 62 Бизнес центр "Адмирал" офис 502',
		tel: '+79286187506'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
		iconColor: '#ff5f00',
		closeButton: true
});
*/
var placemark27 = new ymaps.Placemark([54.515633,36.241378], {
		name: 'г. Калуга, ул. Циолковского д.8, БЦ "Аврора", офис 232',
		tel: '8 (960) 525-99-99'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
		iconColor: '#ff5f00',
		closeButton: true
});

var placemark28 = new ymaps.Placemark([47.232867,39.714719], {
		name: 'г. Ростов-на-Дону, Ворошиловский пр-кт, 62 Бизнес центр "Адмирал" офис 502',
		tel: '+79286187506'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
		iconColor: '#ff5f00',
		closeButton: true
});

var placemark29 = new ymaps.Placemark([54.193016,37.617740], {
		name: 'г. Тула',
		tel: '8 (800) 775-58-41'
	}, {
		balloonContentLayout: BalloonContentLayout,
		balloonPanelMaxMapArea: 0,
		iconColor: '#ff5f00',
		closeButton: true
});
var placemark30 = new ymaps.Placemark([59.943844,30.354086], {
	name: 'г. Спб, ст.м. Чернышевская Ул. Кирочная д.9, 3 этаж, левая сторона офис 1',
	tel: '8 (812) 456-05-60',
tel2: '8 (911) 925-95-12'
}, {
	balloonContentLayout: BalloonContentLayout,
	balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00'
});
var placemark31 = new ymaps.Placemark([43.234509,76.907331], {
	name: 'г.Алматы ул. Жандосова, д.20 оф 14',
	tel: '+7 (778) 312-63-32'
}, {
	balloonContentLayout: BalloonContentLayout,
	balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00'
});
var placemark32 = new ymaps.Placemark([47.219657,39.712724], {
	name: 'г. Ростов-на-Дону, ул. Социалистическая 74, оф. 415-2 (БЦ "Купеческий двор" правая башня)',
        tel: '301-60-90',
	tel2: ' 8 (961) 301-60-90'
}, {
	balloonContentLayout: BalloonContentLayout,
	balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00'
});
var placemark33 = new ymaps.Placemark([56.356039,37.527091], {
	name: 'г. Дмитров, улица Профессиональная, дом 26, корпус 1, офис 713, ТЦ "Ларан"',
	tel2: '8 (926) 159-09-35'
}, {
	balloonContentLayout: BalloonContentLayout,
	balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00'
});
var placemark34 = new ymaps.Placemark([59.925809,30.234946], {
	name: 'г. Санкт-Петербург, пл. Морской Славы д.1, корп. А , офис 5087',
	tel: '8 (812) 425-56-46'
}, {
	balloonContentLayout: BalloonContentLayout,
	balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00'
});

var placemark35 = new ymaps.Placemark([55.749910,37.537086], {
	name: 'г. Москва, Пресненская наб. 6, стр.2 Башня “Империя” 16 этаж, ММДЦ “Москва-Сити”',
	tel: '+7 (499) 394-27-03'
}, {
	balloonContentLayout: BalloonContentLayout,
	balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00'
});

var placemark36 = new ymaps.Placemark([53.935205,27.494884], {
	name: 'г. Минск, пр-т Победителей, дом 103, офис 1408',
	tel: '37529 699 2298'
}, {
	balloonContentLayout: BalloonContentLayout,
	balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00'
});

var placemark37 = new ymaps.Placemark([53.340459,83.729513], {
	name: 'г. Барнаул, Рыбозаводской проезд, д. 42, офис 301',
	tel: '8-913-218-3333'
}, {
	balloonContentLayout: BalloonContentLayout,
	balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00'
});


var placemark38 = new ymaps.Placemark([61.656693,50.821106], {
	name: 'г. Сыктывкар, Гаражная 9',
	tel: '8 (821) 255-99-71'
}, {
	balloonContentLayout: BalloonContentLayout,
	balloonPanelMaxMapArea: 0,
iconColor: '#ff5f00'
});





/*map.geoObjects.add(placemark1);*/
map.geoObjects.add(placemark2);
map.geoObjects.add(placemark3);
map.geoObjects.add(placemark4);
map.geoObjects.add(placemark5);
map.geoObjects.add(placemark6);
//map.geoObjects.add(placemark7);
map.geoObjects.add(placemark8);
map.geoObjects.add(placemark9);
map.geoObjects.add(placemark10);
map.geoObjects.add(placemark11);
map.geoObjects.add(placemark12);
//map.geoObjects.add(placemark13);
//map.geoObjects.add(placemark14);
map.geoObjects.add(placemark15);
map.geoObjects.add(placemark16);
map.geoObjects.add(placemark17);
map.geoObjects.add(placemark18);
map.geoObjects.add(placemark19);
map.geoObjects.add(placemark20);
map.geoObjects.add(placemark21);
map.geoObjects.add(placemark22);
map.geoObjects.add(placemark23);
map.geoObjects.add(placemark24);
map.geoObjects.add(placemark25);
//map.geoObjects.add(placemark26);
map.geoObjects.add(placemark27);
map.geoObjects.add(placemark28);
map.geoObjects.add(placemark29);
map.geoObjects.add(placemark30);
map.geoObjects.add(placemark31);
map.geoObjects.add(placemark32);
map.geoObjects.add(placemark33);
map.geoObjects.add(placemark34);
map.geoObjects.add(placemark35);
map.geoObjects.add(placemark36);
map.geoObjects.add(placemark37);
map.geoObjects.add(placemark38);

map.behaviors.disable('scrollZoom');


/*

placemark1.events.add('mouseenter', function (e) {
   placemark1.balloon.open();
});
placemark1.balloon.events.add('mouseleave', function (e) {
   placemark1.balloon.close();
});

placemark2.events.add('mouseenter', function (e) {
   placemark2.balloon.open();
});
placemark2.balloon.events.add('mouseleave', function (e) {
   placemark2.balloon.close();
});

placemark3.events.add('mouseenter', function (e) {
   placemark3.balloon.open();
});
placemark3.balloon.events.add('mouseleave', function (e) {
   placemark3.balloon.close();
});

placemark4.events.add('mouseenter', function (e) {
   placemark4.balloon.open();
});
placemark4.balloon.events.add('mouseleave', function (e) {
   placemark4.balloon.close();
});

placemark5.events.add('mouseenter', function (e) {
   placemark5.balloon.open();
});
placemark5.balloon.events.add('mouseleave', function (e) {
   placemark5.balloon.close();
});

placemark6.events.add('mouseenter', function (e) {
   placemark6.balloon.open();
});
placemark6.balloon.events.add('mouseleave', function (e) {
   placemark6.balloon.close();
});

placemark7.events.add('mouseenter', function (e) {
   placemark7.balloon.open();
});
placemark7.balloon.events.add('mouseleave', function (e) {
   placemark7.balloon.close();
});

placemark8.events.add('mouseenter', function (e) {
   placemark8.balloon.open();
});
placemark8.balloon.events.add('mouseleave', function (e) {
   placemark8.balloon.close();
});

placemark9.events.add('mouseenter', function (e) {
   placemark9.balloon.open();
});
placemark9.balloon.events.add('mouseleave', function (e) {
   placemark9.balloon.close();
});

placemark10.events.add('mouseenter', function (e) {
   placemark10.balloon.open();
});
placemark10.balloon.events.add('mouseleave', function (e) {
   placemark10.balloon.close();
});

placemark11.events.add('mouseenter', function (e) {
   placemark11.balloon.open();
});
placemark11.balloon.events.add('mouseleave', function (e) {
   placemark11.balloon.close();
});

placemark12.events.add('mouseenter', function (e) {
   placemark12.balloon.open();
});
placemark12.balloon.events.add('mouseleave', function (e) {
   placemark12.balloon.close();
});

placemark13.events.add('mouseenter', function (e) {
   placemark13.balloon.open();
});
placemark13.balloon.events.add('mouseleave', function (e) {
   placemark13.balloon.close();
});

placemark14.events.add('mouseenter', function (e) {
   placemark14.balloon.open();
});
placemark14.balloon.events.add('mouseleave', function (e) {
   placemark14.balloon.close();
});

placemark15.events.add('mouseenter', function (e) {
   placemark15.balloon.open();
});
placemark15.balloon.events.add('mouseleave', function (e) {
   placemark15.balloon.close();
});

placemark16.events.add('mouseenter', function (e) {
   placemark16.balloon.open();
});
placemark16.balloon.events.add('mouseleave', function (e) {
   placemark16.balloon.close();
});

placemark17.events.add('mouseenter', function (e) {
   placemark17.balloon.open();
});
placemark17.balloon.events.add('mouseleave', function (e) {
   placemark17.balloon.close();
});

placemark18.events.add('mouseenter', function (e) {
   placemark18.balloon.open();
});
placemark18.balloon.events.add('mouseleave', function (e) {
   placemark18.balloon.close();
});

placemark19.events.add('mouseenter', function (e) {
   placemark19.balloon.open();
});
placemark19.balloon.events.add('mouseleave', function (e) {
   placemark19.balloon.close();
});

placemark20.events.add('mouseenter', function (e) {
   placemark20.balloon.open();
});
placemark20.balloon.events.add('mouseleave', function (e) {
   placemark20.balloon.close();
});

placemark21.events.add('mouseenter', function (e) {
   placemark21.balloon.open();
});
placemark21.balloon.events.add('mouseleave', function (e) {
   placemark21.balloon.close();
});

placemark22.events.add('mouseenter', function (e) {
   placemark22.balloon.open();
});

placemark22.balloon.events.add('mouseleave', function (e) {
   placemark22.balloon.close();
});

placemark23.events.add('mouseenter', function (e) {
   placemark23.balloon.open();
});

placemark23.balloon.events.add('mouseleave', function (e) {
   placemark23.balloon.close();
});
placemark24.events.add('mouseenter', function (e) {
   placemark24.balloon.open();
});
placemark24.balloon.events.add('mouseleave', function (e) {
   placemark24.balloon.close();
});
placemark25.events.add('mouseenter', function (e) {
   placemark25.balloon.open();
});
placemark25.balloon.events.add('mouseleave', function (e) {
   placemark25.balloon.close();
});

placemark26.events.add('mouseenter', function (e) {
   placemark26.balloon.open();
});
placemark26.balloon.events.add('mouseleave', function (e) {
   placemark26.balloon.close();
});

placemark27.events.add('mouseenter', function (e) {
   placemark27.balloon.open();
});
placemark27.balloon.events.add('mouseleave', function (e) {
   placemark27.balloon.close();
});

placemark29.events.add('mouseenter', function (e) {
   placemark29.balloon.open();
});
placemark29.balloon.events.add('mouseleave', function (e) {
   placemark29.balloon.close();
});
placemark30.events.add('mouseenter', function (e) {
   placemark30.balloon.open();
});
placemark30.balloon.events.add('mouseleave', function (e) {
   placemark30.balloon.close();
});
placemark31.events.add('mouseenter', function (e) {
   placemark31.balloon.open();
});
placemark31.balloon.events.add('mouseleave', function (e) {
   placemark31.balloon.close();
});
*/

}
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