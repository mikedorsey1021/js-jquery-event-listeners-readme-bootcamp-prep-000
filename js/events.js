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
    if (key == 71){
      alert('you press g!');
    }
  });
}

function submitIt (){
  $('form').on('submit', function (key){
    if (key === 13){
      alert('Your form is going to be submitted now.');
    }
  });
}





$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
});
