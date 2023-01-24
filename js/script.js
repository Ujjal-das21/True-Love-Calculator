
var resultText = "";
//Button Click Function
// window.setTimeout(playSound("love"),21000);
$("#partner1").focus(function()
{
   playSound("love");
   
});

$(".button-click").click(function () {
   
    
    if ($('#partner1').val().length >= 1&&$('#partner2').val().length >=1 ){
        playSound("twinkle");
        netFunction();
       
        $('.button-click').prop('disabled', true);
  }

      


});
function netFunction() {
  
    
   var partner2;
    var result = percentGenerator();
    displayResult(result);
    setInterval(showResult, 300);
    $(".button-click").addClass("hidden-items");

}
function showResult() {
    $("#result").removeClass("hidden-items");

}
function percentGenerator() {
    var lovePercent = Math.floor(Math.random() * 100 + 1);
    console.log(lovePercent);
    return lovePercent;
}
function displayResult(result) {

    if (result == 100) {
        resultText = "Real love is always chaotic. You lose control; you lose perspective. You lose the ability to protect yourself. The greater the love, the greater the chaos. It’s a given and that’s the secret.";
    }
    else if (result >= 80 && result < 100) {
        resultText = "True love never dies for it is lust that fades away. Love bonds for a lifetime but lust just pushes away.";
    }
    else if (result >= 60 && result < 80) {
        resultText = "Falling in love is very real, but I used to shake my head when people talked about soul mates, poor deluded individuals grasping at some supernatural ideal not intended for mortals but sounded pretty in a poetry book.";
    }
    else if (result >= 40 && result < 60) {
        resultText = "Real love was dangerous. It got you from inside and held on tight. And if you didn’t let go fast enough you might be willing to do anything for its sake.";
    }
    else {
        resultText = "To live in hearts we leave behind is not to die.";
    }
    $("#love-percent").text(result + "%");
    $(".paragraph").text(resultText);

}
function playSound(fileName) {
    console.log("hi");
    var sound = new Audio('sounds/' + fileName + '.mp3');
    sound.play();
}
