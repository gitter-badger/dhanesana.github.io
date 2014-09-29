var userTeam,
    oppTeam;

$(document).ready(function() {
    //Everything Fades in
  $('body').hide().fadeIn(1000);

  //Speech Fade in on Load
  $('.speech').hide().fadeIn(1200);

  // ref slides up to the middle
  $("#refFlip").animate({
    top:'36.5%',
    opacity:'1',
  }, 1500, 'easeOutBounce');
  //GAME PLAN slides in
  $("#gamePlan").effect("slide",1500, 'easeOutBounce');
  // flipping coin slides up
  $('.front').animate({
    top:'26%',
    opacity:'1',
  }, 500, 'linear');
  $("#heads").mouseenter(function(){
    $(this).css({"opacity": "0.5"});
  });
  $("#heads").mouseleave(function(){
    $(this).css({"opacity": "1"});
  });
  $("#tails").mouseenter(function(){
      $(this).css({"opacity": "0.5"});;
    });
  $("#tails").mouseleave(function(){
    $(this).css({"opacity": "1"});
  });
});

/*
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
/*
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
} */

//Center Win Popup
/* function popupPos(){
  var winWidth = document.documentElement.clientWidth;
  var winHeight = document.documentElement.clientHeight;
  var popupHeight = $("#popUp").height();
  var popupWidth = $("#popUp").width();
  $("#popUp").css({
    "position": "absolute",
    "top": winHeight/2-popupHeight/2,
    "left": winWidth/2-popupWidth/2
  });  
}

//Center Lose Popup
function popupPos2(){
  var winWidth2 = document.documentElement.clientWidth;
  var winHeight2 = document.documentElement.clientHeight;
  var popupHeight2 = $("#popUp2").height();
  var popupWidth2 = $("#popUp2").width();
  $("#popUp2").css({
    "position": "absolute",
    "top": winHeight2/2-popupHeight2/2,
    "left": winWidth2/2-popupWidth2/2
  });  
} */

// coin toss
function tossHeads() {
    coinToss = Math.floor(Math.random() * 100);
    userCoin = "heads";

    if (coinToss > 50) {
      wcoin = "heads";
  } else {
      wcoin = "tails";
  };

    if (userCoin == wcoin) {
      popupPos();
      popLoad();
      $(".coinPic").attr("src","img/coin.png");
      $(".gouser").text("The coin lands on " + wcoin.toUpperCase() + "!");
      $(".rdy").text("THAT MEANS U GON RECEIVE");
    } else {
      popupPos2();
      popLoad2();
      $(".coinPic").attr("src","img/coinTails.png");
      $(".gouser").text("The coin lands on " + wcoin.toUpperCase() + "...")
      $(".rdy").text("THAT MEANS U GON KICKOFF");
    };

    //$(".gouser").text("Go " + userTeam.toUpperCase() + "!");
};

/* function tossTails() {
    coinToss = Math.floor(Math.random() * 100);
    userCoin = "tails";

    if (coinToss > 50) {
      wcoin = "heads";
  } else {
      wcoin = "tails";
  };

    if (userCoin == wcoin) {
      popupPos();
      popLoad();
      $(".coinPic").attr("src","img/coinTails.png");
      $(".gouser").text("The coin lands on " + wcoin.toUpperCase() + "!");
      $(".rdy").text("THAT MEANS U GON RECEIVE");
    } else {
      popupPos2();
      popLoad2();
      $(".coinPic").attr("src","img/coin.png");
      $(".gouser").text("The coin lands on " + wcoin.toUpperCase() + "...");
      $(".rdy").text("THAT MEANS U GON KICKOFF");
    }

}; */

function receiveLeft() {
  $('#preGame').fadeOut('fast');
  $('#gameBG').fadeIn(3500);
  $('#playerRun').fadeIn(3500);
  $("#playerRun").animate({
    opacity:'1',
    left:'20%',
  }, 2000, 'linear');

}




