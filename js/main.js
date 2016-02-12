			$(function(){
				$.fn.extend({
				    animateCss: function (animationName) {
				        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
				            $(this).removeClass('animated ' + animationName);
				        });
				    }
				});
				var b1 = $('#b1');
				b1.animateCss('bounce');
				console.log("deez"+b1);
				b1.onclick = function(){console.log('clicked');}
				console.log('added listener');
			});