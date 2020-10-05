const button = document.getElementById('button');
const counter = document.getElementById('counter');
const actualNumber = document.getElementById('number');

let randomNumber = Math.floor(Math.random() * 99);

button.addEventListener('click', function() {
	counter.textContent = randomNumber;
	actualNumber.textContent = randomNumber;
	actualNumber.classList.add('big-num');
})