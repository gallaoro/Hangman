$(document).ready(function () {
    start();
    $(document).on("click", ".btn-try", function () {
        lettera = $(".input").val();
        controllalettera(lettera);
        $(".input").val("");
        $(".input").focus();
    });

});

var secretWord, maskedWord,
        foundarray = [false, false, false, false, false, false, false, false, false, false, false,false,false,false,false],
        ntry = 0, lettera, vittoria = false;
var WORDS = ["abbaino", "cagnolino","coccodrillo","rubino","programmazione","tariffazione","fascia","immacolato","aiuole","casstello","zattera","caleidoscopio","terrestre","camaleonte","serbatoio","catarifrangente"];

var start = function () {
    secretWord = WORDS[Math.floor((Math.random() * WORDS.length))];
    maskedWord = "";
    for (var i = 0; i < secretWord.length; i++) {
        maskedWord += " _";
    }
    $("#secret-word").html(maskedWord);
};

var controllalettera = function (lettera) {
    var trovata = false;
    for (var i = 0; i < secretWord.length; i++) {
        if (secretWord.charAt(i) === lettera) {
            trovata = true;
            foundarray[i] = true;
            sostituisciconlettera();
            vittoria = controllavittoria();
            if (vittoria) {
                $("#secret-word").html("Hai vinto! Complimenti, ricarica per rigiocare!");
                $("#secret-word").after("<div>La parola era "+secretWord+"</div>");
                $(".btn-try").addClass("invisible");
                $(".input").addClass("invisible");
            }
        }
    }
    if (!trovata) {
        if (ntry > 4) {
            $(".img").attr("src", "img/impiccato6.png");
            $("#secret-word").html("Hai perso! Ricarica per riprovare!");
            $(".btn-try").addClass("invisible");
            $(".input").addClass("invisible");
        } else {
            ntry++;
            $(".img").attr("src", "img/impiccato" + ntry + ".png");
        }
    }
};

var sostituisciconlettera = function () {
    var newmasked = "";
    for (var i = 0; i < secretWord.length; i++) {
        if (foundarray[i] === true) {
            newmasked += " " + secretWord.charAt(i);
        } else {
            newmasked += " _";
        }
    }
    $("#secret-word").html(newmasked);
};
var controllavittoria = function () {
    for (var i = 0; i < secretWord.length; i++) {
        if (foundarray[i] === false) {
            return false;
        }
    }
    return true;
};
