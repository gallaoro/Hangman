$(document).ready(function() {
    start();
    $(document).on("click", ".btn-try", function() {
        lettera = $(".input").val();
        controllalettera(lettera);
    });

});

var secretWord, maskedWord,
    foundarray=[false,false,false,false,false,false,false,false,false,false,false],
    ntry = 0,lettera;
var WORDS = ["abbaino", "cagnolino"];

var start = function() {
    secretWord = WORDS[Math.floor((Math.random() * WORDS.length))];
    maskedWord = "";
    for (var i = 0; i < secretWord.length - 1; i++) {
        maskedWord += " _";
    }
    $("#secret-word").html(maskedWord);
};

var controllalettera =function(lettera){
    for(var i=0;i<secretWord.length-1;i++){
        if(secretWord.charAt(i)===lettera){
            foundarray[i]=true;
            sostituisciconlettera();
        }
    }
};

var sostituisciconlettera=function(){
    var newmasked="";
    for(var i=0;i<secretWord.length-1;i++){
        if(foundarray[i]===true){
            newmasked+=" "+secretWord.charAt(i);
        }else{
            newmasked+=" _";
        }
    }
    $("#secret-word").html(maskedWord);
};
