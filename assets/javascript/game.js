
var gameRandomNumber; 
var totalScore = 0;
var wins = 0; 
var losses = 0;

var crystalList = [
    "assets/images/green_rupee.jpg",
    "assets/images/blue_rupee.jpg",
    "assets/images/red_rupee.jpg",
    "assets/images/yellow_rupee.jpg"
];

function resetGame() {

    console.log("inResetGame");
    totalScore = 0; 

    gameRandomNumber = Math.floor((Math.random() * 120) + 19); 
    console.log(gameRandomNumber);

    $("#game-number").html(gameRandomNumber);
    $("#user-added-number").html(totalScore);
    $(".crystal-button").empty();

    resetCrystals(); 
}

function resetCrystals() {

    for (var i = 0; i < crystalList.length; i++) {

        var crystalImages = $("<input>");
        crystalImages.addClass("crystal-image");
        crystalImages.attr("type", "image");
        crystalImages.attr("src", crystalList[i]);
        crystalImages.attr("value", (Math.floor(Math.random() * 12) + 1)); 
        $(".crystal-button").append(crystalImages);
    }
    
    gamePlay(); 
}


function gamePlay() {

    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue); 
        console.log(crystalValue); 
        totalScore += crystalValue;
        console.log(totalScore);
        $("#user-added-number").text(totalScore); 

        if (totalScore == gameRandomNumber) {

            wins++;
            console.log(wins);
            $("#wins-count").html(wins);
            resetGame();

        }

        else if (totalScore > gameRandomNumber) {

            losses++;
            console.log(losses);
            $("#losses-count").html(losses); 
            resetGame(); 
        }
    });

};

resetGame(); 
