// Displaying today's date in the footer
let dateObj = new Date();
let day = dateObj.getDay();
let month = dateObj.getMonth()+1;
let date = dateObj.getDate();
let year = dateObj.getFullYear();
let dayText;

if (day == 0) { 
	dayText = 'Sunday';
} else if (day == 1) {
	dayText = 'Monday';
} else if (day == 2) {
	dayText = 'Tuesday';
} else if (day == 3) {
	dayText = 'Wednesday';
} else if (day == 4) {
	dayText = 'Thursday';
} else if (day == 5) {
	dayText = 'Friday';
} else if (day == 6) {
	dayText = 'Saturday';
} 

let dateString = 'Today is ' + dayText + ', ' + month + '/' + date + '/' + year + '.';
let today = document.getElementById('today');
today.textContent = dateString;


// Function - update page content - add/remove site subtitle

let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');

function addSubtitle() {
	subtitle.textContent = "my expanded resume and portfolio";
}
function removeSubtitle() {
	subtitle.textContent = ""
}

title.addEventListener('mouseover', addSubtitle);
title.addEventListener('mouseout', removeSubtitle);


// Function - change CSS property - randomize subtitle color

let colors = ['black', 'pink', 'hotpink', 'deeppink'];

function randomSubtitleColor() {
	let randomNumber = Math.floor(Math.random() * 4);
	let color = colors[randomNumber];
	subtitle.style.color = color;
}

title.addEventListener('mouseover', randomSubtitleColor)

