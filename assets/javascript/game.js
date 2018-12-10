// Generate random number between 19-120 
// Each Crystal represents a hidden random number between 1-12
// Each time a Crystal is clicked, that number is added to user score total
// When player matches their score to the randomly generated score, wins ++
// If player goes over score losses++
// Game resets with new randomly generated numbers
// Total score set back to zero 
var gameRandomNumber;
var totalScore; 
var wins = 0;
var losses = 0;

var crystalList = [
    "assets/images/green_rupee.jpg",
    "assets/images/blue_rupee.jpg",
    "assets/images/red_rupee.jpg",
    "assets/images/yellow_rupee.jpg"
]; 

function gameStart() {

    gameRandomNumber = Math.floor((Math.random() * 120) + 19); 
    console.log(gameRandomNumber);

    $("#game-number").text(gameRandomNumber);

    setCrystals(); 

}

function setCrystals() {

    for (var i = 0; i < crystalList.length; i++) {
        var crystalImages = $("<img>");
        crystalImages.addClass("crystal-images");
        crystalImages.attr("src", crystalList[i]);
        crystalImages.attr("value", (Math.floor(Math.random() * 12) + 1)); 
        $(".crystal-button").append(crystalImages);
    }

}

gameStart(); 
