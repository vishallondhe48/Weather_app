const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.icon');
// e208c7debc1bec5fd59ed37ae6308f61 api key
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

button.addEventListener('click', searchResult);
function searchResult() {
	fetch(
		'http://api.openweathermap.org/data/2.5/weather?q=' +
			inputValue.value +
			'&appid=e208c7debc1bec5fd59ed37ae6308f61'
	)
		.then((response) => response.json())
		.then((data) => {
			var nameValue = data['name'];
			var tempValue = data['main']['temp'];
			var tempIcon = data['weather'][0]['icon'];
			var descValue = data['weather'][0]['description'];

			name.innerHTML = nameValue;
			temp.innerHTML = tempValue;
			desc.innerHTML = descValue;
			icon.src = 'http://openweathermap.org/img/wn/' + tempIcon + '.png';
		})
		.catch((err) => alert('Wrong city Name!'));
}
