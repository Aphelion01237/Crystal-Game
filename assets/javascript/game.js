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
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
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
    reset();
  }
  function loser(){
  alert ("You lost!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
    $('#one').on ('click', function(){
      userTotal = userTotal + crystal1;
      console.log("New userTotal= " + userTotal);
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
      console.log("New userTotal= " + userTotal);
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
      console.log("New userTotal= " + userTotal);
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
      console.log("New userTotal= " + userTotal);
      $('#targetNumber').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 