!function(e){e.fn.hoverIntent=function(t,n,o){var i={interval:100,sensitivity:7,timeout:0};i="object"==typeof t?e.extend(i,t):e.isFunction(n)?e.extend(i,{over:t,out:n,selector:o}):e.extend(i,{over:t,out:t,selector:n});var s,a,c,r,d=function(e){s=e.pageX,a=e.pageY},l=function(t,n){return n.hoverIntent_t=clearTimeout(n.hoverIntent_t),Math.abs(c-s)+Math.abs(r-a)<i.sensitivity?(e(n).off("mousemove.hoverIntent",d),n.hoverIntent_s=1,i.over.apply(n,[t])):(c=s,r=a,n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval),void 0)},u=function(e,t){return t.hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=0,i.out.apply(t,[e])},f=function(t){var n=jQuery.extend({},t),o=this;o.hoverIntent_t&&(o.hoverIntent_t=clearTimeout(o.hoverIntent_t)),"mouseenter"==t.type?(c=n.pageX,r=n.pageY,e(o).on("mousemove.hoverIntent",d),1!=o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){l(n,o)},i.interval))):(e(o).off("mousemove.hoverIntent",d),1==o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){u(n,o)},i.timeout)))};return this.on({"mouseenter.hoverIntent":f,"mouseleave.hoverIntent":f},i.selector)}}(jQuery),function(e){e.megaMenuCompleteSet=function(t,n){function o(){var t=e(this);switch(a.menu_effect){case"hover_fade":t.find(C).first().fadeIn(a.menu_speed_show);break;case"hover_slide":t.find(C).first().slideDown(a.menu_speed_show);break;case"hover_toggle":t.find(C).first().show(a.menu_speed_show);break;case"click_fade":t.click(function(){t.find(C).first().fadeIn(a.menu_speed_show)});break;case"click_slide":t.click(function(){t.find(C).first().slideDown(a.menu_speed_show)});break;case"click_toggle":t.click(function(){t.find(C).first().show(a.menu_speed_show)})}}function i(){var t=e(this).find(C);switch(a.menu_effect){case"hover_fade":case"click_fade":t.fadeOut(a.menu_speed_hide);break;case"hover_slide":case"click_slide":t.slideUp(a.menu_speed_hide);break;case"hover_toggle":case"click_toggle":t.hide(a.menu_speed_hide)}}function s(){e("#megamenu_form").validate({rules:{name:{required:!0,minlength:2},email:{required:!0,email:!0},message:{required:!0},captcha:{required:!0,answercheck:!0}},messages:{name:{required:"Please enter your name",minlength:"Your name should contain at least 2 characters"},email:{required:"Please enter your email address"},message:{required:"Please enter your message",minlength:"This is too short"},captcha:{required:"Wrong answer !"}},submitHandler:function(t){e(t).ajaxSubmit({type:"POST",data:e(t).serialize(),url:"contact.php",success:function(){e("#megamenu_form fieldset").fadeTo("slow",.3,function(){e("#success").fadeIn()})},error:function(){e("#megamenu_form fieldset").fadeTo("slow",.3,function(){e("#error").fadeIn()})}})}}),jQuery.validator.addMethod("answercheck",function(e,t){return this.optional(t)||/^\b5\b$/.test(e)},"Please type the correct answer")}var a={menu_speed_show:300,menu_speed_hide:200,menu_speed_delay:200,menu_effect:"hover_fade",menu_click_outside:0,menu_show_onload:0,menu_responsive:1},c=this;c.options={};var r=e(t),t=t,d=r.children("li"),l=e(d).children(".megamenu_drop"),u=e(d).find(".dropdown_container"),f=e(".megamenu_container_vertical"),h=e(d).find(".dropdown_fullwidth"),m=e(u).add(h),_=e(".dropdown_first"),v=e(d).find(".dropdown_parent"),p=e(v).children("a"),g=e(v).find(".dropdown_flyout_level"),w=e(v).find(".dropdown_flyout_level_left"),k=e(".megamenu_button"),b=e(d).add(v),C=e(m).add(g).add(w);c.init=function(){a=e.extend(1,a,n),hoverIntentConfig={over:o,out:i,timeout:200,sensitivity:2,interval:a.menu_speed_delay},I(),e("#megamenu_form").length>0&&s()};var I=function(){if("ontouchstart"in document.documentElement&&1===a.menu_responsive)return e(document).width()<768?(e(m).css({left:"-1px",top:"auto"}).hide(),e(g).css({left:"0",top:"0"}).hide(),e(d).hide(0),e(k).show(0)):y(),e(k).hammer().on("tap",function(){e(this).toggleClass("megamenu_button_active"),e(d).not(":eq(0)").toggle(0)}),e(b).toggleClass("noactive"),e(l).hammer().on("tap",function(){var t=e(this);return t.parent(d).toggleClass("active noactive").find(m).toggle(0),t.parent(d).siblings().addClass("noactive").removeClass("active").find(m).hide(0),e(v).addClass("noactive").removeClass("active").find(g).hide(0),!1}),e(p).hammer().on("tap",function(){var t=e(this);return t.parent(v).toggleClass("active noactive").find(g).first().toggle(0),t.parent(v).siblings().addClass("noactive").removeClass("active").find(g).hide(0),t.parent(v).siblings().find(v).addClass("noactive").removeClass("active"),!1}),e(document).hammer().on("tap",function(){e(b).addClass("noactive"),e(C).hide(0)}),r.hammer().on("tap",function(e){e.stopPropagation()}),void e(window).bind("orientationchange",function(){e(b).addClass("noactive"),e(C).hide(0)});switch(y(),e(window).resize(function(){e(k).removeClass("megamenu_button_active"),y()}),e(k).children("a").click(function(){e(k).toggleClass("megamenu_button_active"),e(d).not(":eq(0)").toggle(0)}),1===a.menu_click_outside&&(e(document).click(function(){e(b).removeClass("active"),e(C).hide(0)}),r.click(function(e){e.stopPropagation()})),a.menu_effect){case"open_close_fade":var t="fadeToggle",n="fadeOut";break;case"open_close_slide":var t="slideToggle",n="slideUp";break;case"open_close_toggle":var t="toggle",n="hide"}switch(a.menu_effect){case"hover_fade":case"hover_slide":case"hover_toggle":case"click_fade":case"click_slide":case"click_toggle":e(b).hoverIntent(hoverIntentConfig);break;case"open_close_fade":case"open_close_slide":case"open_close_toggle":e(".megamenu > li:nth-child("+(1+a.menu_show_onload)+")").find(m).show().closest(d).toggleClass("active"),e(d).unbind("mouseenter mouseleave").click(function(){var o=e(this);o.siblings().removeClass("active").find(m)[n](a.menu_speed_hide),o.toggleClass("active").find(m).first().delay(a.menu_speed_delay)[t](a.menu_speed_show).click(function(e){e.stopPropagation()})}),e(v).unbind("mouseenter mouseleave").click(function(){var o=e(this);o.siblings().removeClass("active").find(g)[n](a.menu_speed_hide),o.siblings().find("li").removeClass("active"),o.toggleClass("active").find(g).first().delay(a.menu_speed_delay)[t](a.menu_speed_show).click(function(e){e.stopPropagation()})})}},y=function(){e(document).width()<768&&1===a.menu_responsive?(e(m).css({left:"-1px",top:"auto"}).hide(),e(_).css({left:"0"}).hide(),e(g).css({left:"0",top:"0"}).hide(),r.children("li").hide(0),e(k).show(0)):(e(u).css({left:"auto",top:"auto"}).hide(),e(h).css({left:"-1px",top:"auto"}).hide(),e(g).css({left:"95%",top:"-13px"}).hide(),e(w).css({left:"-108%",right:"100%"}).hide(),r.children("li").show(0),e(k).hide(0)),e(f).find(m).css({top:"0"})};c.init()},e.fn.megaMenuCompleteSet=function(t){return this.each(function(){if(void 0==e(this).data("megaMenuCompleteSet")){var n=new e.megaMenuCompleteSet(this,t);e(this).data("megaMenuCompleteSet",n)}})}}(jQuery);