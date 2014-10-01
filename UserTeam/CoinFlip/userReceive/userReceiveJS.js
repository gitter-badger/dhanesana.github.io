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

/*$(document).ready(function() {
  popupPos2();
          popLoad2();
})*/


// Jquery Popups !
//Load Instructions Popup
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

//Load Endgame Popup
var status = 0;
function popLoad2(){
  $("#winorlose").text((localStorage.getItem("userTeam")).toUpperCase() + " R THE WINNERS!");
  $("#endBG").attr("src","img/cheerbg.jpg");
  $("#winPic").attr("src","img/winner.png");
  if(status==0){
    $("#popupBG2").css({
      "opacity": "1"
    });
    $("#popupBG2").fadeIn("slow");
    $("#popUp2").fadeIn("slow");
    status = 1;
  }
}

var status = 0;
function popLoad3(){
  $("#winorlose").text("U LOST TO THE " + (localStorage.getItem("opps")).toUpperCase());
  $(".winPic").attr("src","img/tombstone.png");
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



//Close Popup2
  $("#ok").click(function(){
    $("#popupBG").fadeOut("slow");
    $("#popUp").fadeOut("slow");
  });

//Center Game Instruction Popup
  function popupPos(){
  var winWidth = document.documentElement.clientWidth;
  var winHeight = document.documentElement.clientHeight;
  var popupHeight = $("#popUp").height();
  var popupWidth = $("#popUp").width();
  $("#popUp").css({
    "position": "absolute",
    "top": winHeight/2-popupHeight/1.9,
    "left": winWidth/2-popupWidth/1.9
  });  
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

//Animation when player selects Left
function receiveLeft() {
  $('#preGame').fadeOut('fast');
  $('#gameBG').fadeIn(3500);
  $('#football').fadeIn(3500);
  $('#playerReceive').fadeIn(3500);
  $('#playerRun').fadeIn(3500);
  $("#playerRun").animate({
    opacity:'1',
    left:'20%',
  }, 2000, 'linear');
  //player run fades out as player kick fades in
  $('#playerRun').fadeOut(100, function () {
    $('#playerKick').fadeIn(100, function() {
      $("#football").animate({width: '10%',
        height: '10%', opacity:'1',left:'50.5%', top: '35%' }, 1500, function () {
          $('#football').fadeOut(0, function () {
            $("#football2").animate({width:'2%',height:'2%', top:'48%',
            opacity:'1', left: '80%'}, 1500, function() {
              $('#playerKick').fadeOut('fast');
              $('#playerReceive').fadeOut('fast');
              $("#football2").fadeOut('fast');
              $('#gameBG').fadeOut('fast', function() {
                $('#gameBG2').fadeIn(2000);
                $("#playerCatch").animate({opacity:'1', top:'35%',}, 3000, 'linear');
                $("#frontBall").fadeIn('fast');
                $("#frontBall").animate({top: '30%',
                width:'10%', height:'20%'}, 3000, function () {
                  userGame();
                });
              });
            })
          })
        });
    });
  });
};

function receiveRight() {
  $('#preGame').fadeOut('fast');
  $('#gameBG').fadeIn(3500);
  $('#football').fadeIn(3500);
  $('#playerReceive').fadeIn(3500);
  $('#playerRun').fadeIn(3500);
  $("#playerRun").animate({
    opacity:'1',
    left:'20%',
  }, 2000, 'linear');
  //player run fades out as player kick fades in
  $('#playerRun').fadeOut(100, function () {
    $('#playerKick').fadeIn(100, function() {
      $("#football").animate({width: '10%',
        height: '10%', opacity:'1',left:'50.5%', top: '35%' }, 1500, function () {
          $('#football').fadeOut(0, function () {
            $("#football2").animate({width:'2%',height:'2%', top:'48%',
            opacity:'1', left: '80%'}, 1500, function() {
              $('#playerKick').fadeOut('fast');
              $('#playerReceive').fadeOut('fast');
              $("#football2").fadeOut('fast');
              $('#gameBG').fadeOut('fast', function() {
                $('#gameBG2').fadeIn(2000);
                $("#playerCatch").animate({opacity:'1', top:'35%',}, 3000, 'linear');
                $("#frontBall").fadeIn('fast');
                $("#frontBall").animate({top: '30%',
                width:'10%', height:'20%'}, 3000, function () {
                  userGame2();
                });
              });
            })
          })
        });
    });
  });
};

// User controls runner with right key 
function userGame() {
  var runner1 = $("#runball");
  var runset = runner1.offset();
  $('#gameBG2').fadeOut(2000);
  $('#playerCatch').fadeOut(2000);
  $('#frontBall').fadeOut(2000, function() {
    $('#run').fadeIn('fast');
    $("#run").animate({'font-size': "6rem"}, 700, function() {
      $('#gameBG3').fadeIn(400, function() {
        $('#run').fadeOut('fast');
        $('#runball').fadeIn(400, function() {
          popupPos();
          popLoad();
          $(document).bind('keydown', function(e) {
            var run1 = $("#runball"),
                run2 = $("#runball2"),
                runset = run1.offset(),
                runset2 = run2.offset(),
                right = 39
            if (e.keyCode == right) {
              run1.animate({left: "+=30" }, 1);
              run2.animate({left: "+=30" }, 1);
              run1.toggle();
              run2.toggle();
              $("#popupBG").fadeOut("slow");
              $("#popUp").fadeOut("slow");
              if (runset.left >= 50 || runset2.left >= 90) {
                $('#lol').fadeIn(400);
              }
              if (runset.left >= 200 || runset2.left >= 200) {
                $('#keep').fadeIn(400);
              }
              if (runset.left >= 512 || runset2.left >= 512) {
                $('#halfway').fadeIn(400);
              }
              if (runset.left >= 700 || runset2.left >= 700) {
                $('#almost').fadeIn(400);
              }
              if (runset.left >= 1024 || runset2.left >= 1024) {
                finishLeft();
              }
            }
          });
        })        
      });
    });
  })
};

function userGame2() {
  var runner1 = $("#runball");
  var runset = runner1.offset();
  $('#gameBG2').fadeOut(2000);
  $('#playerCatch').fadeOut(2000);
  $('#frontBall').fadeOut(2000, function() {
    $('#run').fadeIn('fast');
    $("#run").animate({'font-size': "6rem"}, 700, function() {
      $('#gameBG3').fadeIn(400, function() {
        $('#run').fadeOut('fast');
        $('#runball').fadeIn(400, function() {
          popupPos();
          popLoad();
          $(document).bind('keydown', function(e) {
            var run1 = $("#runball"),
                run2 = $("#runball2"),
                runset = run1.offset(),
                runset2 = run2.offset(),
                right = 39
            if (e.keyCode == right) {
              run1.animate({left: "+=30" }, 1);
              run2.animate({left: "+=30" }, 1);
              run1.toggle();
              run2.toggle();
              $("#popupBG").fadeOut("slow");
              $("#popUp").fadeOut("slow");
              if (runset.left >= 50 || runset2.left >= 90) {
                $('#lol').fadeIn(400);
              }
              if (runset.left >= 200 || runset2.left >= 200) {
                $('#keep').fadeIn(400);
              }
              if (runset.left >= 512 || runset2.left >= 512) {
                $('#halfway').fadeIn(400);
              }
              if (runset.left >= 700 || runset2.left >= 700) {
                $('#almost').fadeIn(400);
              }
              if (runset.left >= 1024 || runset2.left >= 1024) {
                finishRight();
              }
            }
          });
        })        
      });
    });
  })
};

function finishLeft() {
  //fade out usergame
  $(document).unbind();
  $('#lol').fadeOut(1);
  $('#keep').fadeOut(1);
  $('#halfway').fadeOut(1);
  $('#almost').fadeOut(1);
  $('#runball').fadeOut(1);
  $('#runball2').fadeOut(1);
  $('#gameBG3').fadeOut(400, function() {
    $('#gameBG4').fadeIn(500, function() {
      $('#dive').fadeIn('fast');
      $('#dive').animate({top:'60%', left: '25%'}, 7000, function(){
        $('#gameBG4').fadeOut('fast');
        $('#dive').fadeOut('fast', function() {
          window.location.assign("Win/win.html")
        })
      });
    });
  });
}

function finishRight() {
  //fade out usergame
  $(document).unbind();
  $('#lol').fadeOut(1);
  $('#keep').fadeOut(1);
  $('#halfway').fadeOut(1);
  $('#almost').fadeOut(1);
  $('#runball').fadeOut(1);
  $('#runball2').fadeOut(1);
  $('#gameBG3').fadeOut(400, function() {
    $('#gameBG4').fadeIn(500, function() {
      $('#dive').fadeIn('fast', function() {
        $('#dive').animate({top:'60%', left: '25%'}, 4000, function(){
          $('#dive').fadeOut('fast');
          $('#sack').fadeIn('fast');
          $('#lolball').fadeIn('fast');
          $('#lolball').animate({top:'40%', left: '1%'}, 3000);
          $('#sack').animate({top:'60%', left: '10%'}, 5000, function() {
            window.location.assign("Lose/lose.html")
          })
        });
      });
    });
  });
}





