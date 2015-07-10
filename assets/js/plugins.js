// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Place any jQuery/helper plugins in here.
// main.js
$(document).ready(function() {
  $('.contactform').submit(function() {
    if ($(this).validationEngine('validate')) {
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
  $(document).scroll(function() {
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
    });
    return false;
  });
  $('.modalf2').click(function() {
    $('#modalf2').arcticmodal({

      afterClose: function(data, el) {
        $(".formError").fadeOut(150, function() {
          $(this).remove();
        });
        $('#fff4').clearForm();
      }
    });
    return false;
  });
  $("img.lazy").lazyload({
    threshold: 400,
    skip_invisible: false
  });
  $(document).click(function() {
    $(".dropcity").fadeOut(300);
    $(".ycblock").removeClass("dropactive");
  });
  $(".ycblock").click(function(e) {
    $(".dropcity").fadeToggle(300);
    $(".ycblock").toggleClass("dropactive");
    e.stopPropagation();
  });
  $('.ri-link').click(function() {
    portid = $(this).attr('id');
    portidnum = portid.replace(/\D/g, "");
    arcticurl = "/port/" + portidnum + ".php";
    $.arcticmodal({
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
                success: function(d, e, thissite) {
          d.body.html(                '<div class="box-modal">' +                 '<div class="box-modal_close arcticmodal-close arcticmodal-close2"></div>' +
            thissite +                 '</div>'            );
        }
      }
    });
    return false;
  });



  $('.conf').click(function() {
    $('#conf').arcticmodal();
    return false;
  });
  $('.serviceslider').bxSlider({
    mode: 'fade',
    pagerCustom: '.bx-pagerr'
  });
  $('.megamenu').megaMenuCompleteSet({
    menu_speed_show: 300,
    menu_speed_hide: 200,
    menu_speed_delay: 0,
    menu_effect: 'hover_fade',
    menu_click_outside: 1,
    menu_show_onload: 1,
    menu_responsive: 0
  });
  $(".modalf").click(function() {
    $("#fff5 input[name='action']").val('Заявка');
  });
  $(".ycblock").click(function() {
    $("#fff5 input[name='action']").val('Кнопка "Вам перезвонить" в меню');
  });
  $("header .obut").click(function() {
    $("#fff5 input[name='action']").val('Кнопка "Получить клиентов из интернета!" в первом экране');
  });
  $("#how .obut").click(function() {
    $("#fff5 input[name='action']").val('Кнопка "Получить клиентов из интернета!" в блоке "Как мы будем создавать очередь из клиентов"');
  });
  $(".action1").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание landing page');
  });
  $(".action2").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание лендо-сайта');
  });
  $(".action3").click(function() {
    $("#fff5 input[name='action']").val('заявка на настройку Яндекс.Директ');
  });
  $(".action4").click(function() {
    $("#fff5 input[name='action']").val('заявка на настройку Google Adwords');
  });
  $(".action5").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание маркетинг-кита');
  });
  $(".action6").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание группы в VK');
  });
  $(".action7").click(function() {
    $("#fff5 input[name='action']").val('заявка на настройку рекламы в Instagramm');
  });
  $(".action8").click(function() {
    $("#fff5 input[name='action']").val('заявка на E-mail маркетинг');
  });
  $(".action9").click(function() {
    $("#fff5 input[name='action']").val('заявка на запаковку бизнеса «под ключ»');
  });
  $(".action10").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание скриптов продаж');
  });
  $(".action11").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание коммер.предложение');
  });
  $(".action12").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание презентации');
  });
  $(".action13").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание корпоративного сайта');
  });
  $(".action14").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание интернет-магазина');
  });
  $(".action15").click(function() {
    $("#fff5 input[name='action']").val('заявка на создание СМС-рассылки');
  });
  $(".action16").click(function() {
    $("#fff5 input[name='action']").val('заявка на настройку таргетированной рекламы в VK');
  });
  $(".actionport1").click(function() {
    $("#fff5 input[name='action']").val('кнопка "Получить такой же качественный Landing Page!" в портфолио');
  });
  $(".actionport2").click(function() {
    $("#fff5 input[name='action']").val('кнопка "Получить такой же качественный Яндекс.Директ!" в портфолио');
  });
  $(".actionport3").click(function() {
    $("#fff5 input[name='action']").val('кнопка "Получить такой же качественный Google Adwords!" в портфолио');
  });
  $(".actionport4").click(function() {
    $("#fff5 input[name='action']").val('кнопка "Получить такой же качественный Маркетинг-кит или презентацию!" в портфолио');
  });
  $(".howresact").click(function() {
    $("#fff5 input[name='action']").val('кнопка "Узнать подробнее про каждый из инструментов!" в блоке "Как мы добиваемся столь высоких результатов?"');
  });
  $(".modalf2").click(function() {
    $("#fff4 input[name='action']").val('кнопка "задать вопрос"');
  });


});

/*

 arcticModal — jQuery plugin
 Version: 0.3
 Author: Sergey Predvoditelev (sergey.predvoditelev@gmail.com)
 Company: Arctic Laboratory (http://arcticlab.ru/)

 Docs & Examples: http://arcticlab.ru/arcticmodal/

 */
(function(d) {
  var g = {
    type: "html",
    content: "",
    url: "",
    ajax: {},
    ajax_request: null,
    closeOnEsc: !0,
    closeOnOverlayClick: !0,
    clone: !1,
    overlay: {
      block: void 0,
      tpl: '<div class="arcticmodal-overlay"></div>',
      css: {


      }
    },
    container: {
      block: void 0,
      tpl: '<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
    },
    wrap: void 0,
    body: void 0,
    errors: {
      tpl: '<div class="arcticmodal-error arcticmodal-close"></div>',
      autoclose_delay: 2E3,
      ajax_unsuccessful_load: "Error"
    },
    openEffect: {
      type: "fade",
      speed: 400
    },
    closeEffect: {
      type: "fade",
      speed: 400
    },
    beforeOpen: d.noop,
    afterOpen: d.noop,
    beforeClose: d.noop,
    afterClose: d.noop,
    afterLoading: d.noop,
    afterLoadingOnShow: d.noop,
    errorLoading: d.noop
  },
    j = 0,
    e = d([]),
    m = {
      isEventOut: function(a, b) {
        var c = !0;
        d(a).each(function() {
          d(b.target).get(0) == d(this).get(0) && (c = !1);
          0 == d(b.target).closest("HTML", d(this).get(0)).length && (c = !1)
        });
        return c
      }
    },
    f = {
      getParentEl: function(a) {
        var b = d(a);
        return b.data("arcticmodal") ? b : (b =
          d(a).closest(".arcticmodal-container").data("arcticmodalParentEl")) ? b : !1
      },
      transition: function(a, b, c, e) {
        e = void 0 == e ? d.noop : e;
        switch (c.type) {
          case "fade":
            "show" == b ? a.fadeIn(c.speed, e) : a.fadeOut(c.speed, e);
            break;
          case "none":
            "show" == b ? a.show() : a.hide(), e()
        }
      },
      prepare_body: function(a, b) {
        d(".arcticmodal-close", a.body).unbind("click.arcticmodal").bind("click.arcticmodal", function() {
          b.arcticmodal("close");
          return !1
        })
      },
      init_el: function(a, b) {
        var c = a.data("arcticmodal");
        if (!c) {
          c = b;
          j++;
          c.modalID = j;
          c.overlay.block =
            d(c.overlay.tpl);
          c.overlay.block.css(c.overlay.css);
          c.container.block = d(c.container.tpl);
          c.body = d(".arcticmodal-container_i2", c.container.block);
          b.clone ? c.body.html(a.clone(!0)) : (a.before('<div id="arcticmodalReserve' + c.modalID + '" style="display: none" />'), c.body.html(a));
          f.prepare_body(c, a);
          c.closeOnOverlayClick && c.overlay.block.add(c.container.block).click(function(b) {
            m.isEventOut(d(">*", c.body), b) && a.arcticmodal("close")
          });
          c.container.block.data("arcticmodalParentEl", a);
          a.data("arcticmodal", c);
          e = d.merge(e, a);
          d.proxy(h.show, a)();
          if ("html" == c.type) return a;
          if (void 0 != c.ajax.beforeSend) {
            var k = c.ajax.beforeSend;
            delete c.ajax.beforeSend
          }
          if (void 0 != c.ajax.success) {
            var g = c.ajax.success;
            delete c.ajax.success
          }
          if (void 0 != c.ajax.error) {
            var l = c.ajax.error;
            delete c.ajax.error
          }
          var n = d.extend(!0, {
            url: c.url,
            beforeSend: function() {
              void 0 == k ? c.body.html('<div class="arcticmodal-loading" />') : k(c, a)
            },
            success: function(b) {
              a.trigger("afterLoading");
              c.afterLoading(c, a, b);
              void 0 == g ? c.body.html(b) : g(c, a, b);
              f.prepare_body(c,
                a);
              a.trigger("afterLoadingOnShow");
              c.afterLoadingOnShow(c, a, b)
            },
            error: function() {
              a.trigger("errorLoading");
              c.errorLoading(c, a);
              void 0 == l ? (c.body.html(c.errors.tpl), d(".arcticmodal-error", c.body).html(c.errors.ajax_unsuccessful_load), d(".arcticmodal-close", c.body).click(function() {
                a.arcticmodal("close");
                return !1
              }), c.errors.autoclose_delay && setTimeout(function() {
                a.arcticmodal("close")
              }, c.errors.autoclose_delay)) : l(c, a)
            }
          }, c.ajax);
          c.ajax_request = d.ajax(n);
          a.data("arcticmodal", c)
        }
      },
      init: function(a) {
        a =
          d.extend(!0, {}, g, a);
        if (d.isFunction(this))
          if (void 0 == a) d.error("jquery.arcticmodal: Uncorrect parameters");
          else if ("" == a.type) d.error('jquery.arcticmodal: Don\'t set parameter "type"');
        else switch (a.type) {
          case "html":
            if ("" == a.content) {
              d.error('jquery.arcticmodal: Don\'t set parameter "content"');
              break
            }
            var b = a.content;
            a.content = "";
            return f.init_el(d(b), a);
          case "ajax":
            if ("" == a.url) {
              d.error('jquery.arcticmodal: Don\'t set parameter "url"');
              break
            }
            return f.init_el(d("<div />"), a)
        } else return this.each(function() {
          f.init_el(d(this),
            d.extend(!0, {}, a))
        })
      }
    },
    h = {
      show: function() {
        var a = f.getParentEl(this);
        if (!1 === a) d.error("jquery.arcticmodal: Uncorrect call");
        else {
          var b = a.data("arcticmodal");
          b.overlay.block.hide();
          b.container.block.hide();
          d("BODY").append(b.overlay.block);
          d("BODY").append(b.container.block);
          b.beforeOpen(b, a);
          a.trigger("beforeOpen");
          if ("hidden" != b.wrap.css("overflow")) {
            b.wrap.data("arcticmodalOverflow", b.wrap.css("overflow"));
            var c = b.wrap.outerWidth(!0);
            b.wrap.css("overflow", "hidden");
            document.body.className = "activebody";;
            var g = b.wrap.outerWidth(!0);
            g != c && b.wrap.css("marginRight", g - c + "px");
            $('#sliwhov').css("padding-right", g - c + 10 + "px");
          }
          e.not(a).each(function() {
            d(this).data("arcticmodal").overlay.block.hide()
          });
          f.transition(b.overlay.block, "show", 1 < e.length ? {
            type: "none"
          } : b.openEffect);
          f.transition(b.container.block, "show", 1 < e.length ? {
            type: "none"
          } : b.openEffect, function() {
            b.afterOpen(b, a);
            a.trigger("afterOpen")
          });
          return a
        }
      },
      close: function() {
        if (d.isFunction(this)) e.each(function() {
          d(this).arcticmodal("close")
        });
        else return this.each(function() {
          var a = f.getParentEl(this);
          if (!1 === a) d.error("jquery.arcticmodal: Uncorrect call");
          else {
            var b = a.data("arcticmodal");
            !1 !== b.beforeClose(b, a) && (a.trigger("beforeClose"), e.not(a).last().each(function() {
              d(this).data("arcticmodal").overlay.block.show()
            }), f.transition(b.overlay.block, "hide", 1 < e.length ? {
              type: "none"
            } : b.closeEffect), f.transition(b.container.block, "hide", 1 < e.length ? {
              type: "none"
            } : b.closeEffect, function() {
              b.afterClose(b, a);
              a.trigger("afterClose");
              b.clone || d("#arcticmodalReserve" + b.modalID).replaceWith(b.body.find(">*"));
              b.overlay.block.remove();
              b.container.block.remove();
              a.data("arcticmodal",
                null);
              d(".arcticmodal-container").length || (b.wrap.data("arcticmodalOverflow") && b.wrap.css("overflow", b.wrap.data("arcticmodalOverflow")), document.body.className = "noactivebody", b.wrap.css("marginRight", 0))
              $('#sliwhov').css("padding-right", 10)

            }), "ajax" == b.type && b.ajax_request.abort(), e = e.not(a))
          }
        })
      },
      setDefault: function(a) {
        d.extend(!0, g, a)
      }
    };
  d(function() {
    g.wrap = d(document.all && !document.querySelector ? "html" : "body")
  });
  d(document).bind("keyup.arcticmodal", function(a) {
    var b = e.last();
    b.length && b.data("arcticmodal").closeOnEsc && 27 === a.keyCode && b.arcticmodal("close")
  });
  d.arcticmodal =
    d.fn.arcticmodal = function(a) {
      if (h[a]) return h[a].apply(this, Array.prototype.slice.call(arguments, 1));
      if ("object" === typeof a || !a) return f.init.apply(this, arguments);
      d.error("jquery.arcticmodal: Method " + a + " does not exist")
  }
})(jQuery);



$(document).ready(function() {



});

/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
! function(t) {
  var e = {}, s = {
      mode: "horizontal",
      slideSelector: "",
      infiniteLoop: !0,
      hideControlOnEnd: !1,
      speed: 500,
      easing: null,
      slideMargin: 0,
      startSlide: 0,
      randomStart: !1,
      captions: !1,
      ticker: !1,
      tickerHover: !1,
      adaptiveHeight: !1,
      adaptiveHeightSpeed: 300,
      video: !1,
      useCSS: !0,
      preloadImages: "visible",
      responsive: !0,
      touchEnabled: !0,
      swipeThreshold: 50,
      oneToOneTouch: !0,
      preventDefaultSwipeX: !0,
      preventDefaultSwipeY: !1,
      pager: !0,
      pagerType: "full",
      pagerShortSeparator: " / ",
      pagerSelector: null,
      buildPager: null,
      pagerCustom: null,
      controls: !0,
      nextText: "Next",
      prevText: "Prev",
      nextSelector: null,
      prevSelector: null,
      autoControls: !1,
      startText: "Start",
      stopText: "Stop",
      autoControlsCombine: !1,
      autoControlsSelector: null,
      auto: !1,
      pause: 4e3,
      autoStart: !0,
      autoDirection: "next",
      autoHover: !1,
      autoDelay: 0,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 0,
      slideWidth: 0,
      onSliderLoad: function() {},
      onSlideBefore: function() {},
      onSlideAfter: function() {},
      onSlideNext: function() {},
      onSlidePrev: function() {}
    };
  t.fn.bxSlider = function(n) {
    if (0 == this.length) return this;
    if (this.length > 1) return this.each(function() {
      t(this).bxSlider(n)
    }), this;
    var o = {}, r = this;
    e.el = this;
    var a = t(window).width(),
      l = t(window).height(),
      d = function() {
        o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
          index: o.settings.startSlide
        }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
          var t = document.createElement("div"),
            e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
          for (var i in e)
            if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
          return !1
        }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
          t(this).data("origStyle", t(this).attr("style"))
        }), c()
      }, c = function() {
        r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
          width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
          position: "relative"
        }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
          width: "100%",
          overflow: "hidden",
          position: "relative"
        }), o.viewport.parent().css({
          maxWidth: v()
        }), o.settings.pager || o.viewport.parent().css({
          margin: "0 auto 0px"
        }), o.children.css({
          "float": "horizontal" == o.settings.mode ? "left" : "none",
          listStyle: "none",
          position: "relative"
        }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
          position: "absolute",
          zIndex: 0,
          display: "none"
        }), o.children.eq(o.settings.startSlide).css({
          zIndex: 50,
          display: "block"
        })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
        var e = o.children.eq(o.settings.startSlide);
        "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
      }, g = function(e, i) {
        var s = e.find("img, iframe").length;
        if (0 == s) return i(), void 0;
        var n = 0;
        e.find("img, iframe").each(function() {
          t(this).one("load", function() {
            ++n == s && i()
          }).each(function() {
            this.complete && t(this).load()
          })
        })
      }, h = function() {
        if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
          var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
            i = o.children.slice(0, e).clone().addClass("bx-clone"),
            s = o.children.slice(-e).clone().addClass("bx-clone");
          r.append(i).prepend(s)
        }
        o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(p()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", B), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && I(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
      }, p = function() {
        var e = 0,
          s = t();
        if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
          if (o.carousel) {
            var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
            for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
          } else s = o.children.eq(o.active.index);
          else s = o.children;
        return "vertical" == o.settings.mode ? (s.each(function() {
          e += t(this).outerHeight()
        }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
          return t(this).outerHeight(!1)
        }).get()), e
      }, v = function() {
        var t = "100%";
        return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
      }, u = function() {
        var t = o.settings.slideWidth,
          e = o.viewport.width();
        return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
      }, f = function() {
        var t = 1;
        if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
          if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
          else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
        else {
          var e = o.children.first().width();
          t = Math.floor(o.viewport.width() / e)
        } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
        return t
      }, x = function() {
        var t = 0;
        if (o.settings.moveSlides > 0)
          if (o.settings.infiniteLoop) t = o.children.length / m();
          else
            for (var e = 0, i = 0; e < o.children.length;)++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
          else t = Math.ceil(o.children.length / f());
        return t
      }, m = function() {
        return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
      }, S = function() {
        if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
          if ("horizontal" == o.settings.mode) {
            var t = o.children.last(),
              e = t.position();
            b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
          } else if ("vertical" == o.settings.mode) {
            var i = o.children.length - o.settings.minSlides,
              e = o.children.eq(i).position();
            b(-e.top, "reset", 0)
          }
        } else {
          var e = o.children.eq(o.active.index * m()).position();
          o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
        }
      }, b = function(t, e, i, s) {
        if (o.usingCSS) {
          var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
          r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
          })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
          }))
        } else {
          var a = {};
          a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() {
            D()
          }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
            b(s.resetValue, "reset", 0), N()
          })
        }
      }, w = function() {
        for (var e = "", i = x(), s = 0; i > s; s++) {
          var n = "";
          o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
        }
        o.pagerEl.html(e)
      }, T = function() {
        o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.delegate("a", "click", q)
      }, C = function() {
        o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
      }, E = function() {
        o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.delegate(".bx-start", "click", k), o.controls.autoEl.delegate(".bx-stop", "click", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
      }, P = function() {
        o.children.each(function() {
          var e = t(this).find("img:first").attr("title");
          void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
        })
      }, y = function(t) {
        o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
      }, z = function(t) {
        o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
      }, k = function(t) {
        r.startAuto(), t.preventDefault()
      }, M = function(t) {
        r.stopAuto(), t.preventDefault()
      }, q = function(e) {
        o.settings.auto && r.stopAuto();
        var i = t(e.currentTarget),
          s = parseInt(i.attr("data-slide-index"));
        s != o.active.index && r.goToSlide(s), e.preventDefault()
      }, I = function(e) {
        var i = o.children.length;
        return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, s) {
          t(s).find("a").eq(e).addClass("active")
        }), void 0)
      }, D = function() {
        if (o.settings.infiniteLoop) {
          var t = "";
          0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), "horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0)
        }
        o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
      }, A = function(t) {
        o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
      }, W = function() {
        1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
      }, H = function() {
        o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
          o.interval && (r.stopAuto(!0), o.autoPaused = !0)
        }, function() {
          o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
        })
      }, L = function() {
        var e = 0;
        if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
        else {
          r.prepend(o.children.clone().addClass("bx-clone"));
          var i = o.children.first().position();
          e = "horizontal" == o.settings.mode ? -i.left : -i.top
        }
        b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
          r.stop()
        }, function() {
          var e = 0;
          o.children.each(function() {
            e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
          });
          var i = o.settings.speed / e,
            s = "horizontal" == o.settings.mode ? "left" : "top",
            n = i * (e - Math.abs(parseInt(r.css(s))));
          N(n)
        }), N()
      }, N = function(t) {
        speed = t ? t : o.settings.speed;
        var e = {
          left: 0,
          top: 0
        }, i = {
            left: 0,
            top: 0
          };
        "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
        var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
          n = "horizontal" == o.settings.mode ? -i.left : -i.top,
          a = {
            resetValue: n
          };
        b(s, "ticker", speed, a)
      }, O = function() {
        o.touch = {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        }, o.viewport.bind("touchstart", X)
      }, X = function(t) {
        if (o.working) t.preventDefault();
        else {
          o.touch.originalPos = r.position();
          var e = t.originalEvent;
          o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
        }
      }, Y = function(t) {
        var e = t.originalEvent,
          i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
          s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
        if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
          var n = 0;
          if ("horizontal" == o.settings.mode) {
            var r = e.changedTouches[0].pageX - o.touch.start.x;
            n = o.touch.originalPos.left + r
          } else {
            var r = e.changedTouches[0].pageY - o.touch.start.y;
            n = o.touch.originalPos.top + r
          }
          b(n, "reset", 0)
        }
      }, V = function(t) {
        o.viewport.unbind("touchmove", Y);
        var e = t.originalEvent,
          i = 0;
        if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
          var s = Math.abs(o.touch.start.x - o.touch.end.x);
          s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
        } else {
          var s = 0;
          "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
        }
        o.viewport.unbind("touchend", V)
      }, B = function() {
        var e = t(window).width(),
          i = t(window).height();
        (a != e || l != i) && (a = e, l = i, r.redrawSlider())
      };
    return r.goToSlide = function(e, i) {
      if (!o.working && o.active.index != e)
        if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && I(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({
          height: p()
        }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
          zIndex: 0
        }), o.children.eq(o.active.index).css("zIndex", 51).fadeIn(o.settings.speed, function() {
          t(this).css("zIndex", 50), D()
        });
        else {
          o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({
            height: p()
          }, o.settings.adaptiveHeightSpeed);
          var s = 0,
            n = {
              left: 0,
              top: 0
            };
          if (!o.settings.infiniteLoop && o.carousel && o.active.last)
            if ("horizontal" == o.settings.mode) {
              var a = o.children.eq(o.children.length - 1);
              n = a.position(), s = o.viewport.width() - a.outerWidth()
            } else {
              var l = o.children.length - o.settings.minSlides;
              n = o.children.eq(l).position()
            } else if (o.carousel && o.active.last && "prev" == i) {
            var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
              a = r.children(".bx-clone").eq(d);
            n = a.position()
          } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
          else if (e >= 0) {
            var c = e * m();
            n = o.children.eq(c).position()
          }
          if ("undefined" != typeof n) {
            var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
            b(g, "slide", o.settings.speed)
          }
        }
    }, r.goToNextSlide = function() {
      if (o.settings.infiniteLoop || !o.active.last) {
        var t = parseInt(o.active.index) + 1;
        r.goToSlide(t, "next")
      }
    }, r.goToPrevSlide = function() {
      if (o.settings.infiniteLoop || 0 != o.active.index) {
        var t = parseInt(o.active.index) - 1;
        r.goToSlide(t, "prev")
      }
    }, r.startAuto = function(t) {
      o.interval || (o.interval = setInterval(function() {
        "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
      }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
    }, r.stopAuto = function(t) {
      o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
    }, r.getCurrentSlide = function() {
      return o.active.index
    }, r.getSlideCount = function() {
      return o.children.length
    }, r.redrawSlider = function() {
      o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", p()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), I(o.active.index))
    }, r.destroySlider = function() {
      o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
        void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
      }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", B))
    }, r.reloadSlider = function(t) {
      void 0 != t && (n = t), r.destroySlider(), d()
    }, d(), this
  }
}(jQuery);
/*
 * jQuery Form Plugin
 * version: 2.05 (02/29/2008)
 * @requires jQuery v1.2.2 or later
 *
 * Examples at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id$
 */
(function($) {
  /**
   * ajaxSubmit() provides a mechanism for submitting an HTML form using AJAX.
   *
   * ajaxSubmit accepts a single argument which can be either a success callback function
   * or an options Object.  If a function is provided it will be invoked upon successful
   * completion of the submit and will be passed the response from the server.
   * If an options Object is provided, the following attributes are supported:
   *
   *  target:   Identifies the element(s) in the page to be updated with the server response.
   *            This value may be specified as a jQuery selection string, a jQuery object,
   *            or a DOM element.
   *            default value: null
   *
   *  url:      URL to which the form data will be submitted.
   *            default value: value of form's 'action' attribute
   *
   *  type:     The method in which the form data should be submitted, 'GET' or 'POST'.
   *            default value: value of form's 'method' attribute (or 'GET' if none found)
   *
   *  data:     Additional data to add to the request, specified as key/value pairs (see $.ajax).
   *
   *  beforeSubmit:  Callback method to be invoked before the form is submitted.
   *            default value: null
   *
   *  success:  Callback method to be invoked after the form has been successfully submitted
   *            and the response has been returned from the server
   *            default value: null
   *
   *  dataType: Expected dataType of the response.  One of: null, 'xml', 'script', or 'json'
   *            default value: null
   *
   *  semantic: Boolean flag indicating whether data must be submitted in semantic order (slower).
   *            default value: false
   *
   *  resetForm: Boolean flag indicating whether the form should be reset if the submit is successful
   *
   *  clearForm: Boolean flag indicating whether the form should be cleared if the submit is successful
   *
   *
   * The 'beforeSubmit' callback can be provided as a hook for running pre-submit logic or for
   * validating the form data.  If the 'beforeSubmit' callback returns false then the form will
   * not be submitted. The 'beforeSubmit' callback is invoked with three arguments: the form data
   * in array format, the jQuery object, and the options object passed into ajaxSubmit.
   * The form data array takes the following form:
   *
   *     [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
   *
   * If a 'success' callback method is provided it is invoked after the response has been returned
   * from the server.  It is passed the responseText or responseXML value (depending on dataType).
   * See jQuery.ajax for further details.
   *
   *
   * The dataType option provides a means for specifying how the server response should be handled.
   * This maps directly to the jQuery.httpData method.  The following values are supported:
   *
   *      'xml':    if dataType == 'xml' the server response is treated as XML and the 'success'
   *                   callback method, if specified, will be passed the responseXML value
   *      'json':   if dataType == 'json' the server response will be evaluted and passed to
   *                   the 'success' callback, if specified
   *      'script': if dataType == 'script' the server response is evaluated in the global context
   *
   *
   * Note that it does not make sense to use both the 'target' and 'dataType' options.  If both
   * are provided the target will be ignored.
   *
   * The semantic argument can be used to force form serialization in semantic order.
   * This is normally true anyway, unless the form contains input elements of type='image'.
   * If your form must be submitted with name/value pairs in semantic order and your form
   * contains an input of type='image" then pass true for this arg, otherwise pass false
   * (or nothing) to avoid the overhead for this logic.
   *
   *
   * When used on its own, ajaxSubmit() is typically bound to a form's submit event like this:
   *
   * $("#form-id").submit(function() {
   *     $(this).ajaxSubmit(options);
   *     return false; // cancel conventional submit
   * });
   *
   * When using ajaxForm(), however, this is done for you.
   *
   * @example
   * $('#myForm').ajaxSubmit(function(data) {
   *     alert('Form submit succeeded! Server returned: ' + data);
   * });
   * @desc Submit form and alert server response
   *
   *
   * @example
   * var options = {
   *     target: '#myTargetDiv'
   * };
   * $('#myForm').ajaxSubmit(options);
   * @desc Submit form and update page element with server response
   *
   *
   * @example
   * var options = {
   *     success: function(responseText) {
   *         alert(responseText);
   *     }
   * };
   * $('#myForm').ajaxSubmit(options);
   * @desc Submit form and alert the server response
   *
   *
   * @example
   * var options = {
   *     beforeSubmit: function(formArray, jqForm) {
   *         if (formArray.length == 0) {
   *             alert('Please enter data.');
   *             return false;
   *         }
   *     }
   * };
   * $('#myForm').ajaxSubmit(options);
   * @desc Pre-submit validation which aborts the submit operation if form data is empty
   *
   *
   * @example
   * var options = {
   *     url: myJsonUrl.php,
   *     dataType: 'json',
   *     success: function(data) {
   *        // 'data' is an object representing the the evaluated json data
   *     }
   * };
   * $('#myForm').ajaxSubmit(options);
   * @desc json data returned and evaluated
   *
   *
   * @example
   * var options = {
   *     url: myXmlUrl.php,
   *     dataType: 'xml',
   *     success: function(responseXML) {
   *        // responseXML is XML document object
   *        var data = $('myElement', responseXML).text();
   *     }
   * };
   * $('#myForm').ajaxSubmit(options);
   * @desc XML data returned from server
   *
   *
   * @example
   * var options = {
   *     resetForm: true
   * };
   * $('#myForm').ajaxSubmit(options);
   * @desc submit form and reset it if successful
   *
   * @example
   * $('#myForm).submit(function() {
   *    $(this).ajaxSubmit();
   *    return false;
   * });
   * @desc Bind form's submit event to use ajaxSubmit
   *
   *
   * @name ajaxSubmit
   * @type jQuery
   * @param options  object literal containing options which control the form submission process
   * @cat Plugins/Form
   * @return jQuery
   */
  $.fn.ajaxSubmit = function(options) {
    if (typeof options == 'function')
      options = {
        success: options
      };

    options = $.extend({
      url: this.attr('action') || window.location.toString(),
      type: this.attr('method') || 'GET'
    }, options || {});

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) return this;

    var a = this.formToArray(options.semantic);
    if (options.data) {
      for (var n in options.data)
        a.push({
          name: n,
          value: options.data[n]
        });
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) return this;

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) return this;

    var q = $.param(a);

    if (options.type.toUpperCase() == 'GET') {
      options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
      options.data = null; // data is null for 'get'
    } else
      options.data = q; // data is the query string for 'post'

    var $form = this,
      callbacks = [];
    if (options.resetForm) callbacks.push(function() {
      $form.resetForm();
    });
    if (options.clearForm) callbacks.push(function() {
      $form.clearForm();
    });

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
      var oldSuccess = options.success || function() {};
      callbacks.push(function(data) {
        $(options.target).html(data).each(oldSuccess, arguments);
      });
    } else if (options.success)
      callbacks.push(options.success);

    options.success = function(data, status) {
      for (var i = 0, max = callbacks.length; i < max; i++)
        callbacks[i](data, status, $form);
    };

    // are there files to upload?
    var files = $('input:file', this).fieldValue();
    var found = false;
    for (var j = 0; j < files.length; j++)
      if (files[j])
        found = true;

      // options.iframe allows user to force iframe mode
    if (options.iframe || found) {
      // hack to fix Safari hang (thanks to Tim Molendijk for this)
      // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
      if ($.browser.safari && options.closeKeepAlive)
        $.get(options.closeKeepAlive, fileUpload);
      else
        fileUpload();
    } else
      $.ajax(options);

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;


    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUpload() {
      var form = $form[0];
      var opts = $.extend({}, $.ajaxSettings, options);

      var id = 'jqFormIO' + (new Date().getTime());
      var $io = $('<iframe id="' + id + '" name="' + id + '" />');
      var io = $io[0];
      var op8 = $.browser.opera && window.opera.version() < 9;
      if ($.browser.msie || op8) io.src = 'javascript:false;document.write("");';
      $io.css({
        position: 'absolute',
        top: '-1000px',
        left: '-1000px'
      });

      var xhr = { // mock object
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: 'n/a',
        getAllResponseHeaders: function() {},
        getResponseHeader: function() {},
        setRequestHeader: function() {}
      };

      var g = opts.global;
      // trigger ajax global events so that activity/block indicators work like normal
      if (g && !$.active++) $.event.trigger("ajaxStart");
      if (g) $.event.trigger("ajaxSend", [xhr, opts]);

      var cbInvoked = 0;
      var timedOut = 0;

      // take a breath so that pending repaints get some cpu time before the upload starts
      setTimeout(function() {
        // make sure form attrs are set
        var encAttr = form.encoding ? 'encoding' : 'enctype';
        var t = $form.attr('target'),
          a = $form.attr('action');
        $form.attr({
          target: id,
          method: 'POST',
          action: opts.url
        });
        form[encAttr] = 'multipart/form-data';

        // support timout
        if (opts.timeout)
          setTimeout(function() {
            timedOut = true;
            cb();
          }, opts.timeout);

        // add iframe to doc and submit the form
        $io.appendTo('body');
        io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
        form.submit();
        // reset attrs
        $form.attr({
          action: a,
          target: t
        });
      }, 10);

      function cb() {
        if (cbInvoked++) return;

        io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

        var ok = true;
        try {
          if (timedOut) throw 'timeout';
          // extract the server response from the iframe
          var data, doc;
          doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
          xhr.responseText = doc.body ? doc.body.innerHTML : null;
          xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
          xhr.getResponseHeader = function(header) {
            var headers = {
              'content-type': opts.dataType
            };
            return headers[header];
          };

          if (opts.dataType == 'json' || opts.dataType == 'script') {
            var ta = doc.getElementsByTagName('textarea')[0];
            xhr.responseText = ta ? ta.value : xhr.responseText;
          } else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
            xhr.responseXML = toXml(xhr.responseText);
          }
          data = $.httpData(xhr, opts.dataType);
        } catch (e) {
          ok = false;
          $.handleError(opts, xhr, 'error', e);
        }

        // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
        if (ok) {
          opts.success(data, 'success');
          if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
        }
        if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
        if (g && !--$.active) $.event.trigger("ajaxStop");
        if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

        // clean up
        setTimeout(function() {
          $io.remove();
          xhr.responseXML = null;
        }, 100);
      };

      function toXml(s, doc) {
        if (window.ActiveXObject) {
          doc = new ActiveXObject('Microsoft.XMLDOM');
          doc.async = 'false';
          doc.loadXML(s);
        } else
          doc = (new DOMParser()).parseFromString(s, 'text/xml');
        return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
      };
    };
  };

  /**
   * ajaxForm() provides a mechanism for fully automating form submission.
   *
   * The advantages of using this method instead of ajaxSubmit() are:
   *
   * 1: This method will include coordinates for <input type="image" /> elements (if the element
   *    is used to submit the form).
   * 2. This method will include the submit element's name/value data (for the element that was
   *    used to submit the form).
   * 3. This method binds the submit() method to the form for you.
   *
   * Note that for accurate x/y coordinates of image submit elements in all browsers
   * you need to also use the "dimensions" plugin (this method will auto-detect its presence).
   *
   * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
   * passes the options argument along after properly binding events for submit elements and
   * the form itself.  See ajaxSubmit for a full description of the options argument.
   *
   *
   * @example
   * var options = {
   *     target: '#myTargetDiv'
   * };
   * $('#myForm').ajaxSForm(options);
   * @desc Bind form's submit event so that 'myTargetDiv' is updated with the server response
   *       when the form is submitted.
   *
   *
   * @example
   * var options = {
   *     success: function(responseText) {
   *         alert(responseText);
   *     }
   * };
   * $('#myForm').ajaxSubmit(options);
   * @desc Bind form's submit event so that server response is alerted after the form is submitted.
   *
   *
   * @example
   * var options = {
   *     beforeSubmit: function(formArray, jqForm) {
   *         if (formArray.length == 0) {
   *             alert('Please enter data.');
   *             return false;
   *         }
   *     }
   * };
   * $('#myForm').ajaxSubmit(options);
   * @desc Bind form's submit event so that pre-submit callback is invoked before the form
   *       is submitted.
   *
   *
   * @name   ajaxForm
   * @param  options  object literal containing options which control the form submission process
   * @return jQuery
   * @cat    Plugins/Form
   * @type   jQuery
   */
  $.fn.ajaxForm = function(options) {
    return this.ajaxFormUnbind().bind('submit.form-plugin', function() {
      $(this).ajaxSubmit(options);
      return false;
    }).each(function() {
      // store options in hash
      $(":submit,input:image", this).bind('click.form-plugin', function(e) {
        var $form = this.form;
        $form.clk = this;
        if (this.type == 'image') {
          if (e.offsetX != undefined) {
            $form.clk_x = e.offsetX;
            $form.clk_y = e.offsetY;
          } else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
            var offset = $(this).offset();
            $form.clk_x = e.pageX - offset.left;
            $form.clk_y = e.pageY - offset.top;
          } else {
            $form.clk_x = e.pageX - this.offsetLeft;
            $form.clk_y = e.pageY - this.offsetTop;
          }
        }
        // clear form vars
        setTimeout(function() {
          $form.clk = $form.clk_x = $form.clk_y = null;
        }, 10);
      });
    });
  };


  /**
   * ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
   *
   * @name   ajaxFormUnbind
   * @return jQuery
   * @cat    Plugins/Form
   * @type   jQuery
   */
  $.fn.ajaxFormUnbind = function() {
    this.unbind('submit.form-plugin');
    return this.each(function() {
      $(":submit,input:image", this).unbind('click.form-plugin');
    });

  };

  /**
   * formToArray() gathers form element data into an array of objects that can
   * be passed to any of the following ajax functions: $.get, $.post, or load.
   * Each object in the array has both a 'name' and 'value' property.  An example of
   * an array for a simple login form might be:
   *
   * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
   *
   * It is this array that is passed to pre-submit callback functions provided to the
   * ajaxSubmit() and ajaxForm() methods.
   *
   * The semantic argument can be used to force form serialization in semantic order.
   * This is normally true anyway, unless the form contains input elements of type='image'.
   * If your form must be submitted with name/value pairs in semantic order and your form
   * contains an input of type='image" then pass true for this arg, otherwise pass false
   * (or nothing) to avoid the overhead for this logic.
   *
   * @example var data = $("#myForm").formToArray();
   * $.post( "myscript.cgi", data );
   * @desc Collect all the data from a form and submit it to the server.
   *
   * @name formToArray
   * @param semantic true if serialization must maintain strict semantic ordering of elements (slower)
   * @type Array<Object>
   * @cat Plugins/Form
   */
  $.fn.formToArray = function(semantic) {
    var a = [];
    if (this.length == 0) return a;

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) return a;
    for (var i = 0, max = els.length; i < max; i++) {
      var el = els[i];
      var n = el.name;
      if (!n) continue;

      if (semantic && form.clk && el.type == "image") {
        // handle image inputs on the fly when semantic == true
        if (!el.disabled && form.clk == el)
          a.push({
            name: n + '.x',
            value: form.clk_x
          }, {
            name: n + '.y',
            value: form.clk_y
          });
        continue;
      }

      var v = $.fieldValue(el, true);
      if (v && v.constructor == Array) {
        for (var j = 0, jmax = v.length; j < jmax; j++)
          a.push({
            name: n,
            value: v[j]
          });
      } else if (v !== null && typeof v != 'undefined')
        a.push({
          name: n,
          value: v
        });
    }

    if (!semantic && form.clk) {
      // input type=='image' are not found in elements array! handle them here
      var inputs = form.getElementsByTagName("input");
      for (var i = 0, max = inputs.length; i < max; i++) {
        var input = inputs[i];
        var n = input.name;
        if (n && !input.disabled && input.type == "image" && form.clk == input)
          a.push({
            name: n + '.x',
            value: form.clk_x
          }, {
            name: n + '.y',
            value: form.clk_y
          });
      }
    }
    return a;
  };


  /**
   * Serializes form data into a 'submittable' string. This method will return a string
   * in the format: name1=value1&amp;name2=value2
   *
   * The semantic argument can be used to force form serialization in semantic order.
   * If your form must be submitted with name/value pairs in semantic order then pass
   * true for this arg, otherwise pass false (or nothing) to avoid the overhead for
   * this logic (which can be significant for very large forms).
   *
   * @example var data = $("#myForm").formSerialize();
   * $.ajax('POST', "myscript.cgi", data);
   * @desc Collect all the data from a form into a single string
   *
   * @name formSerialize
   * @param semantic true if serialization must maintain strict semantic ordering of elements (slower)
   * @type String
   * @cat Plugins/Form
   */
  $.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
  };


  /**
   * Serializes all field elements in the jQuery object into a query string.
   * This method will return a string in the format: name1=value1&amp;name2=value2
   *
   * The successful argument controls whether or not serialization is limited to
   * 'successful' controls (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
   * The default value of the successful argument is true.
   *
   * @example var data = $("input").fieldSerialize();
   * @desc Collect the data from all successful input elements into a query string
   *
   * @example var data = $(":radio").fieldSerialize();
   * @desc Collect the data from all successful radio input elements into a query string
   *
   * @example var data = $("#myForm :checkbox").fieldSerialize();
   * @desc Collect the data from all successful checkbox input elements in myForm into a query string
   *
   * @example var data = $("#myForm :checkbox").fieldSerialize(false);
   * @desc Collect the data from all checkbox elements in myForm (even the unchecked ones) into a query string
   *
   * @example var data = $(":input").fieldSerialize();
   * @desc Collect the data from all successful input, select, textarea and button elements into a query string
   *
   * @name fieldSerialize
   * @param successful true if only successful controls should be serialized (default is true)
   * @type String
   * @cat Plugins/Form
   */
  $.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
      var n = this.name;
      if (!n) return;
      var v = $.fieldValue(this, successful);
      if (v && v.constructor == Array) {
        for (var i = 0, max = v.length; i < max; i++)
          a.push({
            name: n,
            value: v[i]
          });
      } else if (v !== null && typeof v != 'undefined')
        a.push({
          name: this.name,
          value: v
        });
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
  };


  /**
   * Returns the value(s) of the element in the matched set.  For example, consider the following form:
   *
   *  <form><fieldset>
   *      <input name="A" type="text" />
   *      <input name="A" type="text" />
   *      <input name="B" type="checkbox" value="B1" />
   *      <input name="B" type="checkbox" value="B2"/>
   *      <input name="C" type="radio" value="C1" />
   *      <input name="C" type="radio" value="C2" />
   *  </fieldset></form>
   *
   *  var v = $(':text').fieldValue();
   *  // if no values are entered into the text inputs
   *  v == ['','']
   *  // if values entered into the text inputs are 'foo' and 'bar'
   *  v == ['foo','bar']
   *
   *  var v = $(':checkbox').fieldValue();
   *  // if neither checkbox is checked
   *  v === undefined
   *  // if both checkboxes are checked
   *  v == ['B1', 'B2']
   *
   *  var v = $(':radio').fieldValue();
   *  // if neither radio is checked
   *  v === undefined
   *  // if first radio is checked
   *  v == ['C1']
   *
   * The successful argument controls whether or not the field element must be 'successful'
   * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
   * The default value of the successful argument is true.  If this value is false the value(s)
   * for each element is returned.
   *
   * Note: This method *always* returns an array.  If no valid value can be determined the
   *       array will be empty, otherwise it will contain one or more values.
   *
   * @example var data = $("#myPasswordElement").fieldValue();
   * alert(data[0]);
   * @desc Alerts the current value of the myPasswordElement element
   *
   * @example var data = $("#myForm :input").fieldValue();
   * @desc Get the value(s) of the form elements in myForm
   *
   * @example var data = $("#myForm :checkbox").fieldValue();
   * @desc Get the value(s) for the successful checkbox element(s) in the jQuery object.
   *
   * @example var data = $("#mySingleSelect").fieldValue();
   * @desc Get the value(s) of the select control
   *
   * @example var data = $(':text').fieldValue();
   * @desc Get the value(s) of the text input or textarea elements
   *
   * @example var data = $("#myMultiSelect").fieldValue();
   * @desc Get the values for the select-multiple control
   *
   * @name fieldValue
   * @param Boolean successful true if only the values for successful controls should be returned (default is true)
   * @type Array<String>
   * @cat Plugins/Form
   */
  $.fn.fieldValue = function(successful) {
    for (var val = [], i = 0, max = this.length; i < max; i++) {
      var el = this[i];
      var v = $.fieldValue(el, successful);
      if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
        continue;
      v.constructor == Array ? $.merge(val, v) : val.push(v);
    }
    return val;
  };

  /**
   * Returns the value of the field element.
   *
   * The successful argument controls whether or not the field element must be 'successful'
   * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
   * The default value of the successful argument is true.  If the given element is not
   * successful and the successful arg is not false then the returned value will be null.
   *
   * Note: If the successful flag is true (default) but the element is not successful, the return will be null
   * Note: The value returned for a successful select-multiple element will always be an array.
   * Note: If the element has no value the return value will be undefined.
   *
   * @example var data = jQuery.fieldValue($("#myPasswordElement")[0]);
   * @desc Gets the current value of the myPasswordElement element
   *
   * @name fieldValue
   * @param Element el The DOM element for which the value will be returned
   * @param Boolean successful true if value returned must be for a successful controls (default is true)
   * @type String or Array<String> or null or undefined
   * @cat Plugins/Form
   */
  $.fieldValue = function(el, successful) {
    var n = el.name,
      t = el.type,
      tag = el.tagName.toLowerCase();
    if (typeof successful == 'undefined') successful = true;

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
      (t == 'checkbox' || t == 'radio') && !el.checked ||
      (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
      tag == 'select' && el.selectedIndex == -1))
      return null;

    if (tag == 'select') {
      var index = el.selectedIndex;
      if (index < 0) return null;
      var a = [],
        ops = el.options;
      var one = (t == 'select-one');
      var max = (one ? index + 1 : ops.length);
      for (var i = (one ? index : 0); i < max; i++) {
        var op = ops[i];
        if (op.selected) {
          // extra pain for IE...
          var v = $.browser.msie && !(op.attributes['value'].specified) ? op.text : op.value;
          if (one) return v;
          a.push(v);
        }
      }
      return a;
    }
    return el.value;
  };


  /**
   * Clears the form data.  Takes the following actions on the form's input fields:
   *  - input text fields will have their 'value' property set to the empty string
   *  - select elements will have their 'selectedIndex' property set to -1
   *  - checkbox and radio inputs will have their 'checked' property set to false
   *  - inputs of type submit, button, reset, and hidden will *not* be effected
   *  - button elements will *not* be effected
   *
   * @example $('form').clearForm();
   * @desc Clears all forms on the page.
   *
   * @name clearForm
   * @type jQuery
   * @cat Plugins/Form
   */
  $.fn.clearForm = function() {
    return this.each(function() {
      $('input,select,textarea', this).clearFields();
    });
  };

  /**
   * Clears the selected form elements.  Takes the following actions on the matched elements:
   *  - input text fields will have their 'value' property set to the empty string
   *  - select elements will have their 'selectedIndex' property set to -1
   *  - checkbox and radio inputs will have their 'checked' property set to false
   *  - inputs of type submit, button, reset, and hidden will *not* be effected
   *  - button elements will *not* be effected
   *
   * @example $('.myInputs').clearFields();
   * @desc Clears all inputs with class myInputs
   *
   * @name clearFields
   * @type jQuery
   * @cat Plugins/Form
   */
  $.fn.clearFields = $.fn.clearInputs = function() {
    return this.each(function() {
      var t = this.type,
        tag = this.tagName.toLowerCase();
      if (t == 'text' || t == 'password' || tag == 'textarea')
        this.value = '';
      else if (t == 'checkbox' || t == 'radio')
        this.checked = false;
      else if (tag == 'select')
        this.selectedIndex = -1;
    });
  };


  /**
   * Resets the form data.  Causes all form elements to be reset to their original value.
   *
   * @example $('form').resetForm();
   * @desc Resets all forms on the page.
   *
   * @name resetForm
   * @type jQuery
   * @cat Plugins/Form
   */
  $.fn.resetForm = function() {
    return this.each(function() {
      // guard against an input with the name of 'reset'
      // note that IE reports the reset function as an 'object'
      if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
        this.reset();
    });
  };


  /**
   * Enables or disables any matching elements.
   *
   * @example $(':radio').enabled(false);
   * @desc Disables all radio buttons
   *
   * @name select
   * @type jQuery
   * @cat Plugins/Form
   */
  $.fn.enable = function(b) {
    if (b == undefined) b = true;
    return this.each(function() {
      this.disabled = !b
    });
  };

  /**
   * Checks/unchecks any matching checkboxes or radio buttons and
   * selects/deselects and matching option elements.
   *
   * @example $(':checkbox').select();
   * @desc Checks all checkboxes
   *
   * @name select
   * @type jQuery
   * @cat Plugins/Form
   */
  $.fn.select = function(select) {
    if (select == undefined) select = true;
    return this.each(function() {
      var t = this.type;
      if (t == 'checkbox' || t == 'radio')
        this.checked = select;
      else if (this.tagName.toLowerCase() == 'option') {
        var $sel = $(this).parent('select');
        if (select && $sel[0] && $sel[0].type == 'select-one') {
          // deselect all other options
          $sel.find('option').select(false);
        }
        this.selected = select;
      }
    });
  };

})(jQuery);
/*! Lazy Load 1.9.4 - MIT license - Copyright 2010-2013 Mika Tuupola */
! function(a, b, c, d) {
  var e = a(b);
  a.fn.lazyload = function(f) {
    function g() {
      var b = 0;
      i.each(function() {
        var c = a(this);
        if (!j.skip_invisible || c.is(":visible"))
          if (a.abovethetop(this, j) || a.leftofbegin(this, j));
          else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
          if (++b > j.failure_limit) return !1
        } else c.trigger("appear"), b = 0
      })
    }
    var h, i = this,
      j = {
        threshold: 0,
        failure_limit: 0,
        event: "scroll",
        effect: "show",
        container: b,
        data_attribute: "original",
        skip_invisible: !0,
        appear: null,
        load: null,
        placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
      };
    return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() {
      return g()
    }), this.each(function() {
      var b = this,
        c = a(b);
      b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() {
        if (!this.loaded) {
          if (j.appear) {
            var d = i.length;
            j.appear.call(b, d, j)
          }
          a("<img />").bind("load", function() {
            var d = c.attr("data-" + j.data_attribute);
            c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
            var e = a.grep(i, function(a) {
              return !a.loaded
            });
            if (i = a(e), j.load) {
              var f = i.length;
              j.load.call(b, f, j)
            }
          }).attr("src", c.attr("data-" + j.data_attribute))
        }
      }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() {
        b.loaded || c.trigger("appear")
      })
    }), e.bind("resize", function() {
      g()
    }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
      b.originalEvent && b.originalEvent.persisted && i.each(function() {
        a(this).trigger("appear")
      })
    }), a(c).ready(function() {
      g()
    }), this
  }, a.belowthefold = function(c, f) {
    var g;
    return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
  }, a.rightoffold = function(c, f) {
    var g;
    return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
  }, a.abovethetop = function(c, f) {
    var g;
    return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
  }, a.leftofbegin = function(c, f) {
    var g;
    return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
  }, a.inviewport = function(b, c) {
    return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
  }, a.extend(a.expr[":"], {
    "below-the-fold": function(b) {
      return a.belowthefold(b, {
        threshold: 0
      })
    },
    "above-the-top": function(b) {
      return !a.belowthefold(b, {
        threshold: 0
      })
    },
    "right-of-screen": function(b) {
      return a.rightoffold(b, {
        threshold: 0
      })
    },
    "left-of-screen": function(b) {
      return !a.rightoffold(b, {
        threshold: 0
      })
    },
    "in-viewport": function(b) {
      return a.inviewport(b, {
        threshold: 0
      })
    },
    "above-the-fold": function(b) {
      return !a.belowthefold(b, {
        threshold: 0
      })
    },
    "right-of-fold": function(b) {
      return a.rightoffold(b, {
        threshold: 0
      })
    },
    "left-of-fold": function(b) {
      return !a.rightoffold(b, {
        threshold: 0
      })
    }
  })
}(jQuery, window, document);

/**
 * Single Page Nav Plugin
 * Copyright (c) 2013 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.1.0
 */

// Utility
if (typeof Object.create !== 'function') {
  Object.create = function(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}

(function($, window, document, undefined) {
  "use strict";

  var SinglePageNav = {

    init: function(options, container) {

      this.options = $.extend({}, $.fn.singlePageNav.defaults, options);

      this.container = container;
      this.$container = $(container);
      this.$links = this.$container.find('a');

      if (this.options.filter !== '') {
        this.$links = this.$links.filter(this.options.filter);
      }

      this.$window = $(window);
      this.$htmlbody = $('html, body');

      this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));

      this.didScroll = false;
      this.checkPosition();
      this.setTimer();
    },

    handleClick: function(e) {
      var self = this,
        link = e.currentTarget,
        $elem = $(link.hash);

      e.preventDefault();

      if ($elem.length) { // Make sure the target elem exists


        // Prevent active link from cycling during the scroll
        self.clearTimer();

        // Before scrolling starts
        if (typeof self.options.beforeStart === 'function') {
          self.options.beforeStart();
        }

        self.setActiveLink(link.hash);

        self.scrollTo($elem, function() {

          if (self.options.updateHash) {
            document.location.hash = link.hash;
          }

          self.setTimer();

          // After scrolling ends
          if (typeof self.options.onComplete === 'function') {
            self.options.onComplete();
          }
        });
      }
    },

    scrollTo: function($elem, callback) {
      var self = this;
      var target = self.getCoords($elem).top;
      var called = false;

      self.$htmlbody.stop().animate({
        scrollTop: target
      }, {
        duration: self.options.speed,
        easing: self.options.easing,
        complete: function() {
          if (typeof callback === 'function' && !called) {
            callback();
          }
          called = true;
        }
      });
    },

    setTimer: function() {
      var self = this;

      self.$window.on('scroll.singlePageNav', function() {
        self.didScroll = true;
      });

      self.timer = setInterval(function() {
        if (self.didScroll) {
          self.didScroll = false;
          self.checkPosition();
        }
      }, 250);
    },

    clearTimer: function() {
      clearInterval(this.timer);
      this.$window.off('scroll.singlePageNav');
      this.didScroll = false;
    },

    // Check the scroll position and set the active section
    checkPosition: function() {
      var scrollPos = this.$window.scrollTop();
      var currentSection = this.getCurrentSection(scrollPos);
      this.setActiveLink(currentSection);
    },

    getCoords: function($elem) {
      return {
        top: Math.round($elem.offset().top) - this.options.offset
      };
    },

    setActiveLink: function(href) {
      var $activeLink = this.$container.find("a[href='" + href + "']");

      if (!$activeLink.hasClass(this.options.currentClass)) {
        this.$links.removeClass(this.options.currentClass);
        $activeLink.addClass(this.options.currentClass);
      }
    },

    getCurrentSection: function(scrollPos) {
      var i, hash, coords, section;

      for (i = 0; i < this.$links.length; i++) {
        hash = this.$links[i].hash;

        if ($(hash).length) {
          coords = this.getCoords($(hash));

          if (scrollPos >= coords.top - this.options.threshold) {
            section = hash;
          }
        }
      }

      // The current section or the first link
      return section || this.$links[0].hash;
    }
  };

  $.fn.singlePageNav = function(options) {
    return this.each(function() {
      var singlePageNav = Object.create(SinglePageNav);
      singlePageNav.init(options, this);
    });
  };

  $.fn.singlePageNav.defaults = {
    offset: 0,
    threshold: 120,
    speed: 400,
    currentClass: 'current',
    easing: 'swing',
    updateHash: false,
    filter: '',
    onComplete: false,
    beforeStart: false
  };

})(jQuery, window, document);

/*
 * Inline Form Validation Engine 2.6.2, jQuery plugin
 *
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 *
 * 2.0 Rewrite by Olivier Refalo
 * http://www.crionics.com
 *
 * Form validation engine allowing custom regex rules to be added.
 * Licensed under the MIT License
 */
(function($) {

  "use strict";

  var methods = {

    /**
     * Kind of the constructor, called before any action
     * @param {Map} user options
     */
    init: function(options) {
      var form = this;
      if (!form.data('jqv') || form.data('jqv') == null) {
        options = methods._saveOptions(form, options);
        // bind all formError elements to close on click
        $(document).on("click", ".formError", function() {
          $(this).fadeOut(150, function() {
            // remove prompt once invisible
            $(this).parent('.formErrorOuter').remove();
            $(this).remove();
          });
        });
      }
      return this;
    },
    /**
     * Attachs jQuery.validationEngine to form.submit and field.blur events
     * Takes an optional params: a list of options
     * ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
     */
    attach: function(userOptions) {

      var form = this;
      var options;

      if (userOptions)
        options = methods._saveOptions(form, userOptions);
      else
        options = form.data('jqv');

      options.validateAttribute = (form.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
      if (options.binded) {

        // delegate fields
        form.on(options.validationEventTrigger, "[" + options.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
        form.on("click", "[" + options.validateAttribute + "*=validate][type=checkbox],[" + options.validateAttribute + "*=validate][type=radio]", methods._onFieldEvent);
        form.on(options.validationEventTrigger, "[" + options.validateAttribute + "*=validate][class*=datepicker]", {
          "delay": 300
        }, methods._onFieldEvent);
      }
      if (options.autoPositionUpdate) {
        $(window).bind("resize", {
          "noAnimation": true,
          "formElem": form
        }, methods.updatePromptsPosition);
      }
      form.on("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
      form.removeData('jqv_submitButton');

      // bind form.submit
      form.on("submit", methods._onSubmitEvent);
      return this;
    },
    /**
     * Unregisters any bindings that may point to jQuery.validaitonEngine
     */
    detach: function() {

      var form = this;
      var options = form.data('jqv');

      // unbind fields
      form.find("[" + options.validateAttribute + "*=validate]").not("[type=checkbox]").off(options.validationEventTrigger, methods._onFieldEvent);
      form.find("[" + options.validateAttribute + "*=validate][type=checkbox],[class*=validate][type=radio]").off("click", methods._onFieldEvent);

      // unbind form.submit
      form.off("submit", methods.onAjaxFormComplete);

      // unbind form.submit
      form.die("submit", methods.onAjaxFormComplete);
      form.removeData('jqv');

      form.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
      form.removeData('jqv_submitButton');

      if (options.autoPositionUpdate)
        $(window).unbind("resize", methods.updatePromptsPosition);

      return this;
    },
    /**
     * Validates either a form or a list of fields, shows prompts accordingly.
     * Note: There is no ajax form validation with this method, only field ajax validation are evaluated
     *
     * @return true if the form validates, false if it fails
     */
    validate: function() {
      var element = $(this);
      var valid = null;

      if ((element.is("form") || element.hasClass("validationEngineContainer")) && !element.hasClass('validating')) {
        element.addClass('validating');
        var options = element.data('jqv');
        var valid = methods._validateFields(this);

        // If the form doesn't validate, clear the 'validating' class before the user has a chance to submit again
        setTimeout(function() {
          element.removeClass('validating');
        }, 100);
        if (valid && options.onSuccess) {
          options.onSuccess();
        } else if (!valid && options.onFailure) {
          options.onFailure();
        }
      } else if (element.is('form') || element.hasClass('validationEngineContainer')) {
        element.removeClass('validating');
      } else {
        // field validation
        var form = element.closest('form, .validationEngineContainer'),
          options = (form.data('jqv')) ? form.data('jqv') : $.validationEngine.defaults,
          valid = methods._validateField(element, options);

        if (valid && options.onFieldSuccess)
          options.onFieldSuccess();
        else if (options.onFieldFailure && options.InvalidFields.length > 0) {
          options.onFieldFailure();
        }
      }
      if (options.onValidationComplete) {
        // !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
        return !!options.onValidationComplete(form, valid);
      }
      return valid;
    },
    /**
     *  Redraw prompts position, useful when you change the DOM state when validating
     */
    updatePromptsPosition: function(event) {

      if (event && this == window) {
        var form = event.data.formElem;
        var noAnimation = event.data.noAnimation;
      } else
        var form = $(this.closest('form, .validationEngineContainer'));

      var options = form.data('jqv');
      // No option, take default one
      form.find('[' + options.validateAttribute + '*=validate]').not(":disabled").each(function() {
        var field = $(this);
        if (options.prettySelect && field.is(":hidden"))
          field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
        var prompt = methods._getPrompt(field);
        var promptText = $(prompt).find(".formErrorContent").html();

        if (prompt)
          methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
      });
      return this;
    },
    /**
     * Displays a prompt on a element.
     * Note that the element needs an id!
     *
     * @param {String} promptText html text to display type
     * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
     * @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
     */
    showPrompt: function(promptText, type, promptPosition, showArrow) {
      var form = this.closest('form, .validationEngineContainer');
      var options = form.data('jqv');
      // No option, take default one
      if (!options)
        options = methods._saveOptions(this, options);
      if (promptPosition)
        options.promptPosition = promptPosition;
      options.showArrow = showArrow == true;

      methods._showPrompt(this, promptText, type, false, options);
      return this;
    },
    /**
     * Closes form error prompts, CAN be invidual
     */
    hide: function() {
      var form = $(this).closest('form, .validationEngineContainer');
      var options = form.data('jqv');
      var fadeDuration = (options && options.fadeDuration) ? options.fadeDuration : 0.3;
      var closingtag;

      if ($(this).is("form") || $(this).hasClass("validationEngineContainer")) {
        closingtag = "parentForm" + methods._getClassName($(this).attr("id"));
      } else {
        closingtag = methods._getClassName($(this).attr("id")) + "formError";
      }
      $('.' + closingtag).fadeTo(fadeDuration, 0.3, function() {
        $(this).parent('.formErrorOuter').remove();
        $(this).remove();
      });
      return this;
    },
    /**
     * Closes all error prompts on the page
     */
    hideAll: function() {

      var form = this;
      var options = form.data('jqv');
      var duration = options ? options.fadeDuration : 300;
      $('.formError').fadeTo(duration, 300, function() {
        $(this).parent('.formErrorOuter').remove();
        $(this).remove();
      });
      return this;
    },
    /**
     * Typically called when user exists a field using tab or a mouse click, triggers a field
     * validation
     */
    _onFieldEvent: function(event) {
      var field = $(this);
      var form = field.closest('form, .validationEngineContainer');
      var options = form.data('jqv');
      options.eventTrigger = "field";
      // validate the current field
      window.setTimeout(function() {
        methods._validateField(field, options);
        if (options.InvalidFields.length == 0 && options.onFieldSuccess) {
          options.onFieldSuccess();
        } else if (options.InvalidFields.length > 0 && options.onFieldFailure) {
          options.onFieldFailure();
        }
      }, (event.data) ? event.data.delay : 0);

    },
    /**
     * Called when the form is submited, shows prompts accordingly
     *
     * @param {jqObject}
     *            form
     * @return false if form submission needs to be cancelled
     */
    _onSubmitEvent: function() {
      var form = $(this);
      var options = form.data('jqv');

      //check if it is trigger from skipped button
      if (form.data("jqv_submitButton")) {
        var submitButton = $("#" + form.data("jqv_submitButton"));
        if (submitButton) {
          if (submitButton.length > 0) {
            if (submitButton.hasClass("validate-skip") || submitButton.attr("data-validation-engine-skip") == "true")
              return true;
          }
        }
      }

      options.eventTrigger = "submit";

      // validate each field
      // (- skip field ajax validation, not necessary IF we will perform an ajax form validation)
      var r = methods._validateFields(form);

      if (r && options.ajaxFormValidation) {
        methods._validateFormWithAjax(form, options);
        // cancel form auto-submission - process with async call onAjaxFormComplete
        return false;
      }

      if (options.onValidationComplete) {
        // !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
        return !!options.onValidationComplete(form, r);
      }
      return r;
    },
    /**
     * Return true if the ajax field validations passed so far
     * @param {Object} options
     * @return true, is all ajax validation passed so far (remember ajax is async)
     */
    _checkAjaxStatus: function(options) {
      var status = true;
      $.each(options.ajaxValidCache, function(key, value) {
        if (!value) {
          status = false;
          // break the each
          return false;
        }
      });
      return status;
    },

    /**
     * Return true if the ajax field is validated
     * @param {String} fieldid
     * @param {Object} options
     * @return true, if validation passed, false if false or doesn't exist
     */
    _checkAjaxFieldStatus: function(fieldid, options) {
      return options.ajaxValidCache[fieldid] == true;
    },
    /**
     * Validates form fields, shows prompts accordingly
     *
     * @param {jqObject}
     *            form
     * @param {skipAjaxFieldValidation}
     *            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
     *
     * @return true if form is valid, false if not, undefined if ajax form validation is done
     */
    _validateFields: function(form) {
      var options = form.data('jqv');

      // this variable is set to true if an error is found
      var errorFound = false;

      // Trigger hook, start validation
      form.trigger("jqv.form.validating");
      // first, evaluate status of non ajax fields
      var first_err = null;
      form.find('[' + options.validateAttribute + '*=validate]').not(":disabled").each(function() {
        var field = $(this);
        var names = [];
        if ($.inArray(field.attr('name'), names) < 0) {
          errorFound |= methods._validateField(field, options);
          if (errorFound && first_err == null)
            if (field.is(":hidden") && options.prettySelect)
              first_err = field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
            else
              first_err = field;
          if (options.doNotShowAllErrosOnSubmit)
            return false;
          names.push(field.attr('name'));

          //if option set, stop checking validation rules after one error is found
          if (options.showOneMessage == true && errorFound) {
            return false;
          }
        }
      });

      // second, check to see if all ajax calls completed ok
      // errorFound |= !methods._checkAjaxStatus(options);

      // third, check status and scroll the container accordingly
      form.trigger("jqv.form.result", [errorFound]);

      if (errorFound) {
        if (options.scroll) {
          var destination = first_err.offset().top;
          var fixleft = first_err.offset().left;

          //prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
          var positionType = options.promptPosition;
          if (typeof(positionType) == 'string' && positionType.indexOf(":") != -1)
            positionType = positionType.substring(0, positionType.indexOf(":"));

          if (positionType != "bottomRight" && positionType != "bottomLeft") {
            var prompt_err = methods._getPrompt(first_err);
            if (prompt_err) {
              destination = prompt_err.offset().top;
            }
          }

          // Offset the amount the page scrolls by an amount in px to accomodate fixed elements at top of page
          if (options.scrollOffset) {
            destination -= options.scrollOffset;
          }

          // get the position of the first error, there should be at least one, no need to check this
          //var destination = form.find(".formError:not('.greenPopup'):first").offset().top;
          if (options.isOverflown) {
            var overflowDIV = $(options.overflownDIV);
            if (!overflowDIV.length) return false;
            var scrollContainerScroll = overflowDIV.scrollTop();
            var scrollContainerPos = -parseInt(overflowDIV.offset().top);

            destination += scrollContainerScroll + scrollContainerPos - 5;
            var scrollContainer = $(options.overflownDIV + ":not(:animated)");

            scrollContainer.animate({
              scrollTop: destination
            }, 1100, function() {
              if (options.focusFirstField) first_err.focus();
            });

          } else {
            $("html, body").animate({
              scrollTop: destination
            }, 1100, function() {
              if (options.focusFirstField) first_err.focus();
            });
            $("html, body").animate({
              scrollLeft: fixleft
            }, 1100)
          }

        } else if (options.focusFirstField)
          first_err.focus();
        return false;
      }
      return true;
    },
    /**
     * This method is called to perform an ajax form validation.
     * During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
     *
     * @param {jqObject} form
     * @param {Map} options
     */
    _validateFormWithAjax: function(form, options) {

      var data = form.serialize();
      var type = (options.ajaxFormValidationMethod) ? options.ajaxFormValidationMethod : "GET";
      var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
      var dataType = (options.dataType) ? options.dataType : "json";
      $.ajax({
        type: type,
        url: url,
        cache: false,
        dataType: dataType,
        data: data,
        form: form,
        methods: methods,
        options: options,
        beforeSend: function() {
          return options.onBeforeAjaxFormValidation(form, options);
        },
        error: function(data, transport) {
          methods._ajaxError(data, transport);
        },
        success: function(json) {
          if ((dataType == "json") && (json !== true)) {
            // getting to this case doesn't necessary means that the form is invalid
            // the server may return green or closing prompt actions
            // this flag helps figuring it out
            var errorInForm = false;
            for (var i = 0; i < json.length; i++) {
              var value = json[i];

              var errorFieldId = value[0];
              var errorField = $($("#" + errorFieldId)[0]);

              // make sure we found the element
              if (errorField.length == 1) {

                // promptText or selector
                var msg = value[2];
                // if the field is valid
                if (value[1] == true) {

                  if (msg == "" || !msg) {
                    // if for some reason, status==true and error="", just close the prompt
                    methods._closePrompt(errorField);
                  } else {
                    // the field is valid, but we are displaying a green prompt
                    if (options.allrules[msg]) {
                      var txt = options.allrules[msg].alertTextOk;
                      if (txt)
                        msg = txt;
                    }
                    if (options.showPrompts) methods._showPrompt(errorField, msg, "pass", false, options, true);
                  }
                } else {
                  // the field is invalid, show the red error prompt
                  errorInForm |= true;
                  if (options.allrules[msg]) {
                    var txt = options.allrules[msg].alertText;
                    if (txt)
                      msg = txt;
                  }
                  if (options.showPrompts) methods._showPrompt(errorField, msg, "", false, options, true);
                }
              }
            }
            options.onAjaxFormComplete(!errorInForm, form, json, options);
          } else
            options.onAjaxFormComplete(true, form, json, options);

        }
      });

    },
    /**
     * Validates field, shows prompts accordingly
     *
     * @param {jqObject}
     *            field
     * @param {Array[String]}
     *            field's validation rules
     * @param {Map}
     *            user options
     * @return false if field is valid (It is inversed for *fields*, it return false on validate and true on errors.)
     */
    _validateField: function(field, options, skipAjaxValidation) {
      if (!field.attr("id")) {
        field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
        ++$.validationEngine.fieldIdCounter;
      }

      if (!options.validateNonVisibleFields && (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden")))
        return false;

      var rulesParsing = field.attr(options.validateAttribute);
      var getRules = /validate\[(.*)\]/.exec(rulesParsing);

      if (!getRules)
        return false;
      var str = getRules[1];
      var rules = str.split(/\[|,|\]/);

      // true if we ran the ajax validation, tells the logic to stop messing with prompts
      var isAjaxValidator = false;
      var fieldName = field.attr("name");
      var promptText = "";
      var promptType = "";
      var required = false;
      var limitErrors = false;
      options.isError = false;
      options.showArrow = true;

      // If the programmer wants to limit the amount of error messages per field,
      if (options.maxErrorsPerField > 0) {
        limitErrors = true;
      }

      var form = $(field.closest("form, .validationEngineContainer"));
      // Fix for adding spaces in the rules
      for (var i = 0; i < rules.length; i++) {
        rules[i] = rules[i].replace(" ", "");
        // Remove any parsing errors
        if (rules[i] === '') {
          delete rules[i];
        }
      }

      for (var i = 0, field_errors = 0; i < rules.length; i++) {

        // If we are limiting errors, and have hit the max, break
        if (limitErrors && field_errors >= options.maxErrorsPerField) {
          // If we haven't hit a required yet, check to see if there is one in the validation rules for this
          // field and that it's index is greater or equal to our current index
          if (!required) {
            var have_required = $.inArray('required', rules);
            required = (have_required != -1 && have_required >= i);
          }
          break;
        }


        var errorMsg = undefined;
        switch (rules[i]) {

          case "required":
            required = true;
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
            break;
          case "custom":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
            break;
          case "groupRequired":
            // Check is its the first of group, if not, reload validation with first field
            // AND continue normal validation on present field
            var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
            var firstOfGroup = form.find(classGroup).eq(0);
            if (firstOfGroup[0] != field[0]) {

              methods._validateField(firstOfGroup, options, skipAjaxValidation);
              options.showArrow = true;

            }
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
            if (errorMsg) required = true;
            options.showArrow = false;
            break;
          case "ajax":
            // AJAX defaults to returning it's loading message
            errorMsg = methods._ajax(field, rules, i, options);
            if (errorMsg) {
              promptType = "load";
            }
            break;
          case "minSize":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
            break;
          case "maxSize":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
            break;
          case "min":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
            break;
          case "max":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
            break;
          case "past":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._past);
            break;
          case "future":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._future);
            break;
          case "dateRange":
            var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
            options.firstOfGroup = form.find(classGroup).eq(0);
            options.secondOfGroup = form.find(classGroup).eq(1);

            //if one entry out of the pair has value then proceed to run through validation
            if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
              errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._dateRange);
            }
            if (errorMsg) required = true;
            options.showArrow = false;
            break;

          case "dateTimeRange":
            var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
            options.firstOfGroup = form.find(classGroup).eq(0);
            options.secondOfGroup = form.find(classGroup).eq(1);

            //if one entry out of the pair has value then proceed to run through validation
            if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
              errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._dateTimeRange);
            }
            if (errorMsg) required = true;
            options.showArrow = false;
            break;
          case "maxCheckbox":
            field = $(form.find("input[name='" + fieldName + "']"));
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
            break;
          case "minCheckbox":
            field = $(form.find("input[name='" + fieldName + "']"));
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
            break;
          case "equals":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
            break;
          case "funcCall":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
            break;
          case "creditCard":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
            break;
          case "condRequired":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);
            if (errorMsg !== undefined) {
              required = true;
            }
            break;

          default:
        }

        var end_validation = false;

        // If we were passed back an message object, check what the status was to determine what to do
        if (typeof errorMsg == "object") {
          switch (errorMsg.status) {
            case "_break":
              end_validation = true;
              break;
              // If we have an error message, set errorMsg to the error message
            case "_error":
              errorMsg = errorMsg.message;
              break;
              // If we want to throw an error, but not show a prompt, return early with true
            case "_error_no_prompt":
              return true;
              break;
              // Anything else we continue on
            default:
              break;
          }
        }

        // If it has been specified that validation should end now, break
        if (end_validation) {
          break;
        }

        // If we have a string, that means that we have an error, so add it to the error message.
        if (typeof errorMsg == 'string') {
          promptText += errorMsg + "<br/>";
          options.isError = true;
          field_errors++;
        }
      }
      // If the rules required is not added, an empty field is not validated
      if (!required && !(field.val()) && field.val().length < 1) options.isError = false;

      // Hack for radio/checkbox group button, the validation go into the
      // first radio/checkbox of the group
      var fieldType = field.prop("type");
      var positionType = field.data("promptPosition") || options.promptPosition;

      if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").size() > 1) {
        if (positionType === 'inline') {
          field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:last"));
        } else {
          field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
        }
        options.showArrow = false;
      }

      if (field.is(":hidden") && options.prettySelect) {
        field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
      }

      if (options.isError && options.showPrompts) {
        methods._showPrompt(field, promptText, promptType, false, options);
      } else {
        if (!isAjaxValidator) methods._closePrompt(field);
      }

      if (!isAjaxValidator) {
        field.trigger("jqv.field.result", [field, options.isError, promptText]);
      }

      /* Record error */
      var errindex = $.inArray(field[0], options.InvalidFields);
      if (errindex == -1) {
        if (options.isError)
          options.InvalidFields.push(field[0]);
      } else if (!options.isError) {
        options.InvalidFields.splice(errindex, 1);
      }

      methods._handleStatusCssClasses(field, options);

      /* run callback function for each field */
      if (options.isError && options.onFieldFailure)
        options.onFieldFailure(field);

      if (!options.isError && options.onFieldSuccess)
        options.onFieldSuccess(field);

      return options.isError;
    },
    /**
     * Handling css classes of fields indicating result of validation
     *
     * @param {jqObject}
     *            field
     * @param {Array[String]}
     *            field's validation rules
     * @private
     */
    _handleStatusCssClasses: function(field, options) {
      /* remove all classes */
      if (options.addSuccessCssClassToField)
        field.removeClass(options.addSuccessCssClassToField);

      if (options.addFailureCssClassToField)
        field.removeClass(options.addFailureCssClassToField);

      /* Add classes */
      if (options.addSuccessCssClassToField && !options.isError)
        field.addClass(options.addSuccessCssClassToField);

      if (options.addFailureCssClassToField && options.isError)
        field.addClass(options.addFailureCssClassToField);
    },

    /********************
     * _getErrorMessage
     *
     * @param form
     * @param field
     * @param rule
     * @param rules
     * @param i
     * @param options
     * @param originalValidationMethod
     * @return {*}
     * @private
     */
    _getErrorMessage: function(form, field, rule, rules, i, options, originalValidationMethod) {
      // If we are using the custon validation type, build the index for the rule.
      // Otherwise if we are doing a function call, make the call and return the object
      // that is passed back.
      var rule_index = jQuery.inArray(rule, rules);
      if (rule === "custom" || rule === "funcCall") {
        var custom_validation_type = rules[rule_index + 1];
        rule = rule + "[" + custom_validation_type + "]";
        // Delete the rule from the rules array so that it doesn't try to call the
        // same rule over again
        delete(rules[rule_index]);
      }
      // Change the rule to the composite rule, if it was different from the original
      var alteredRule = rule;


      var element_classes = (field.attr("data-validation-engine")) ? field.attr("data-validation-engine") : field.attr("class");
      var element_classes_array = element_classes.split(" ");

      // Call the original validation method. If we are dealing with dates or checkboxes, also pass the form
      var errorMsg;
      if (rule == "future" || rule == "past" || rule == "maxCheckbox" || rule == "minCheckbox") {
        errorMsg = originalValidationMethod(form, field, rules, i, options);
      } else {
        errorMsg = originalValidationMethod(field, rules, i, options);
      }

      // If the original validation method returned an error and we have a custom error message,
      // return the custom message instead. Otherwise return the original error message.
      if (errorMsg != undefined) {
        var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, alteredRule, options);
        if (custom_message) errorMsg = custom_message;
      }
      return errorMsg;

    },
    _getCustomErrorMessage: function(field, classes, rule, options) {
      var custom_message = false;
      var validityProp = methods._validityProp[rule];
      // If there is a validityProp for this rule, check to see if the field has an attribute for it
      if (validityProp != undefined) {
        custom_message = field.attr("data-errormessage-" + validityProp);
        // If there was an error message for it, return the message
        if (custom_message != undefined)
          return custom_message;
      }
      custom_message = field.attr("data-errormessage");
      // If there is an inline custom error message, return it
      if (custom_message != undefined)
        return custom_message;
      var id = '#' + field.attr("id");
      // If we have custom messages for the element's id, get the message for the rule from the id.
      // Otherwise, if we have custom messages for the element's classes, use the first class message we find instead.
      if (typeof options.custom_error_messages[id] != "undefined" &&
        typeof options.custom_error_messages[id][rule] != "undefined") {
        custom_message = options.custom_error_messages[id][rule]['message'];
      } else if (classes.length > 0) {
        for (var i = 0; i < classes.length && classes.length > 0; i++) {
          var element_class = "." + classes[i];
          if (typeof options.custom_error_messages[element_class] != "undefined" &&
            typeof options.custom_error_messages[element_class][rule] != "undefined") {
            custom_message = options.custom_error_messages[element_class][rule]['message'];
            break;
          }
        }
      }
      if (!custom_message &&
        typeof options.custom_error_messages[rule] != "undefined" &&
        typeof options.custom_error_messages[rule]['message'] != "undefined") {
        custom_message = options.custom_error_messages[rule]['message'];
      }
      return custom_message;
    },
    _validityProp: {
      "required": "value-missing",
      "custom": "custom-error",
      "groupRequired": "value-missing",
      "ajax": "custom-error",
      "minSize": "range-underflow",
      "maxSize": "range-overflow",
      "min": "range-underflow",
      "max": "range-overflow",
      "past": "type-mismatch",
      "future": "type-mismatch",
      "dateRange": "type-mismatch",
      "dateTimeRange": "type-mismatch",
      "maxCheckbox": "range-overflow",
      "minCheckbox": "range-underflow",
      "equals": "pattern-mismatch",
      "funcCall": "custom-error",
      "creditCard": "pattern-mismatch",
      "condRequired": "value-missing"
    },
    /**
     * Required validation
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @param {bool} condRequired flag when method is used for internal purpose in condRequired check
     * @return an error string if validation failed
     */
    _required: function(field, rules, i, options, condRequired) {
      switch (field.prop("type")) {
        case "text":
        case "password":
        case "textarea":
        case "file":
        case "select-one":
        case "select-multiple":
        default:
          var field_val = $.trim(field.val());
          var dv_placeholder = $.trim(field.attr("data-validation-placeholder"));
          var placeholder = $.trim(field.attr("placeholder"));
          if (
            (!field_val) || (dv_placeholder && field_val == dv_placeholder) || (placeholder && field_val == placeholder)
          ) {
            return options.allrules[rules[i]].alertText;
          }
          break;
        case "radio":
        case "checkbox":
          // new validation style to only check dependent field
          if (condRequired) {
            if (!field.attr('checked')) {
              return options.allrules[rules[i]].alertTextCheckboxMultiple;
            }
            break;
          }
          // old validation style
          var form = field.closest("form, .validationEngineContainer");
          var name = field.attr("name");
          if (form.find("input[name='" + name + "']:checked").size() == 0) {
            if (form.find("input[name='" + name + "']:visible").size() == 1)
              return options.allrules[rules[i]].alertTextCheckboxe;
            else
              return options.allrules[rules[i]].alertTextCheckboxMultiple;
          }
          break;
      }
    },
    /**
     * Validate that 1 from the group field is required
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _groupRequired: function(field, rules, i, options) {
      var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
      var isValid = false;
      // Check all fields from the group
      field.closest("form, .validationEngineContainer").find(classGroup).each(function() {
        if (!methods._required($(this), rules, i, options)) {
          isValid = true;
          return false;
        }
      });

      if (!isValid) {
        return options.allrules[rules[i]].alertText;
      }
    },
    /**
     * Validate rules
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _custom: function(field, rules, i, options) {
      var customRule = rules[i + 1];
      var rule = options.allrules[customRule];
      var fn;
      if (!rule) {
        alert("jqv:custom rule not found - " + customRule);
        return;
      }

      if (rule["regex"]) {
        var ex = rule.regex;
        if (!ex) {
          alert("jqv:custom regex not found - " + customRule);
          return;
        }
        var pattern = new RegExp(ex);

        if (!pattern.test(field.val())) return options.allrules[customRule].alertText;

      } else if (rule["func"]) {
        fn = rule["func"];

        if (typeof(fn) !== "function") {
          alert("jqv:custom parameter 'function' is no function - " + customRule);
          return;
        }

        if (!fn(field, rules, i, options))
          return options.allrules[customRule].alertText;
      } else {
        alert("jqv:custom type not allowed " + customRule);
        return;
      }
    },
    /**
     * Validate custom function outside of the engine scope
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _funcCall: function(field, rules, i, options) {
      var functionName = rules[i + 1];
      var fn;
      if (functionName.indexOf('.') > -1) {
        var namespaces = functionName.split('.');
        var scope = window;
        while (namespaces.length) {
          scope = scope[namespaces.shift()];
        }
        fn = scope;
      } else
        fn = window[functionName] || options.customFunctions[functionName];
      if (typeof(fn) == 'function')
        return fn(field, rules, i, options);

    },
    /**
     * Field match
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _equals: function(field, rules, i, options) {
      var equalsField = rules[i + 1];

      if (field.val() != $("#" + equalsField).val())
        return options.allrules.equals.alertText;
    },
    /**
     * Check the maximum size (in characters)
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _maxSize: function(field, rules, i, options) {
      var max = rules[i + 1];
      var len = field.val().length;

      if (len > max) {
        var rule = options.allrules.maxSize;
        return rule.alertText + max + rule.alertText2;
      }
    },
    /**
     * Check the minimum size (in characters)
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _minSize: function(field, rules, i, options) {
      var min = rules[i + 1];
      var len = field.val().length;

      if (len < min) {
        var rule = options.allrules.minSize;
        return rule.alertText + min + rule.alertText2;
      }
    },
    /**
     * Check number minimum value
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _min: function(field, rules, i, options) {
      var min = parseFloat(rules[i + 1]);
      var len = parseFloat(field.val());

      if (len < min) {
        var rule = options.allrules.min;
        if (rule.alertText2) return rule.alertText + min + rule.alertText2;
        return rule.alertText + min;
      }
    },
    /**
     * Check number maximum value
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _max: function(field, rules, i, options) {
      var max = parseFloat(rules[i + 1]);
      var len = parseFloat(field.val());

      if (len > max) {
        var rule = options.allrules.max;
        if (rule.alertText2) return rule.alertText + max + rule.alertText2;
        //orefalo: to review, also do the translations
        return rule.alertText + max;
      }
    },
    /**
     * Checks date is in the past
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _past: function(form, field, rules, i, options) {

      var p = rules[i + 1];
      var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
      var pdate;

      if (p.toLowerCase() == "now") {
        pdate = new Date();
      } else if (undefined != fieldAlt.val()) {
        if (fieldAlt.is(":disabled"))
          return;
        pdate = methods._parseDate(fieldAlt.val());
      } else {
        pdate = methods._parseDate(p);
      }
      var vdate = methods._parseDate(field.val());

      if (vdate > pdate) {
        var rule = options.allrules.past;
        if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
        return rule.alertText + methods._dateToString(pdate);
      }
    },
    /**
     * Checks date is in the future
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _future: function(form, field, rules, i, options) {

      var p = rules[i + 1];
      var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
      var pdate;

      if (p.toLowerCase() == "now") {
        pdate = new Date();
      } else if (undefined != fieldAlt.val()) {
        if (fieldAlt.is(":disabled"))
          return;
        pdate = methods._parseDate(fieldAlt.val());
      } else {
        pdate = methods._parseDate(p);
      }
      var vdate = methods._parseDate(field.val());

      if (vdate < pdate) {
        var rule = options.allrules.future;
        if (rule.alertText2)
          return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
        return rule.alertText + methods._dateToString(pdate);
      }
    },
    /**
     * Checks if valid date
     *
     * @param {string} date string
     * @return a bool based on determination of valid date
     */
    _isDate: function(value) {
      var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
      return dateRegEx.test(value);
    },
    /**
     * Checks if valid date time
     *
     * @param {string} date string
     * @return a bool based on determination of valid date time
     */
    _isDateTime: function(value) {
      var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
      return dateTimeRegEx.test(value);
    },
    //Checks if the start date is before the end date
    //returns true if end is later than start
    _dateCompare: function(start, end) {
      return (new Date(start.toString()) < new Date(end.toString()));
    },
    /**
     * Checks date range
     *
     * @param {jqObject} first field name
     * @param {jqObject} second field name
     * @return an error string if validation failed
     */
    _dateRange: function(field, rules, i, options) {
      //are not both populated
      if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      }

      //are not both dates
      if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      }

      //are both dates but range is off
      if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      }
    },
    /**
     * Checks date time range
     *
     * @param {jqObject} first field name
     * @param {jqObject} second field name
     * @return an error string if validation failed
     */
    _dateTimeRange: function(field, rules, i, options) {
      //are not both populated
      if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      }
      //are not both dates
      if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      }
      //are both dates but range is off
      if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      }
    },
    /**
     * Max number of checkbox selected
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _maxCheckbox: function(form, field, rules, i, options) {

      var nbCheck = rules[i + 1];
      var groupname = field.attr("name");
      var groupSize = form.find("input[name='" + groupname + "']:checked").size();
      if (groupSize > nbCheck) {
        options.showArrow = false;
        if (options.allrules.maxCheckbox.alertText2)
          return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
        return options.allrules.maxCheckbox.alertText;
      }
    },
    /**
     * Min number of checkbox selected
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _minCheckbox: function(form, field, rules, i, options) {

      var nbCheck = rules[i + 1];
      var groupname = field.attr("name");
      var groupSize = form.find("input[name='" + groupname + "']:checked").size();
      if (groupSize < nbCheck) {
        options.showArrow = false;
        return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
      }
    },
    /**
     * Checks that it is a valid credit card number according to the
     * Luhn checksum algorithm.
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _creditCard: function(field, rules, i, options) {
      //spaces and dashes may be valid characters, but must be stripped to calculate the checksum.
      var valid = false,
        cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');

      var numDigits = cardNumber.length;
      if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {

        var sum = 0,
          i = numDigits - 1,
          pos = 1,
          digit, luhn = new String();
        do {
          digit = parseInt(cardNumber.charAt(i));
          luhn += (pos++ % 2 == 0) ? digit * 2 : digit;
        } while (--i >= 0)

        for (i = 0; i < luhn.length; i++) {
          sum += parseInt(luhn.charAt(i));
        }
        valid = sum % 10 == 0;
      }
      if (!valid) return options.allrules.creditCard.alertText;
    },
    /**
     * Ajax field validation
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return nothing! the ajax validator handles the prompts itself
     */
    _ajax: function(field, rules, i, options) {

      var errorSelector = rules[i + 1];
      var rule = options.allrules[errorSelector];
      var extraData = rule.extraData;
      var extraDataDynamic = rule.extraDataDynamic;
      var data = {
        "fieldId": field.attr("id"),
        "fieldValue": field.val()
      };

      if (typeof extraData === "object") {
        $.extend(data, extraData);
      } else if (typeof extraData === "string") {
        var tempData = extraData.split("&");
        for (var i = 0; i < tempData.length; i++) {
          var values = tempData[i].split("=");
          if (values[0] && values[0]) {
            data[values[0]] = values[1];
          }
        }
      }

      if (extraDataDynamic) {
        var tmpData = [];
        var domIds = String(extraDataDynamic).split(",");
        for (var i = 0; i < domIds.length; i++) {
          var id = domIds[i];
          if ($(id).length) {
            var inputValue = field.closest("form, .validationEngineContainer").find(id).val();
            var keyValue = id.replace('#', '') + '=' + escape(inputValue);
            data[id.replace('#', '')] = inputValue;
          }
        }
      }

      // If a field change event triggered this we want to clear the cache for this ID
      if (options.eventTrigger == "field") {
        delete(options.ajaxValidCache[field.attr("id")]);
      }

      // If there is an error or if the the field is already validated, do not re-execute AJAX
      if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
        $.ajax({
          type: options.ajaxFormValidationMethod,
          url: rule.url,
          cache: false,
          dataType: "json",
          data: data,
          field: field,
          rule: rule,
          methods: methods,
          options: options,
          beforeSend: function() {},
          error: function(data, transport) {
            methods._ajaxError(data, transport);
          },
          success: function(json) {

            // asynchronously called on success, data is the json answer from the server
            var errorFieldId = json[0];
            //var errorField = $($("#" + errorFieldId)[0]);
            var errorField = $("#" + errorFieldId).eq(0);

            // make sure we found the element
            if (errorField.length == 1) {
              var status = json[1];
              // read the optional msg from the server
              var msg = json[2];
              if (!status) {
                // Houston we got a problem - display an red prompt
                options.ajaxValidCache[errorFieldId] = false;
                options.isError = true;

                // resolve the msg prompt
                if (msg) {
                  if (options.allrules[msg]) {
                    var txt = options.allrules[msg].alertText;
                    if (txt) {
                      msg = txt;
                    }
                  }
                } else
                  msg = rule.alertText;

                if (options.showPrompts) methods._showPrompt(errorField, msg, "", true, options);
              } else {
                options.ajaxValidCache[errorFieldId] = true;

                // resolves the msg prompt
                if (msg) {
                  if (options.allrules[msg]) {
                    var txt = options.allrules[msg].alertTextOk;
                    if (txt) {
                      msg = txt;
                    }
                  }
                } else
                  msg = rule.alertTextOk;

                if (options.showPrompts) {
                  // see if we should display a green prompt
                  if (msg)
                    methods._showPrompt(errorField, msg, "pass", true, options);
                  else
                    methods._closePrompt(errorField);
                }

                // If a submit form triggered this, we want to re-submit the form
                if (options.eventTrigger == "submit")
                  field.closest("form").submit();
              }
            }
            errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
          }
        });

        return rule.alertTextLoad;
      }
    },
    /**
     * Common method to handle ajax errors
     *
     * @param {Object} data
     * @param {Object} transport
     */
    _ajaxError: function(data, transport) {
      if (data.status == 0 && transport == null)
        alert("The page is not served from a server! ajax call failed");
      else if (typeof console != "undefined")
        console.log("Ajax error: " + data.status + " " + transport);
    },
    /**
     * date -> string
     *
     * @param {Object} date
     */
    _dateToString: function(date) {
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    },
    /**
     * Parses an ISO date
     * @param {String} d
     */
    _parseDate: function(d) {

      var dateParts = d.split("-");
      if (dateParts == d)
        dateParts = d.split("/");
      if (dateParts == d) {
        dateParts = d.split(".");
        return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
      }
      return new Date(dateParts[0], (dateParts[1] - 1), dateParts[2]);
    },
    /**
     * Builds or updates a prompt with the given information
     *
     * @param {jqObject} field
     * @param {String} promptText html text to display type
     * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
     * @param {boolean} ajaxed - use to mark fields than being validated with ajax
     * @param {Map} options user options
     */
    _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
      var prompt = methods._getPrompt(field);
      // The ajax submit errors are not see has an error in the form,
      // When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
      // Because no error was found befor submitting
      if (ajaxform) prompt = false;
      // Check that there is indded text
      if ($.trim(promptText)) {
        if (prompt)
          methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
        else
          methods._buildPrompt(field, promptText, type, ajaxed, options);
      }
    },
    /**
     * Builds and shades a prompt for the given field.
     *
     * @param {jqObject} field
     * @param {String} promptText html text to display type
     * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
     * @param {boolean} ajaxed - use to mark fields than being validated with ajax
     * @param {Map} options user options
     */
    _buildPrompt: function(field, promptText, type, ajaxed, options) {

      // create the prompt
      var prompt = $('<div>');
      prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
      // add a class name to identify the parent form of the prompt
      prompt.addClass("parentForm" + methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));
      prompt.addClass("formError");

      switch (type) {
        case "pass":
          prompt.addClass("greenPopup");
          break;
        case "load":
          prompt.addClass("blackPopup");
          break;
        default:
          /* it has error  */
          //alert("unknown popup type:"+type);
      }
      if (ajaxed)
        prompt.addClass("ajaxed");

      // create the prompt content
      var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);

      // determine position type
      var positionType = field.data("promptPosition") || options.promptPosition;

      // create the css arrow pointing at the field
      // note that there is no triangle on max-checkbox and radio
      if (options.showArrow) {
        var arrow = $('<div>').addClass("formErrorArrow");

        //prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
        if (typeof(positionType) == 'string') {
          var pos = positionType.indexOf(":");
          if (pos != -1)
            positionType = positionType.substring(0, pos);
        }

        switch (positionType) {
          case "bottomLeft":
          case "bottomRight":
            prompt.find(".formErrorContent").before(arrow);
            arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
            break;
          case "topLeft":
          case "topRight":
            arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
            prompt.append(arrow);
            break;
        }
      }
      // Add custom prompt class
      if (options.addPromptClass)
        prompt.addClass(options.addPromptClass);

      // Add custom prompt class defined in element
      var requiredOverride = field.attr('data-required-class');
      if (requiredOverride !== undefined) {
        prompt.addClass(requiredOverride);
      } else {
        if (options.prettySelect) {
          if ($('#' + field.attr('id')).next().is('select')) {
            var prettyOverrideClass = $('#' + field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');
            if (prettyOverrideClass !== undefined) {
              prompt.addClass(prettyOverrideClass);
            }
          }
        }
      }

      prompt.css({
        "opacity": 0
      });
      if (positionType === 'inline') {
        prompt.addClass("inline");
        if (typeof field.attr('data-prompt-target') !== 'undefined' && $('#' + field.attr('data-prompt-target')).length > 0) {
          prompt.appendTo($('#' + field.attr('data-prompt-target')));
        } else {
          field.after(prompt);
        }
      } else {
        field.before(prompt);
      }

      var pos = methods._calculatePosition(field, prompt, options);
      prompt.css({
        'position': positionType === 'inline' ? 'relative' : 'absolute',
        "top": pos.callerTopPosition,
        "left": pos.callerleftPosition,
        "marginTop": pos.marginTopSize,
        "opacity": 0
      }).data("callerField", field);


      if (options.autoHidePrompt) {
        setTimeout(function() {
          prompt.animate({
            "opacity": 0
          }, function() {
            prompt.closest('.formErrorOuter').remove();
            prompt.remove();
          });
        }, options.autoHideDelay);
      }
      return prompt.animate({
        "opacity": 0.87
      });
    },
    /**
     * Updates the prompt text field - the field for which the prompt
     * @param {jqObject} field
     * @param {String} promptText html text to display type
     * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
     * @param {boolean} ajaxed - use to mark fields than being validated with ajax
     * @param {Map} options user options
     */
    _updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {

      if (prompt) {
        if (typeof type !== "undefined") {
          if (type == "pass")
            prompt.addClass("greenPopup");
          else
            prompt.removeClass("greenPopup");

          if (type == "load")
            prompt.addClass("blackPopup");
          else
            prompt.removeClass("blackPopup");
        }
        if (ajaxed)
          prompt.addClass("ajaxed");
        else
          prompt.removeClass("ajaxed");

        prompt.find(".formErrorContent").html(promptText);

        var pos = methods._calculatePosition(field, prompt, options);
        var css = {
          "top": pos.callerTopPosition,
          "left": pos.callerleftPosition,
          "marginTop": pos.marginTopSize
        };

        if (noAnimation)
          prompt.css(css);
        else
          prompt.animate(css);
      }
    },
    /**
     * Closes the prompt associated with the given field
     *
     * @param {jqObject}
     *            field
     */
    _closePrompt: function(field) {
      var prompt = methods._getPrompt(field);
      if (prompt)
        prompt.fadeTo("fast", 0, function() {
          prompt.parent('.formErrorOuter').remove();
          prompt.remove();
        });
    },
    closePrompt: function(field) {
      return methods._closePrompt(field);
    },
    /**
     * Returns the error prompt matching the field if any
     *
     * @param {jqObject}
     *            field
     * @return undefined or the error prompt (jqObject)
     */
    _getPrompt: function(field) {
      var formId = $(field).closest('form, .validationEngineContainer').attr('id');
      var className = methods._getClassName(field.attr("id")) + "formError";
      var match = $("." + methods._escapeExpression(className) + '.parentForm' + formId)[0];
      if (match)
        return $(match);
    },
    /**
     * Returns the escapade classname
     *
     * @param {selector}
     *            className
     */
    _escapeExpression: function(selector) {
      return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
    },
    /**
     * returns true if we are in a RTLed document
     *
     * @param {jqObject} field
     */
    isRTL: function(field) {
      var $document = $(document);
      var $body = $('body');
      var rtl =
        (field && field.hasClass('rtl')) ||
        (field && (field.attr('dir') || '').toLowerCase() === 'rtl') ||
        $document.hasClass('rtl') ||
        ($document.attr('dir') || '').toLowerCase() === 'rtl' ||
        $body.hasClass('rtl') ||
        ($body.attr('dir') || '').toLowerCase() === 'rtl';
      return Boolean(rtl);
    },
    /**
     * Calculates prompt position
     *
     * @param {jqObject}
     *            field
     * @param {jqObject}
     *            the prompt
     * @param {Map}
     *            options
     * @return positions
     */
    _calculatePosition: function(field, promptElmt, options) {

      var promptTopPosition, promptleftPosition, marginTopSize;
      var fieldWidth = field.width();
      var fieldLeft = field.position().left;
      var fieldTop = field.position().top;
      var fieldHeight = field.height();
      var promptHeight = promptElmt.height();


      // is the form contained in an overflown container?
      promptTopPosition = promptleftPosition = 0;
      // compensation for the arrow
      marginTopSize = -promptHeight;


      //prompt positioning adjustment support
      //now you can adjust prompt position
      //usage: positionType:Xshift,Yshift
      //for example:
      //   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
      //   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
      //You can use +pixels, - pixels. If no sign is provided than + is default.
      var positionType = field.data("promptPosition") || options.promptPosition;
      var shift1 = "";
      var shift2 = "";
      var shiftX = 0;
      var shiftY = 0;
      if (typeof(positionType) == 'string') {
        //do we have any position adjustments ?
        if (positionType.indexOf(":") != -1) {
          shift1 = positionType.substring(positionType.indexOf(":") + 1);
          positionType = positionType.substring(0, positionType.indexOf(":"));

          //if any advanced positioning will be needed (percents or something else) - parser should be added here
          //for now we use simple parseInt()

          //do we have second parameter?
          if (shift1.indexOf(",") != -1) {
            shift2 = shift1.substring(shift1.indexOf(",") + 1);
            shift1 = shift1.substring(0, shift1.indexOf(","));
            shiftY = parseInt(shift2);
            if (isNaN(shiftY)) shiftY = 0;
          };

          shiftX = parseInt(shift1);
          if (isNaN(shift1)) shift1 = 0;

        };
      };


      switch (positionType) {
        default:
        case "topRight":
          promptleftPosition += fieldLeft + fieldWidth - 30;
          promptTopPosition += fieldTop;
          break;

        case "topLeft":
          promptTopPosition += fieldTop;
          promptleftPosition += fieldLeft;
          break;

        case "centerRight":
          promptTopPosition = fieldTop + 4;
          marginTopSize = 0;
          promptleftPosition = fieldLeft + field.outerWidth(true) + 5;
          break;
        case "centerLeft":
          promptleftPosition = fieldLeft - (promptElmt.width() + 2);
          promptTopPosition = fieldTop + 4;
          marginTopSize = 0;

          break;

        case "bottomLeft":
          promptTopPosition = fieldTop + field.height() + 5;
          marginTopSize = 0;
          promptleftPosition = fieldLeft;
          break;
        case "bottomRight":
          promptleftPosition = fieldLeft + fieldWidth - 30;
          promptTopPosition = fieldTop + field.height() + 5;
          marginTopSize = 0;
          break;
        case "inline":
          promptleftPosition = 0;
          promptTopPosition = 0;
          marginTopSize = 0;
      };



      //apply adjusments if any
      promptleftPosition += shiftX;
      promptTopPosition += shiftY;

      return {
        "callerTopPosition": promptTopPosition + "px",
        "callerleftPosition": promptleftPosition + "px",
        "marginTopSize": marginTopSize + "px"
      };
    },
    /**
     * Saves the user options and variables in the form.data
     *
     * @param {jqObject}
     *            form - the form where the user option should be saved
     * @param {Map}
     *            options - the user options
     * @return the user options (extended from the defaults)
     */
    _saveOptions: function(form, options) {

      // is there a language localisation ?
      if ($.validationEngineLanguage)
        var allRules = $.validationEngineLanguage.allRules;
      else
        $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
      // --- Internals DO NOT TOUCH or OVERLOAD ---
      // validation rules and i18
      $.validationEngine.defaults.allrules = allRules;

      var userOptions = $.extend(true, {}, $.validationEngine.defaults, options);

      form.data('jqv', userOptions);
      return userOptions;
    },

    /**
     * Removes forbidden characters from class name
     * @param {String} className
     */
    _getClassName: function(className) {
      if (className)
        return className.replace(/:/g, "_").replace(/\./g, "_");
    },
    /**
     * Escape special character for jQuery selector
     * http://totaldev.com/content/escaping-characters-get-valid-jquery-id
     * @param {String} selector
     */
    _jqSelector: function(str) {
      return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
    },
    /**
     * Conditionally required field
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     * user options
     * @return an error string if validation failed
     */
    _condRequired: function(field, rules, i, options) {
      var idx, dependingField;

      for (idx = (i + 1); idx < rules.length; idx++) {
        dependingField = jQuery("#" + rules[idx]).first();

        /* Use _required for determining wether dependingField has a value.
         * There is logic there for handling all field types, and default value; so we won't replicate that here
         * Indicate this special use by setting the last parameter to true so we only validate the dependingField on chackboxes and radio buttons (#462)
         */
        if (dependingField.length && methods._required(dependingField, ["required"], 0, options, true) == undefined) {
          /* We now know any of the depending fields has a value,
           * so we can validate this field as per normal required code
           */
          return methods._required(field, ["required"], 0, options);
        }
      }
    },

    _submitButtonClick: function(event) {
      var button = $(this);
      var form = button.closest('form, .validationEngineContainer');
      form.data("jqv_submitButton", button.attr("id"));
    }
  };

  /**
   * Plugin entry point.
   * You may pass an action as a parameter or a list of options.
   * if none, the init and attach methods are being called.
   * Remember: if you pass options, the attached method is NOT called automatically
   *
   * @param {String}
   *            method (optional) action
   */
  $.fn.validationEngine = function(method) {

    var form = $(this);
    if (!form[0]) return form; // stop here if the form does not exist

    if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

      // make sure init is called once
      if (method != "showPrompt" && method != "hide" && method != "hideAll")
        methods.init.apply(form);

      return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method == 'object' || !method) {

      // default constructor with or without arguments
      methods.init.apply(form, arguments);
      return methods.attach.apply(form);
    } else {
      $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
    }
  };



  // LEAK GLOBAL OPTIONS
  $.validationEngine = {
    fieldIdCounter: 0,
    defaults: {

      // Name of the event triggering field validation
      validationEventTrigger: "none",
      // Automatically scroll viewport to the first error
      scroll: false,
      // Focus on the first input
      focusFirstField: true,
      // Show prompts, set to false to disable prompts
      showPrompts: true,
      // Should we attempt to validate non-visible input fields contained in the form? (Useful in cases of tabbed containers, e.g. jQuery-UI tabs)
      validateNonVisibleFields: false,
      // Opening box position, possible locations are: topLeft,
      // topRight, bottomLeft, centerRight, bottomRight, inline
      // inline gets inserted after the validated field or into an element specified in data-prompt-target
      promptPosition: "topRight",
      bindMethod: "bind",
      // internal, automatically set to true when it parse a _ajax rule
      inlineAjax: false,
      // if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
      ajaxFormValidation: false,
      // The url to send the submit ajax validation (default to action)
      ajaxFormValidationURL: false,
      // HTTP method used for ajax validation
      ajaxFormValidationMethod: 'get',
      // Ajax form validation callback method: boolean onComplete(form, status, errors, options)
      // retuns false if the form.submit event needs to be canceled.
      onAjaxFormComplete: $.noop,
      // called right before the ajax call, may return false to cancel
      onBeforeAjaxFormValidation: $.noop,
      // Stops form from submitting and execute function assiciated with it
      onValidationComplete: false,

      // Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
      doNotShowAllErrosOnSubmit: false,
      // Object where you store custom messages to override the default error messages
      custom_error_messages: {},
      // true if you want to vind the input fields
      binded: true,
      // set to true, when the prompt arrow needs to be displayed
      showArrow: true,
      // did one of the validation fail ? kept global to stop further ajax validations
      isError: false,
      // Limit how many displayed errors a field can have
      maxErrorsPerField: false,

      // Caches field validation status, typically only bad status are created.
      // the array is used during ajax form validation to detect issues early and prevent an expensive submit
      ajaxValidCache: {},
      // Auto update prompt position after window resize
      autoPositionUpdate: false,

      InvalidFields: [],
      onFieldSuccess: false,
      onFieldFailure: false,
      onSuccess: false,
      onFailure: false,
      validateAttribute: "class",
      addSuccessCssClassToField: "",
      addFailureCssClassToField: "",

      // Auto-hide prompt
      autoHidePrompt: false,
      // Delay before auto-hide
      autoHideDelay: 10000,
      // Fade out duration while hiding the validations
      fadeDuration: 0.3,
      // Use Prettify select library
      prettySelect: false,
      // Add css class on prompt
      addPromptClass: "",
      // Custom ID uses prefix
      usePrefix: "",
      // Custom ID uses suffix
      useSuffix: "",
      // Only show one message per error prompt
      showOneMessage: true
    }
  };
  $(function() {
    $.validationEngine.defaults.promptPosition = methods.isRTL() ? 'topLeft' : "topRight"
  });
})(jQuery);




(function($) {
  $.fn.validationEngineLanguage = function() {};
  $.validationEngineLanguage = {
    newLang: function() {
      $.validationEngineLanguage.allRules = {
        "required": { // Add your regex rules here, you can take telephone as an example
          "regex": "none",
          "alertText": "* Необходимо заполнить",
          "alertTextCheckboxMultiple": "* Вы должны выбрать вариант",
          "alertTextCheckboxe": "* Необходимо отметить"
        },
        "requiredInFunction": {
          "func": function(field, rules, i, options) {
            return (field.val() == "test") ? true : false;
          },
          "alertText": "* Field must equal test"
        },
        "minSize": {
          "regex": "none",
          "alertText": "* Минимум ",
          "alertText2": " символа(ов)"
        },
        "maxSize": {
          "regex": "none",
          "alertText": "* Максимум ",
          "alertText2": " символа(ов)"
        },
        "groupRequired": {
          "regex": "none",
          "alertText": "* You must fill one of the following fields"
        },
        "min": {
          "regex": "none",
          "alertText": "* Минимальное значение "
        },
        "max": {
          "regex": "none",
          "alertText": "* Максимальное значение "
        },
        "past": {
          "regex": "none",
          "alertText": "* Дата до "
        },
        "future": {
          "regex": "none",
          "alertText": "* Дата от "
        },
        "maxCheckbox": {
          "regex": "none",
          "alertText": "* Нельзя выбрать столько вариантов"
        },
        "minCheckbox": {
          "regex": "none",
          "alertText": "* Пожалуйста, выберите ",
          "alertText2": " опцию(ии)"
        },
        "equals": {
          "regex": "none",
          "alertText": "* Поля не совпадают"
        },
        "creditCard": {
          "regex": "none",
          "alertText": "* Неверный номер кредитной карты"
        },
        "phone": {
          // credit: jquery.h5validate.js / orefalo
          "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
          "alertText": "* Неправильный формат телефона"
        },
        "email": {
          // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
          "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
          "alertText": "* Неверный формат email"
        },
        "integer": {
          "regex": /^[\-\+]?\d+$/,
          "alertText": "* Не целое число"
        },
        "number": {
          // Number, including positive, negative, and floating decimal. credit: orefalo
          "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
          "alertText": "* Неправильное число с плавающей точкой"
        },
        "date": {
          "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
          "alertText": "* Неправильная дата (должно быть в ДД.MM.ГГГГ формате)"
        },
        "ipv4": {
          "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
          "alertText": "* Неправильный IP-адрес"
        },
        "url": {
          "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
          "alertText": "* Неправильный URL"
        },
        "onlyNumberSp": {
          "regex": /^[0-9\ ]+$/,
          "alertText": "* Только числа"
        },
        "onlyLetterSp": {
          "regex": /^[a-zA-Z\u0400-\u04FF\ \']+$/,
          "alertText": "* Только буквы"
        },
        "onlyLetterNumber": {
          "regex": /^[0-9a-zA-Z\u0400-\u04FF]+$/,
          "alertText": "* Запрещены специальные символы"
        },
        // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
        "ajaxUserCall": {
          "url": "ajaxValidateFieldUser",
          // you may want to pass extra data on the ajax call
          "extraData": "name=eric",
          "alertText": "* Этот пользователь уже занят",
          "alertTextLoad": "* Проверка, подождите..."
        },
        "ajaxNameCall": {
          // remote json service location
          "url": "ajaxValidateFieldName",
          // error
          "alertText": "* Это имя уже занято",
          // if you provide an "alertTextOk", it will show as a green prompt when the field validates
          "alertTextOk": "* Это имя доступно",
          // speaks by itself
          "alertTextLoad": "* Проверка, подождите..."
        },
        "validate2fields": {
          "alertText": "* Пожалуйста, введите HELLO"
        }
      };

    }
  };
  $.validationEngineLanguage.newLang();
})(jQuery);
// smoothscroll.js
function ssc_init() {
  if (!document.body) return;
  var e = document.body;
  var t = document.documentElement;
  var n = window.innerHeight;
  var r = e.scrollHeight;
  ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
  ssc_activeElement = e;
  ssc_initdone = true;
  if (top != self) {
    ssc_frame = true
  } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
    ssc_root.style.height = "auto";
    if (ssc_root.offsetHeight <= n) {
      var i = document.createElement("div");
      i.style.clear = "both";
      e.appendChild(i)
    }
  }
  if (!ssc_fixedback) {
    e.style.backgroundAttachment = "scroll";
    t.style.backgroundAttachment = "scroll"
  }
  if (ssc_keyboardsupport) {
    ssc_addEvent("keydown", ssc_keydown)
  }
}

function ssc_scrollArray(e, t, n, r) {
  r || (r = 1e3);
  ssc_directionCheck(t, n);
  ssc_que.push({
    x: t,
    y: n,
    lastX: t < 0 ? .99 : -.99,
    lastY: n < 0 ? .99 : -.99,
    start: +(new Date)
  });
  if (ssc_pending) {
    return
  }
  var i = function() {
    var s = +(new Date);
    var o = 0;
    var u = 0;
    for (var a = 0; a < ssc_que.length; a++) {
      var f = ssc_que[a];
      var l = s - f.start;
      var c = l >= ssc_animtime;
      var h = c ? 1 : l / ssc_animtime;
      if (ssc_pulseAlgorithm) {
        h = ssc_pulse(h)
      }
      var p = f.x * h - f.lastX >> 0;
      var d = f.y * h - f.lastY >> 0;
      o += p;
      u += d;
      f.lastX += p;
      f.lastY += d;
      if (c) {
        ssc_que.splice(a, 1);
        a--
      }
    }
    if (t) {
      var v = e.scrollLeft;
      e.scrollLeft += o;
      if (o && e.scrollLeft === v) {
        t = 0
      }
    }
    if (n) {
      var m = e.scrollTop;
      e.scrollTop += u;
      if (u && e.scrollTop === m) {
        n = 0
      }
    }
    if (!t && !n) {
      ssc_que = []
    }
    if (ssc_que.length) {
      setTimeout(i, r / ssc_framerate + 1)
    } else {
      ssc_pending = false
    }
  };
  setTimeout(i, 0);
  ssc_pending = true
}

function ssc_wheel(e) {
  if (!ssc_initdone) {
    ssc_init()
  }
  var t = e.target;
  var n = ssc_overflowingAncestor(t);
  if (!n || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
    return true
  }
  var r = e.wheelDeltaX || 0;
  var i = e.wheelDeltaY || 0;
  if (!r && !i) {
    i = e.wheelDelta || 0
  }
  if (Math.abs(r) > 1.2) {
    r *= ssc_stepsize / 120
  }
  if (Math.abs(i) > 1.2) {
    i *= ssc_stepsize / 120
  }
  ssc_scrollArray(n, -r, -i);
  e.preventDefault()
}

function ssc_keydown(e) {
  var t = e.target;
  var n = e.ctrlKey || e.altKey || e.metaKey;
  if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
    return true
  }
  if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
    return true
  }
  var r, i = 0,
    s = 0;
  var o = ssc_overflowingAncestor(ssc_activeElement);
  var u = o.clientHeight;
  if (o == document.body) {
    u = window.innerHeight
  }
  switch (e.keyCode) {
    case ssc_key.up:
      s = -ssc_arrowscroll;
      break;
    case ssc_key.down:
      s = ssc_arrowscroll;
      break;
    case ssc_key.spacebar:
      r = e.shiftKey ? 1 : -1;
      s = -r * u * .9;
      break;
    case ssc_key.pageup:
      s = -u * .9;
      break;
    case ssc_key.pagedown:
      s = u * .9;
      break;
    case ssc_key.home:
      s = -o.scrollTop;
      break;
    case ssc_key.end:
      var a = o.scrollHeight - o.scrollTop - u;
      s = a > 0 ? a + 10 : 0;
      break;
    case ssc_key.left:
      i = -ssc_arrowscroll;
      break;
    case ssc_key.right:
      i = ssc_arrowscroll;
      break;
    default:
      return true
  }
  ssc_scrollArray(o, i, s);
  e.preventDefault()
}

function ssc_mousedown(e) {
  ssc_activeElement = e.target
}

function ssc_setCache(e, t) {
  for (var n = e.length; n--;) ssc_cache[ssc_uniqueID(e[n])] = t;
  return t
}

function ssc_overflowingAncestor(e) {
  var t = [];
  var n = ssc_root.scrollHeight;
  do {
    var r = ssc_cache[ssc_uniqueID(e)];
    if (r) {
      return ssc_setCache(t, r)
    }
    t.push(e);
    if (n === e.scrollHeight) {
      if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
        return ssc_setCache(t, document.body)
      }
    } else if (e.clientHeight + 10 < e.scrollHeight) {
      overflow = getComputedStyle(e, "").getPropertyValue("overflow");
      if (overflow === "scroll" || overflow === "auto") {
        return ssc_setCache(t, e)
      }
    }
  } while (e = e.parentNode)
}

function ssc_addEvent(e, t, n) {
  window.addEventListener(e, t, n || false)
}

function ssc_removeEvent(e, t, n) {
  window.removeEventListener(e, t, n || false)
}

function ssc_isNodeName(e, t) {
  return e.nodeName.toLowerCase() === t.toLowerCase()
}

function ssc_directionCheck(e, t) {
  e = e > 0 ? 1 : -1;
  t = t > 0 ? 1 : -1;
  if (ssc_direction.x !== e || ssc_direction.y !== t) {
    ssc_direction.x = e;
    ssc_direction.y = t;
    ssc_que = []
  }
}

function ssc_pulse_(e) {
  var t, n, r;
  e = e * ssc_pulseScale;
  if (e < 1) {
    t = e - (1 - Math.exp(-e))
  } else {
    n = Math.exp(-1);
    e -= 1;
    r = 1 - Math.exp(-e);
    t = n + r * (1 - n)
  }
  return t * ssc_pulseNormalize
}

function ssc_pulse(e) {
  if (e >= 1) return 1;
  if (e <= 0) return 0;
  if (ssc_pulseNormalize == 1) {
    ssc_pulseNormalize /= ssc_pulse_(1)
  }
  return ssc_pulse_(e)
}
var ssc_framerate = 150;
var ssc_animtime = 500;
var ssc_stepsize = 150;
var ssc_pulseAlgorithm = true;
var ssc_pulseScale = 6;
var ssc_pulseNormalize = 1;
var ssc_keyboardsupport = true;
var ssc_arrowscroll = 50;
var ssc_frame = false;
var ssc_direction = {
  x: 0,
  y: 0
};
var ssc_initdone = false;
var ssc_fixedback = true;
var ssc_root = document.documentElement;
var ssc_activeElement;
var ssc_key = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  spacebar: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36
};
var ssc_que = [];
var ssc_pending = false;
var ssc_cache = {};
setInterval(function() {
  ssc_cache = {}
}, 10 * 1e3);
var ssc_uniqueID = function() {
  var e = 0;
  return function(t) {
    return t.ssc_uniqueID || (t.ssc_uniqueID = e++)
  }
}();
var ischrome = /chrome/.test(navigator.userAgent.toLowerCase());
if (ischrome) {
  ssc_addEvent("mousedown", ssc_mousedown);
  ssc_addEvent("mousewheel", ssc_wheel);
  ssc_addEvent("load", ssc_init)
}

//  js/menu.js

(function(e) {
  e.fn.hoverIntent = function(t, n, r) {
    var i = {
      interval: 100,
      sensitivity: 7,
      timeout: 0
    };
    if (typeof t === "object") {
      i = e.extend(i, t)
    } else if (e.isFunction(n)) {
      i = e.extend(i, {
        over: t,
        out: n,
        selector: r
      })
    } else {
      i = e.extend(i, {
        over: t,
        out: t,
        selector: n
      })
    }
    var s, o, u, a;
    var f = function(e) {
      s = e.pageX;
      o = e.pageY
    };
    var l = function(t, n) {
      n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
      if (Math.abs(u - s) + Math.abs(a - o) < i.sensitivity) {
        e(n).off("mousemove.hoverIntent", f);
        n.hoverIntent_s = 1;
        return i.over.apply(n, [t])
      } else {
        u = s;
        a = o;
        n.hoverIntent_t = setTimeout(function() {
          l(t, n)
        }, i.interval)
      }
    };
    var c = function(e, t) {
      t.hoverIntent_t = clearTimeout(t.hoverIntent_t);
      t.hoverIntent_s = 0;
      return i.out.apply(t, [e])
    };
    var h = function(t) {
      var n = jQuery.extend({}, t);
      var r = this;
      if (r.hoverIntent_t) {
        r.hoverIntent_t = clearTimeout(r.hoverIntent_t)
      }
      if (t.type == "mouseenter") {
        u = n.pageX;
        a = n.pageY;
        e(r).on("mousemove.hoverIntent", f);
        if (r.hoverIntent_s != 1) {
          r.hoverIntent_t = setTimeout(function() {
            l(n, r)
          }, i.interval)
        }
      } else {
        e(r).off("mousemove.hoverIntent", f);
        if (r.hoverIntent_s == 1) {
          r.hoverIntent_t = setTimeout(function() {
            c(n, r)
          }, i.timeout)
        }
      }
    };
    return this.on({
      "mouseenter.hoverIntent": h,
      "mouseleave.hoverIntent": h
    }, i.selector)
  }
})(jQuery);
(function(e) {
  e.megaMenuCompleteSet = function(t, n) {
    function S() {
      var t = e(this);
      switch (r.menu_effect) {
        case "hover_fade":
          t.find(b).first().fadeIn(r.menu_speed_show);
          break;
        case "hover_slide":
          t.find(b).first().slideDown(r.menu_speed_show);
          break;
        case "hover_toggle":
          t.find(b).first().show(r.menu_speed_show);
          break;
        case "click_fade":
          t.click(function() {
            t.find(b).first().fadeIn(r.menu_speed_show)
          });
          break;
        case "click_slide":
          t.click(function() {
            t.find(b).first().slideDown(r.menu_speed_show)
          });
          break;
        case "click_toggle":
          t.click(function() {
            t.find(b).first().show(r.menu_speed_show)
          });
          break
      }
    }

    function x() {
      var t = e(this).find(b);
      switch (r.menu_effect) {
        case "hover_fade":
        case "click_fade":
          t.fadeOut(r.menu_speed_hide);
          break;
        case "hover_slide":
        case "click_slide":
          t.slideUp(r.menu_speed_hide);
          break;
        case "hover_toggle":
        case "click_toggle":
          t.hide(r.menu_speed_hide);
          break
      }
    }

    function T() {
      e("#megamenu_form").validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          message: {
            required: true
          },
          captcha: {
            required: true,
            answercheck: true
          }
        },
        messages: {
          name: {
            required: "Please enter your name",
            minlength: "Your name should contain at least 2 characters"
          },
          email: {
            required: "Please enter your email address"
          },
          message: {
            required: "Please enter your message",
            minlength: "This is too short"
          },
          captcha: {
            required: "Wrong answer !"
          }
        },
        submitHandler: function(t) {
          e(t).ajaxSubmit({
            type: "POST",
            data: e(t).serialize(),
            url: "data/form.php",
            success: function() {
              e("#megamenu_form fieldset").fadeTo("slow", .3, function() {
                e("#success").fadeIn()
              })
            },
            error: function() {
              e("#megamenu_form fieldset").fadeTo("slow", .3, function() {
                e("#error").fadeIn()
              })
            }
          })
        }
      });
      jQuery.validator.addMethod("answercheck", function(e, t) {
        return this.optional(t) || /^\b5\b$/.test(e)
      }, "Please type the correct answer")
    }
    var r = {
      menu_speed_show: 300,
      menu_speed_hide: 200,
      menu_speed_delay: 200,
      menu_effect: "hover_fade",
      menu_click_outside: 0,
      menu_show_onload: 0,
      menu_responsive: 1
    };
    var i = this;
    i.options = {};
    var s = e(t);
    var t = t;
    var o = s.children("li"),
      u = e(o).children(".megamenu_drop"),
      a = e(o).find(".dropdown_container"),
      f = e(".megamenu_container_vertical"),
      l = e(o).find(".dropdown_fullwidth"),
      c = e(a).add(l),
      h = e(".dropdown_first"),
      p = e(o).find(".dropdown_parent"),
      d = e(p).children("a"),
      v = e(p).find(".dropdown_flyout_level"),
      m = e(p).find(".dropdown_flyout_level_left"),
      g = e(".megamenu_button"),
      y = e(o).add(p),
      b = e(c).add(v).add(m);
    i.init = function() {
      r = e.extend(1, r, n);
      hoverIntentConfig = {
        over: S,
        out: x,
        timeout: 200,
        sensitivity: 2,
        interval: r.menu_speed_delay
      };
      w();
      if (e("#megamenu_form").length > 0) {
        T()
      }
    };
    var w = function() {
      if ("ontouchstart" in document.documentElement && r.menu_responsive === 1) {
        if (e(document).width() < 768) {
          e(c).css({
            left: "-1px",
            top: "auto"
          }).hide();
          e(v).css({
            left: "0",
            top: "0"
          }).hide();
          e(o).hide(0);
          e(g).show(0)
        } else {
          E()
        }
        e(g).hammer().on("tap", function() {
          e(this).toggleClass("megamenu_button_active");
          e(o).not(":eq(0)").toggle(0)
        });
        e(y).toggleClass("noactive");
        e(u).hammer().on("tap", function() {
          var t = e(this);
          t.parent(o).toggleClass("active noactive").find(c).toggle(0);
          t.parent(o).siblings().addClass("noactive").removeClass("active").find(c).hide(0);
          e(p).addClass("noactive").removeClass("active").find(v).hide(0);
          return false
        });
        e(d).hammer().on("tap", function() {
          var t = e(this);
          t.parent(p).toggleClass("active noactive").find(v).first().toggle(0);
          t.parent(p).siblings().addClass("noactive").removeClass("active").find(v).hide(0);
          t.parent(p).siblings().find(p).addClass("noactive").removeClass("active");
          return false
        });
        e(document).hammer().on("tap", function() {
          e(y).addClass("noactive");
          e(b).hide(0)
        });
        s.hammer().on("tap", function(e) {
          e.stopPropagation()
        });
        e(window).bind("orientationchange", function() {
          e(y).addClass("noactive");
          e(b).hide(0)
        });
        return
      } else {
        E();
        e(window).resize(function() {
          e(g).removeClass("megamenu_button_active");
          E()
        });
        e(g).children("a").click(function() {
          e(g).toggleClass("megamenu_button_active");
          e(o).not(":eq(0)").toggle(0)
        });
        if (r.menu_click_outside === 1) {
          e(document).click(function() {
            e(y).removeClass("active");
            e(b).hide(0)
          });
          s.click(function(e) {
            e.stopPropagation()
          })
        }
        switch (r.menu_effect) {
          case "open_close_fade":
            var t = "fadeToggle",
              n = "fadeOut";
            break;
          case "open_close_slide":
            var t = "slideToggle",
              n = "slideUp";
            break;
          case "open_close_toggle":
            var t = "toggle",
              n = "hide";
            break
        }
        switch (r.menu_effect) {
          case "hover_fade":
          case "hover_slide":
          case "hover_toggle":
          case "click_fade":
          case "click_slide":
          case "click_toggle":
            e(y).hoverIntent(hoverIntentConfig);
            break;
          case "open_close_fade":
          case "open_close_slide":
          case "open_close_toggle":
            e(".megamenu > li:nth-child(" + (1 + r.menu_show_onload) + ")").find(c).show().closest(o).toggleClass("active");
            e(o).unbind("mouseenter mouseleave").click(function() {
              var i = e(this);
              i.siblings().removeClass("active").find(c)[n](r.menu_speed_hide);
              i.toggleClass("active").find(c).first().delay(r.menu_speed_delay)[t](r.menu_speed_show).click(function(e) {
                e.stopPropagation()
              })
            });
            e(p).unbind("mouseenter mouseleave").click(function() {
              var i = e(this);
              i.siblings().removeClass("active").find(v)[n](r.menu_speed_hide);
              i.siblings().find("li").removeClass("active");
              i.toggleClass("active").find(v).first().delay(r.menu_speed_delay)[t](r.menu_speed_show).click(function(e) {
                e.stopPropagation()
              })
            });
            break
        }
      }
    };
    var E = function() {
      if (e(document).width() < 768 && r.menu_responsive === 1) {
        e(c).css({
          left: "-1px",
          top: "auto"
        }).hide();
        e(h).css({
          left: "0"
        }).hide();
        e(v).css({
          left: "0",
          top: "0"
        }).hide();
        s.children("li").hide(0);
        e(g).show(0)
      } else {
        e(a).css({
          left: "auto",
          top: "auto"
        }).hide();
        e(l).css({
          left: "-1px",
          top: "auto"
        }).hide();
        e(v).css({
          left: "95%",
          top: "-13px"
        }).hide();
        e(m).css({
          left: "-108%",
          right: "100%"
        }).hide();
        s.children("li").show(0);
        e(g).hide(0)
      }
      e(f).find(c).css({
        top: "0"
      })
    };
    i.init()
  };
  e.fn.megaMenuCompleteSet = function(t) {
    return this.each(function() {
      if (undefined == e(this).data("megaMenuCompleteSet")) {
        var n = new e.megaMenuCompleteSet(this, t);
        e(this).data("megaMenuCompleteSet", n)
      }
    })
  }
})(jQuery)
