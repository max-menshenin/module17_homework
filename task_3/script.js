/* Задание 3.
Сверстайте кнопку, клик на которую будет выводить на экран следующие данные:
Размеры экрана пользователя (ширина и высота).
Координаты местонахождения пользователя. Если пользователь отказался дать доступ к местоположению 
или данная функция недоступна в бразуере, вывести вместо координат сообщение «Информация о местоположении недоступна».*/

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let screenHeight = window.screen.height; var screenWidth = window.screen.availWidth;
  if (navigator.geolocation) {
    alert(`Размер экрана ${screenHeight} х ${screenWidth}`);

  }
  else {
    alert('Информация о местоположении недоступна');
  }
}
);


