$(document).ready(function() {
  $("#form").submit(function(event) {

    var sent = $("#sentence").val();

    var splitSent=[];
    splitSent = sent.split(" ");

    var newSent=[];
    splitSent.forEach (function(word) {
      // debugger;

      if (word.length>=3) {

        newSent.push(word);
      };
    });

    var finalSent=[];
    newSent.reverse();
    var newArr = newSent.join(" ");
    console.log(typeof newArr);
    finalSent = newArr;

    $("#result").show();
    $("#form").hide();

    $(".sentence").text(finalSent);

    event.preventDefault();
  });
});
