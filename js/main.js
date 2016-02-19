  $(function(){
      $("#typedHeader").typed({
        strings: ["a developer", "a hacker"],
        typeSpeed: 0,
        loop: true
      });
      
      var colors = ["#3883FA", "#EE422E", "#FFBC00", "#2FA851"];
      $('.big-icon').hover(function(){
          var newColor = colors[(Math.random()*4)|0];
          $(this).animate({color: newColor}, 100);
      }, function(){
          $(this).animate({color: "#000000"}, 100)
      });

      $('.sqicon').hover(function(){
          var newColor = colors[(Math.random()*4)|0];
          $(this).animate({color: newColor}, 100);
      }, function(){
          $(this).animate({color: "#ffffff"}, 100)
      });
      $('.ui.accordion').accordion();

    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });



      var imgs = [$('#swiftImg'), $('#flappyImg'), $('#quickImg')];
      var imgSrcs = ['pebbleapp.gif', 'flappynerd.gif', 'quickchat.gif'];

      var swiftGif = new Image();

          swiftGif.src = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))+'/img/'+imgSrcs[0];
          swiftGif.onload = function(){
          imgs[0].attr("src", this.src);   
          console.log('loaded image '+0);
      };

      var flappyGif = new Image();

      flappyGif.src = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))+'/img/'+imgSrcs[1];
      flappyGif.onload = function(){
          imgs[1].attr("src", this.src);   
          console.log('loaded image '+1);
      };

      var quickGif = new Image();

      quickGif.src = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))+'/img/'+imgSrcs[2];
      quickGif.onload = function(){
          imgs[2].attr("src", this.src);   
          console.log('loaded image '+2);
      };

  });