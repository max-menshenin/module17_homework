// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео).
// При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.

const btn = document.querySelector('.j-btn-test');
// flag отвечает за смену отрисовки картинки

let flag = true;

btn.addEventListener('click', () => {
    if (flag == true) {
        btn.src = 'icon_01.svg';
    }
    else {
        btn.src = 'icon_02.svg';
        flag = !flag;
    }
});

