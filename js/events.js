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

function submitIt() {
  $('form').on('submit', function() {
    if ($("input:first").val() === "correct") {
      alert("");
      return;
    }
    alert("you entered the wrong value");
    return;
  })
}

$(document).ready(function(){


});
