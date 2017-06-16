$(function() {

   var docHeight = $(document).height();

   $("body").append("<div id='overlay'><h1 style='font-size:72px; text-align: center;'>OVERLAY</div></h1>");

   $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.5,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': 'red',
         'width': '100%',
         'z-index': 5000
      });
   $('#btn-menu-tog')
      .click(function (e) {
         $('#overlay').toggle();
      })
      .css({
         'position': 'absolute',
         'top': 10,
         'right': 10,
         'z-index': 5001,
      });
});
