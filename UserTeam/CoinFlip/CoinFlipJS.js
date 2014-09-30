var userTeam,
    oppTeam;

$(document).ready(function() {
    //Everything Fades in
  $('body').hide().fadeIn(1000);

  //Speech Fade in on Load
  $('.speech').hide().fadeIn(1200);

  // ref slides up to the middle
  $("#refFlip").animate({
    bottom:'30%',
    opacity:'1',
  }, 700, 'swing');
  // flipping coin slides up
  $('.front').animate({
    top:'26%',
    opacity:'1',
  }, 500, 'linear');
  $("#heads").mouseenter(function(){
    $(this).css({"opacity": "0.5"});
    $(".bigCoin").attr("src","img/coin.png");
    $(".bigCoin").css({"opacity": "0.99"});
    $(".bigCoin").fadeIn('fast');
  });
  $("#heads").mouseleave(function(){
    $(this).css({"opacity": "1"});
    $(".bigCoin").effect('explode');
  });
  $("#tails").mouseenter(function(){
      $(this).css({"opacity": "0.5"});
      $(".bigCoin").attr("src","img/coinTails.png");
      $(".bigCoin").css({"opacity": "0.99"});
      $(".bigCoin").fadeIn('fast');
    });
  $("#tails").mouseleave(function(){
    $(this).css({"opacity": "1"});
    $(".bigCoin").effect('explode');
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

//Center Win Popup
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

//Center Lose Popup
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

function tossTails() {
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

};






