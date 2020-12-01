var Main = {

	 money : 10, 

	init:function () {
		var buttonLow = document.getElementById('buttonLow');
		var buttonSeven = document.getElementById('buttonSeven'); 
		var buttonHigh = document.getElementById('buttonHigh'); 
		var moneyButton = document.getElementById('addMoney'); 

		buttonLow.addEventListener('click', Main.evaluateGuess); 
		buttonSeven.addEventListener('click', Main.evaluateGuess); 
		buttonHigh.addEventListener('click', Main.evaluateGuess);
		moneyButton.addEventListener('click', Main.addMoreMoney); 
	},

	evaluateGuess:function(event) {
		var guess = event.target.id;
		var diceOne = Math.ceil(Math.random() * 6);
		var diceTwo = Math.ceil(Math.random() * 6); 
		var diceTotal = diceOne + diceTwo; 

		var textMoney = document.getElementById('textMoney'); 
		var diceAnswer = document.getElementById('answer'); 

		var buttonLow = document.getElementById('buttonLow');
		var buttonSeven = document.getElementById('buttonSeven'); 
		var buttonHigh = document.getElementById('buttonHigh');


		if (guess == 'buttonLow' && diceTotal < 7) {
			if (diceOne == 1 && diceTwo == 1) {
				var answers = 'Snake eyes'; 
			}
			var answers ='Du har rätt! Tärning 1: ' + diceOne + '. Tärning 2: ' + diceTwo;
			Main.money +=1;

		}

		else if (guess ==  'buttonSeven' && diceTotal == 7) {
			var answers ='Du har rätt! Tärning 1: ' + diceOne + '. Tärning 2: ' + diceTwo;
			Main.money +=4;
		}

		else if (guess == 'buttonHigh' && diceTotal > 7) {
			if (diceOne == 6 && diceTwo == 6) {
				var answers ='Box cart'; 
			}
			var answers ='Du har rätt! Tärning 1: ' + diceOne + '. Tärning 2: ' + diceTwo;
			Main.money +=1;
		}

		else {
			var answers ='Du har fel! Tärning 1: ' + diceOne + '. Tärning 2: ' + diceTwo;
			Main.money -=1;
		}

		if (Main.money < 1) {
			buttonLow.disabled = true;
			buttonSeven.disabled = true; 
			buttonHigh.disabled = true;
		}

		var moneyTxt = Main.money; 

		textMoney.innerHTML = moneyTxt+'$'; 
		diceAnswer.innerHTML = answers; 

	},

	addMoreMoney:function () {
		var buttonLow = document.getElementById('buttonLow');
		var buttonSeven = document.getElementById('buttonSeven'); 
		var buttonHigh = document.getElementById('buttonHigh'); 
		var textMoney = document.getElementById('textMoney'); 


		Main.money += 10;

		buttonLow.disabled = false;
		buttonSeven.disabled = false; 
		buttonHigh.disabled = false;

		textMoney.innerHTML = Main.money + "$"; 
	}

}
document.addEventListener('DOMContentLoaded', Main.init); 