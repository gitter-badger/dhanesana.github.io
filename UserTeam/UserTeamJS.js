var userTeam,
    oppTeam;

//Everything Fades in
$('body').hide().fadeIn(2500);

//Speech Fade in on Load
$('.speech').hide().fadeIn(3000);

// Coach slides to the right
$("#coach").animate({
  left:'100%',
  opacity:'1',
}, 1200, 'linear');

//input has border when focused
$(document).ready(function() {
    $('input').focus(function() {
        $(this).css('outline', '2px dashed green')
    });
    $('input').blur(function() {
        $(this).css('outline','none');
    });
});

// Jquery Popups !

//Load Chargers Popup
var status = 0;
function popLoad(){
  if(status==0){
    $("#popupBG").css({
      "opacity": "0.5"
    });
    $("#popupBG").fadeIn("slow");
    $("#popUp").fadeIn("slow");
    status = 1;
  }
}

//Load Seahawks Popup
var status2 = 0;
function popLoad2(){
  if(status2==0){
    $("#popupBG2").css({
      "opacity": "0.5"
    });
    $("#popupBG2").fadeIn("slow");
    $("#popUp2").fadeIn("slow");
    status2 = 1;
  }
}

//Chargers Popup Off w/ Fadeout
function popOff(){
  if(status==1){
    $("#popupBG").fadeOut("slow");
    $("#popUp").fadeOut("slow");
    status = 0;
  }
}

//Seahawks Popup Off w/ Fadeout
function popOff(){
  if(status2==1){
    $("#popupBG2").fadeOut("slow");
    $("#popUp2").fadeOut("slow");
    status2 = 0;
  }
}

//Center Chargers Popup
function popupPos(){
  var winWidth = document.documentElement.clientWidth;
  var winHeight = document.documentElement.clientHeight;
  var popupHeight = $("#popUp").height();
  var popupWidth = $("#popUp").width();
  $("#popUp").css({
    "position": "fixed",
    "top": winHeight/2-popupHeight/1.9,
    "left": winWidth/2-popupWidth/1.9
  });  
}

//Center Seahawks Popup
function popupPos2(){
  var winWidth2 = document.documentElement.clientWidth;
  var winHeight2 = document.documentElement.clientHeight;
  var popupHeight2 = $("#popUp2").height();
  var popupWidth2 = $("#popUp2").width();
  $("#popUp2").css({
    "position": "fixed",
    "top": winHeight2/2-popupHeight2/1.9,
    "left": winWidth2/2-popupWidth2/1.9
  });  
}

function getuserTeam() {
  userTeam = document.teamform.response.value.toLowerCase(),
    // Store userTeam as Local Var
    localStorage.removeItem("opps");
    localStorage.removeItem("userTeam");
    localStorage.setItem("userTeam", userTeam);


    if (userTeam == "seattle seahawks" || userTeam == "seahawks") {
      opps = "CHARGERS";
      localStorage.setItem("opps", opps);
      $(".inpopUp").text("U GON PLAY THE " + opps.toUpperCase() + "!");
      popupPos();
      popLoad();
  } else if (userTeam.length == 0) {
    //error message!
    $("#errormsg").text("YOU GOTTA TYPE SOMETHIN'");
  } else if (userTeam.length > 20) {
    $("#errormsg").text("TOO LONG! LIMIT: 20 CHARS'");
  } else {
      opps = "SEAHAWKS";
      localStorage.setItem("opps", opps);
      $(".inpopUp").text("U GON PLAY THE " + opps.toUpperCase() + "!");
      popupPos2();
      popLoad2();
  };

    $(".gouser").text("Go " + userTeam.toUpperCase() + "!");

    function setCookie(name, value, expires, path, domain, secure){
    document.cookie= name + "=" + escape(userTeam) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ("; path=/CoinFlip/userReceive/userReceiveJS.js") +       //you having wrong quote here
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

};






