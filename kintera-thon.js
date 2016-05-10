$(document).ready(function() {
  $(".nav-menu").click(function() {
    $(".nav-items").fadeIn(600);
    $(".nav-items").toggleClass('nav-items-toggle');
    if ($(".nav-items").hasClass('nav-items-toggle')) {
      $(".nav-items").css({
        display: "block"
      });
    } 
    else {
      $(".nav-items").css({
        display: "none"
      });
      $(".nav-items").fadeOut(300);
    }
  });
});

$(document).ready(function () {
	var leftwrapper = $(".left-wrapper").height();
	var bodywrapper = $(".body-wrapper").height();
	if (leftwrapper >= bodywrapper) {	
	  var footerheight = (leftwrapper - bodywrapper);
		$("#contactfooter").css("margin-top",""+ footerheight +"px");
	}
/*	else if (bodywrapper >= leftwrapper) {	
	  var footerheight = (bodywrapper - leftwrapper) + 200;
		$("#contactfooter").css("margin-top",""+ footerheight +"px");
	}*/
	else {		
	}
});
