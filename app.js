$(function() {

    var count = 0;
    var nextTurn = "<i class='material-icons xsymbol'>clear</i>"
    var winningChoices = [
        ["one", "two", "three"],
        ["four", "five", "six"],
        ["seven", "eight", "nine"],
        ["one", "four", "seven"],
        ["two", "five", "eight"],
        ["three", "five", "nine"],
        ["one", "five", "nine"], 
        ["three", "five", "seven"]
    ];

    gameOver();
    Play();
    
    function gameOver() {
        $(".new-game").on("click", function() {
            $(".item").empty();
            $(".gameOver").addClass("hidden");
            $(".gameOver p").html("");
            count = 0;
        });
    };
    function Play() {
        $(".item").click(function() {
            if ($(this).text().length == 0) {
                $(this).append(nextTurn);
                changeTurn();
                var html = $('#' + this.id).html();
                var symbol = '';
                if (html.includes('xsymbol')) {
                    symbol = 'xsymbol';
                } else if (html.includes('osymbol')) {
                    symbol = 'osymbol';
                }
                checkWinner(this.id, symbol);
                count += 1;
                console.log(count);
            }
        });
    };
    function checkWinner(id, symbol) {
        var options = [];
        for (var i = 0; i < winningChoices.length; i++) {
            if (winningChoices[i].indexOf(id) != -1) {
                options.push(winningChoices[i])
            }
        }
        for (var j = 0; j < options.length; j++) {
            var p = 0;
            for (var k = 0; k < options[j].length; k++) {
                if ($('#' + options[j][k]).html().includes(symbol)) {
                    p++;
                }
            }
            if (p === 3) {
                $(".gameOver").removeClass("hidden");
                $(".gameOver h2").after("<p> " + symbol + " is the winner<p>")
            } else if (count == 9) {
                alert("draw");
            }
            else {

            }
        }
    }
    function changeTurn() {
        if (nextTurn == "<i class='material-icons xsymbol'>clear</i>") {
            nextTurn = "<i class='material-icons osymbol'>radio_button_unchecked</i></br>";
        } else {
            nextTurn = "<i class='material-icons xsymbol'>clear</i>";
        }
    }
});
