/* Задание 4. Сверстайте кнопку, по клику на которую будет отправляться запрос к Timezone API. В запросе нужно отправить координаты местоположения пользователя, полученные с помощью Geolocation API. В ответ на запрос придёт объект, из которого нужно вывести на экран следующую информацию:

        временная зона, в которой находится пользователь: параметр timezone;
        местные дата и время: параметр date_time_txt.

        Строка запроса к API выглядит следующим образом:
https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=latitude&long=longitude.
Вместо latitude и longitude нужно подставить широту и долготу.
*/


const btn = document.querySelector('.btn-test');
const status = document.querySelector('#status');
const qcURL = document.querySelector('.URL');

const error = () => {
    status.textContent = 'Местоположение не найдено';
}

const getTimezone = async (latitude, longitude) => {
    const response = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=ca4dee1db1394658a0a988f886b6beb4&lat=${latitude}&long=${longitude}`);
    const timezoneJSON = await response.json();
    qcURL.innerHTML = `timezone= ${timezoneJSON.timezone}; date_time_txt=${timezoneJSON.date_time_txt}`;
}

const success = (position) => {
    console.log('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.textContent = `latitude=${latitude} longitude=${longitude}`;
    const requestResult = getTimezone(latitude, longitude);

}

btn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        status.textContent = 'Определение геолокации не поддерживается браузером';
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});