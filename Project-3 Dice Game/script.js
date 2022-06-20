let img = document.querySelectorAll("img");

let randomNum1 = Math.floor(Math.random() * 6) + 1;

let randomImageSource1 = "images/dice" + randomNum1 + ".png";

img[0].setAttribute("src", randomImageSource1);

let randomNum2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNum2 + ".png";

img[1].setAttribute("src", randomImageSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 win";
} else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 win 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
