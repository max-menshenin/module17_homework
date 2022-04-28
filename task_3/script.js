/* Задание 3.
Сверстайте кнопку, клик на которую будет выводить на экран следующие данные:
Размеры экрана пользователя (ширина и высота).
Координаты местонахождения пользователя. Если пользователь отказался дать доступ к местоположению 
или данная функция недоступна в бразуере, вывести вместо координат сообщение «Информация о местоположении недоступна».*/

const btn = document.querySelector('.j-btn-test');
const status = document.getElementById('status');

btn.addEventListener('click', () => {
  status.innerText = 'Width: ' + window.innerWidth +"\n"+ 'Height: '+ window.innerHeight;
    if ("geolocation" in navigator) {
        /* местоположение доступно */
    } else {
        /* местоположение недоступно */
        alert('denied');
    }
});