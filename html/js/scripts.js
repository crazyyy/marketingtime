$(".landform").on("submit",function(t){t.preventDefault(),$(this).addClass("current-form");var n=($(this),$.trim($(".current-form input[name=phone]").val())),e=$.trim($(".current-form input[name=name]").val()),a=$(this).serializeArray(),c=$(this).attr("action"),o=$(".current-form .thanx"),r=$(".current-form input[name=name]"),i=$(".current-form input[name=phone]"),s=$(".current-form .message");$(s).fadeIn(200),null!=e&&0==e.length?($(s).addClass("message-err").html("Укажите своё имя"),$(r).addClass("input-error"),event.preventDefault()):null!=n&&0==n.length?($(r).removeClass("input-error"),$(s).addClass("message-err").html("Укажите контактный телефон"),$(i).addClass("input-error"),event.preventDefault()):($(i).removeClass("input-error"),$.ajax({url:c,type:"POST",data:a,beforeSend:function(){$(s).html("Отправляем...")},success:function(t){$(s).addClass("message-ok"),$(s).html("Успешно отправилось!"),$(s).fadeOut(1500),$(o).fadeIn(1500)}})),$(this).removeClass("current-form")}),jQuery(function(t){var n={message:null,init:function(){t(".recall").click(function(e){e.preventDefault(),t.get("data/recall.php",function(e){t(e).modal({closeHTML:"<a href='#' title='Close' class='modal-close'>x</a>",autoPosition:!0,overlayId:"contact-overlay",containerId:"contact-container",onOpen:n.open,onShow:n.show,onClose:n.close})})})},open:function(n){var e=370,a=t("#contact-container .contact-title").html();t("#contact-container .contact-title").html("Loading..."),n.overlay.fadeIn(200,function(){n.container.fadeIn(200,function(){n.data.fadeIn(200,function(){t("#contact-container .contact-content").animate({height:e},function(){t("#contact-container .contact-title").html(a),t("#contact-container form").fadeIn(200,function(){t("#contact-container #contact-name").focus(),t("#contact-container .contact-cc").click(function(){var n=t("#contact-container #contact-cc");n.is(":checked")?n.attr("checked",""):n.attr("checked","checked")})})})})})})},show:function(e){t("#contact-container .contact-send").click(function(e){if(e.preventDefault(),n.validate()){var a=t("#contact-container .contact-message");a.fadeOut(function(){a.removeClass("contact-error").empty()}),t("#contact-container .contact-title").html("Sending..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:"260px"},function(){t("#contact-container .contact-loading").fadeIn(200,function(){t.ajax({url:"data/recall.php",data:t("#contact-container form").serialize()+"&action=send",type:"post",cache:!1,dataType:"html",success:function(n){t("#contact-container .contact-loading").fadeOut(200,function(){t("#contact-container .contact-title").html("Thank you!"),a.html(n).fadeIn(200)})},error:n.error})})})}else if(t("#contact-container .contact-message:visible").length>0){var a=t("#contact-container .contact-message div");a.fadeOut(200,function(){a.empty(),n.showError(),a.fadeIn(200)})}else t("#contact-container .contact-message").animate({height:"1px"},n.showError)})},close:function(n){t("#contact-container .contact-message").fadeOut(),t("#contact-container .contact-title").html("Goodbye..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:40},function(){n.data.fadeOut(200,function(){n.container.fadeOut(200,function(){n.overlay.fadeOut(200,function(){t.modal.close()})})})})},error:function(t){alert(t.statusText)},validate:function(){n.message="",t("#contact-container #contact-name").val()||(n.message+="Укажите Ваше Имя. ");var e=t("#contact-container #contact-email").val();e?n.validateEmail(e)||(n.message+="Email is invalid. "):n.message+="Email is required. ",t("#contact-container #contact-message").val()||(n.message+="Message is required.");var a=t("#contact-container .contact-phone").val().length;return console.log(a),(!t("#contact-container .contact-phone").val()||15>a)&&(n.message+="Укажите Ваш телефон."),n.message.length>0?!1:!0},validateEmail:function(t){var n=t.lastIndexOf("@");if(1>n||n+1===t.length)return!1;if(/(\.{2,})/.test(t))return!1;var e=t.substring(0,n),a=t.substring(n+1);return e.length<1||e.length>64||a.length<4||a.length>255?!1:/(^\.|\.$)/.test(e)||/(^\.|\.$)/.test(a)?!1:(/^"(.+)"$/.test(e)||/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(e))&&/^[-a-zA-Z0-9\.]*$/.test(a)&&-1!==a.indexOf(".")?!0:!1},showError:function(){t("#contact-container .contact-message").html(t('<div class="contact-error"></div>').append(n.message)).fadeIn(200)}};n.init()});