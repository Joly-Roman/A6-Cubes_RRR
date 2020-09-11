
const numDivs = 36;
const maxHits = 10;
const btnStart = $("#button-start");

let btnMiss = $(".miss");
let misshits = 0;
let hits = 0;
let firstHitTime = 0;

function round(event) {

  btnStart.hide();


  let divSelector = randomDivId();
  $(divSelector).addClass("target").removeClass("miss");
  if ($(divSelector).hasClass("miss")) { randomDivId();


    };
   
   $(divSelector).click(function(event){
    
    $(divSelector).removeClass("target").text("");
    });
  
   $(divSelector).addClass("target");

  // TODO: помечать target текущим номером
  $(".target").text(hits+1);

  
  if (hits === 0) {
    firstHitTime = getTimestamp();
  }

  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {

  $(".game-field").hide();
  $("#button-start").hide();
  $("#button-reload").click(function() {
    location.reload();
  });

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  
  if ($(event.target).hasClass("target")) {
    
    hits = hits + 1;
    
    round();
  }

  else {
    $(event.target).addClass("miss");
    misshits = misshits + 1;
  };
};



function init() {
 
  btnStart.click(function() {
  round();   
  });
  

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
  
}

$(document).ready(init);
