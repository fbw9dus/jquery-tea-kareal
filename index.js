// Work on your tasks here

$(document).ready(function(){
    $("img").click(function(){
      $(".image.teapot").css("transform", "rotate(20deg)");
    });
  });



  $('main p').hover(function(){
    $(this).text("Rich in flavours");
},function(){
    $(this).text("Great tea for a cold night");
});