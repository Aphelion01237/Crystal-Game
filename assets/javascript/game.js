$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);
    var crystal1 = Math.floor(Math.random()*11+1)
    var crystal2 = Math.floor(Math.random()*11+1)
    var crystal3 = Math.floor(Math.random()*11+1)
    var crystal4 = Math.floor(Math.random()*11+1)
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;    
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  function restart(){
        Random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(Random);
        crystal1= Math.floor(Math.random()*11+1);
        crystal2= Math.floor(Math.random()*11+1);
        crystal3= Math.floor(Math.random()*11+1);
        crystal4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#targetNumber').text(userTotal);
        } 
  function winner(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    restart();
  }
  function loser(){
  alert ("You lost!");
    losses++;
    $('#numberLosses').text(losses);
    restart()
  }
    $('#one').on ('click', function(){
      userTotal = userTotal + crystal1;
      $('#targetNumber').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + crystal2;
      $('#targetNumber').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + crystal3;
      $('#targetNumber').text(userTotal);
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + crystal4;
      $('#targetNumber').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 