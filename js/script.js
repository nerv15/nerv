let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');


function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

    secondArrow.style = `transform: rotate(${seconds}deg);`
    minuteArrow.style = `transform: rotate(${minutes}deg);`
    hourArrow.style = `transform: rotate(${hours}deg);`

    hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();




    setTimeout(() => clock(), 1000)

}

clock()

// setTimeout()  - создает нам задержку, и говорит через сколько миллисекунд нам нужно что то выполнять



// Рекурсия - это когда функция вызывает саму себя

// let i = 0;

// function rek() {
//     console.log(i);
//     if( i < 10) {
//         i++
//         rek()
//     }
// }

// rek();


let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        for (let x = 0; x < tabs.length; x++) {
            tabs[x].classList.remove('active')
            links[x].classList.remove('active')
        }
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}



let secArrow = document.querySelector('.stopwatch__seconds'),
    minutaArrow = document.querySelector('.stopwatch__minutes'),
    houraArrow = document.querySelector('.stopwatch__hours'),
    btnArrow = document.querySelector('.stopwatch__btn'),
    spanArrow = document.querySelector('.tabsLink__span');


btnArrow.addEventListener('click', function () {
    if (btnArrow.innerHTML == 'start') {
        btnArrow.innerHTML = 'stop'
        spanArrow.classList.add('active')
    
        let i = 0;
        setTimeout(() => stopWatch(this, i), 1000);
    } else if (btnArrow.innerHTML == 'stop') {
        btnArrow.innerHTML = 'clear'
        spanArrow.classList.remove('active')
        spanArrow.classList.add('active_clear')

    } else {
        secArrow.innerHTML = 0 
        minutaArrow.innerHTML = 0
        houraArrow.innerHTML = 0
        btnArrow.innerHTML = 'start'
        spanArrow.classList.remove('active_clear')
    }

})



function stopWatch(btn, i) {

    if (btn.innerHTML == 'stop') {
        secArrow.innerHTML = i;
        if (i == 59) {
            i = 0
            secArrow.innerHTML = i
            if (minutaArrow.innerHTML == 59) {

                minutaArrow.innerHTML = i 
                houraArrow.innerHTML++
            }else {
                minutaArrow.innerHTML++
            }

        }
        else{
            i++;
            secArrow.innerHTML = i
        }

        setTimeout(() => stopWatch(btn, i), 1000);
    }

}




