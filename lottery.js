const button = document.getElementById('button');
let counter = document.getElementById('counter');
const actualNumber = document.getElementById('number');
const resetButton = document.getElementById('reset-button');
let numberList = [];



button.addEventListener('click', function() {
	let randomNumber = Math.floor(Math.random() * 99);
	if (randomNumber === 0) {
		randomNumber += 1;
	}
	// actualNumber.textContent = randomNumber;
	// actualNumber.classList.add('big-num');
	// counter.textContent = randomNumber;
	numberList.push(" " + randomNumber);
	counter.textContent = numberList;
	counter.classList.add('final-num');

	if (numberList.length === 5) {
	button.style.display = 'none';
	actualNumber.style.display = 'none';
	resetButton.style.display = 'block';
	}
})

resetButton.addEventListener('click', function() {
	reset();
})

function reset() {
	resetButton.style.display = 'none';
	button.style.display = 'block';
	numberList = [];
}



