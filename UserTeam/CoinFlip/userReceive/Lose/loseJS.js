$(document).ready(function() {
  popupPos2();
  popLoad3();
})

var status = 0;
function popLoad3(){
  $("#winorlose").text("U LOST TO THE " + (localStorage.getItem("opps")).toUpperCase());
  $("#winPic").attr("src","img/tombstone.png");
  $("#endBG").attr("src","img/losebg.jpg");
  $(".rdy").text((localStorage.getItem("userTeam")).toUpperCase());
  if(status==0){
    $("#popupBG2").css({
      "opacity": "1"
    });
    $("#popupBG2").fadeIn("slow");
    $("#popUp2").fadeIn("slow");
    status = 1;
  }
}



//Center EndGame Popup
function popupPos2(){
  var winWidth2 = document.documentElement.clientWidth;
  var winHeight2 = document.documentElement.clientHeight;
  var popupHeight2 = $("#popUp2").height();
  var popupWidth2 = $("#popUp2").width();
  $("#popUp2").css({
    "position": "absolute",
    "top": winHeight2/2-popupHeight2/1.9,
    "left": winWidth2/2-popupWidth2/1.9
  });  
}

