function replaceTheDices() {

    var number1 = Math.floor(Math.random() * 6) + 1;
    if (number1 >= 1 && number1 <= 6) {
        document.querySelector('.img1').setAttribute('src', './images/dice' + number1 + '.png');
    }

    var number2 = Math.floor(Math.random() * 6) + 1;
    if (number2 >= 1 && number2 <= 6) {
        document.querySelector('.img2').setAttribute('src', './images/dice' + number2 + '.png');
    }

    if (number1 == number2) {
        document.querySelector('.winner-title').innerHTML = "Draw!!";
    } else if (number1 > number2) {
        document.querySelector('.winner-title').innerHTML = "Player 1 🚩 wins!!";
    } else if (number1 < number2) {
        document.querySelector('.winner-title').innerHTML = "🚩 Player 2 wins!!";
    }

}