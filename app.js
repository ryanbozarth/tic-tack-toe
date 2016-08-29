$(function() {

    var count = 0;

    var winningChoices = [
        ["one", "two", "three"], // horizontal
        ["four", "five", "six"],
        ["seven", "eight", "nine"],
        ["one", "four", "seven"], // vertical
        ["two", "five", "eight"],
        ["three", "five", "nine"],
        ["one", "five", "nine"], // diagonal
        ["three", "five", "seven"]
    ];

    var nextTurn = "<i class='material-icons xsymbol'>clear</i>"
 
    $(".newGame").click(function() {
        $(".item").empty();
    });


    Play();

    function Play() {
        $(".item").click(function() {
            if ($(this).text().length == 0) {
                $(this).append(nextTurn);
                changeTurn();
                count += 1;
                var html = $('#' + this.id).html();
                var symbol = '';
                if (html.includes('xsymbol')) {
                    symbol = 'xsymbol';
                } else if (html.includes('osymbol')) {
                    symbol = 'osymbol';
                }
                checkWinner(this.id, symbol);
            }

        });
    };

    function checkWinner(id, symbol) {
       // console.log(id, symbol);
        var options = [];
        for (var i = 0; i < winningChoices.length; i++) {
            if (winningChoices[i].indexOf(id) != -1) {
                options.push(winningChoices[i])
            }
        }
        // console.log(options);
       
        for (var j = 0; j < options.length; j++) { ///
            var p = 0;
            for (var k = 0; k < options[j].length; k++) {
                if ($('#' + options[j][k]).html().includes(symbol)){
                	p++                }

            }
        if (p == 3) {
        	alert("winner");
        }
        
 
        }
    }


    function changeTurn() {
        if (nextTurn == "<i class='material-icons xsymbol'>clear</i>") {
            nextTurn = "<i class='material-icons osymbol'>radio_button_unchecked</i></br>";

            // verify gameOver condidtions

        } else {
            nextTurn = "<i class='material-icons xsymbol'>clear</i>";
        }
    }


});
