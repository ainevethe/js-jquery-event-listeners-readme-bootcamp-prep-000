function getIt() {
  $('p').on("click", function () {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function () {
    $("img").addClass("tasty");
  })
}

function pressIt() {
  $('#typing').on('keydown', function(press) {
    if(press.which == 71){
      alert('g was pressed');
    }
  });
}

$(document).ready(function(){


});
