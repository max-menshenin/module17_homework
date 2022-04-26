// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео).
// При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.
const btn = document.querySelector('.j-btn-test');
const img = document.getElementById('img');

let flag = true;

btn.addEventListener('click', () => {
    if (flag == true) {
        img.src = 'icon_01.svg';
        flag = !flag;
    }
    else {
        img.src = 'icon_02.svg';
        flag = !flag;
    }
});
