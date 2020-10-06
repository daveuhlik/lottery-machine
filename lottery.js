const button = document.getElementById('button');
const counter = document.getElementById('counter');
const actualNumber = document.getElementById('number');
let numberList = [];

let randomNumber = Math.floor(Math.random() * 99);

button.addEventListener('click', function() {
	actualNumber.textContent = randomNumber;
	actualNumber.classList.add('big-num');
	counter.textContent = randomNumber;
	counter.unshift(randomNumber)
	console.log(counter.value);
})

