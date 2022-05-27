/* Задание 5.
        Реализовать чат на основе эхо-сервера wss://ws.ifelse.io
        Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
        При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
        Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:
        Добавить в чат механизм отправки гео-локации:
        При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией. Сообщение, которое отправит обратно эхо-сервер, не выводить.
Удачи!

Зад
*/

const chatMessages = document.getElementById("chatMessages");
const btnSendMessage = document.querySelector('.sendMessage');
const btnGetGeo = document.querySelector('.getGeo');
const textInput = document.querySelector('.chatMessages');
const output = document.getElementById("output");

const websocketUri = 'wss://ws.ifelse.io/';

window.onload = (event) => {
	websocket = new WebSocket(websocketUri);
	websocket.onopen = function (evt) {
		console.log("CONNECTED");
	};
	websocket.onclose = function (evt) {
		console.log("DISCONNECTED");
	};
	websocket.onmessage = function (evt) {
		if (evt.data.indexOf('https://www.openstreetmap.org/#map=18') === -1) {
			appendMessage(
				evt.data, 'response'
			);
		}
	};
	websocket.onerror = function (evt) {
		appendMessage(
			'ERROR:' + evt.data, 'error'
		);
	};
}

function appendMessage(messageText, type) {
	let li = document.createElement("li");
	li.setAttribute("id", type);
	li.appendChild(document.createTextNode(messageText));
	chatMessages.appendChild(li);
}

btnSendMessage.addEventListener('click', () => {
	const message = textInput.value;
	appendMessage(message, 'request');
	textInput.value = '';
	websocket.send(message);
});

const error = () => {
	appendMessage('Не удалось определить местоположение', 'error');
}

const success = (position) => {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const openRequest = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	appendMessage(openRequest, 'geodata');
	websocket.send(openRequest);
}

btnGetGeo.addEventListener('click', () => {
	if (!navigator.geolocation) {
		appendMessage('Определение геолокации не поддерживается браузером', 'error');
	} else {
		navigator.geolocation.getCurrentPosition(success, error);
	}
});