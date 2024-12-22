// Получаем элемент с текстом
// let str = document.querySelector('.myText');
// let test = document.querySelector('.test');

// let textElements = str.textContent;
// let scrollPosition = window.scrollY || window.pageYOffset;

// let resalt = textElements.split(' ');
// resalt.map(function (elem) {

//     console.log(`<span>${elem}</span>`);
// test.innerHTML += `<span>${elem}</span>`;

// })

// ----------parallax------------
let pinkOne = document.querySelector('.pink-1');
let pinkTwo = document.querySelector('.pink-2');
let pinkThree = document.querySelector('.pink-3');
let pinkFour = document.querySelector('.pink-4');
let pinkFive = document.querySelector('.pink-5');
let pinkSix = document.querySelector('.pink-6');
let blueOne = document.querySelector('.blue-1');
let blueTwo = document.querySelector('.blue-2');
let blueThree = document.querySelector('.blue-3');
let blueFour = document.querySelector('.blue-4');
let blueFive = document.querySelector('.blue-5');

window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    pinkOne.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
    pinkTwo.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 100 + 'px)';
    pinkThree.style.transform = 'translate(' + x * 50 + 'px, +' + y * 50 + 'px)';
    pinkFour.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
    pinkFive.style.transform = 'translate(' + x * 50 + 'px, +' + y * 50 + 'px)';
    pinkSix.style.transform = 'translate(' + x * 50 + 'px, +' + y * 50 + 'px)';

    blueOne.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 50 + 'px)';
    blueTwo.style.transform = 'translate(' + x * 30 + 'px, +' + y * 50 + 'px)';
    blueThree.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
    blueFour.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    blueFive.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

// анимация чисел
const countDownMin = 53;
const countDownMax = 100;
let countValue;
const countdownElement = document.querySelector('.number');
function updateCountDown() {
    if (countValue >= countDownMin && waves.classList.contains('waves-disactive')) {
        countdownElement.textContent = countValue;
        countValue--;
        setTimeout(updateCountDown, 10); // Вызываем функцию каждые 10 мс
    }
}

// Запускаем обратный отсчет
function updateCountUp() {
    if (countValue <= countDownMax && !waves.classList.contains('waves-disactive')) {
        countdownElement.textContent = countValue;
        countValue++;
        setTimeout(updateCountUp, 10); // Вызываем функцию каждые 10 мс
    }
}

// анимация блока с процентами и волной
let textCheckbox = document.querySelector('.text-checkbox');
let waves = document.querySelector('.waves');
let pinkCheckbox = document.querySelector('.pink-checkbox');
let text = document.querySelector('.text-checkbox div');
let percentBlock = document.querySelector('.percent-block');

textCheckbox.addEventListener('click', () => {
    waves.classList.toggle('waves-disactive');

    if (waves.classList.contains('waves-disactive')) {
        pinkCheckbox.classList.add('pink-checkbox-disactive');
        pinkCheckbox.classList.remove('pink-checkbox-active');
        percentBlock.classList.add('percent-block-disactive');
        percentBlock.classList.remove('percent-block-active');
        text.innerHTML = `Без поддержки митохондрий`;
        countValue = countDownMax;
        updateCountDown();
    }
    else {
        pinkCheckbox.classList.add('pink-checkbox-active');
        pinkCheckbox.classList.remove('pink-checkbox-disactive');
        percentBlock.classList.remove('percent-block-disactive');
        percentBlock.classList.add('percent-block-active');
        text.innerHTML = `С поддержкой митохондрий`;
        countValue = countDownMin;
        updateCountUp();
    }
});

// модалка с видео

let modalVideo = document.querySelector('.modal-video');
let videoClose = document.querySelector('.video-close');
let videoElement = document.querySelector('.modal-video video');
let videoSource = document.querySelector('.modal-video video source');
let videoSection = document.querySelector('.video-section');

videoSection.addEventListener('click', (elem) => {
    let action = elem.target.dataset.poster;

    if (action) {
        videoSource.src = `./media/video-${action}.mp4`;
        videoElement.load();
        modalVideo.classList.add('modal-video-active');
        modalVideo.classList.remove('modal-video-disactive');
        videoElement.play();
    }
});

videoClose.addEventListener('click', () => {
    modalVideo.classList.add('modal-video-disactive');
    modalVideo.classList.remove('modal-video-active');
    videoElement.pause();
    videoElement.currentTime = 0;
});



