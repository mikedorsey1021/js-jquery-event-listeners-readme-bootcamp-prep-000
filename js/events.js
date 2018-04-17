//define functions here
function getIt (){
  $('p').on("click", function (){
    alert('Hey!');
  });
}

function frameIt (){
  $('img').on("load", function (){
    $('img').addClass('tasty');
  });
}

function pressIt (){
  $('#typing').on('keydown', function (key){
    if (key === 71){
      alert('you press g!');
    }
  });
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
});
