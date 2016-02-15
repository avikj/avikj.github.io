  $(function(){
      $("#typedHeader").typed({
        strings: ["a developer", "a hacker"],
        typeSpeed: 0,
        loop: true
      });
      
      var colors = ["#3883FA", "#EE422E", "#FFBC00", "#2FA851"];
      $('i').hover(function(){
          var newColor = colors[(Math.random()*4)|0];
          $(this).animate({color: newColor}, 100);
      }, function(){
          $(this).animate({color: "#000000"}, 100)
      });
  });