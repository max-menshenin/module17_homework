/* Задание 3.
Сверстайте кнопку, клик на которую будет выводить на экран следующие данные:
Размеры экрана пользователя (ширина и высота).
Координаты местонахождения пользователя. Если пользователь отказался дать доступ к местоположению 
или данная функция недоступна в бразуере, вывести вместо координат сообщение «Информация о местоположении недоступна».*/

const btn = document.querySelector('.btn');
const screenP = document.querySelector('#screen');
const coordsP = document.querySelector('#coords');

function getScreenSize() {
	screenP.innerText = `Ширина экрана:${window.screen.width}px Высота экрана:  ${window.screen.height}px`;
}

const error = () => {
	status.textContent = 'Информация о местоположении недоступна';
}

const success = (position) => {
	console.log('position', position);
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;

	coordsP.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
}

btn.addEventListener('click', () => {
	getScreenSize();

	if (!navigator.geolocation) {
		status.textContent = 'Определение геолокации не поддерживается браузером';
	} else {
		navigator.geolocation.getCurrentPosition(success, error);
	}
});

