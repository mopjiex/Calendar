const calendarList = document.querySelector('.calendar__list');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const day = {
    0: [31, 'Январь'],
    1: [28, 'Февраль'],
    2: [31, 'Март'],
    3: [30, 'Апрель'],
    4: [31, 'Май'],
    5: [30, 'Июнь'],
    6: [31, 'Июль'],
    7: [31, 'Август'],
    8: [30, 'Сентябрь'],
    9: [31, 'Октябрь'],
    10: [30, 'Ноябрь'],
    11: [31, 'Декабрь'],
 }


const createDays = () => {
   
    const date = new Date();
    
    month.textContent = day[date.getMonth()][1];
    year.textContent = date.getFullYear();

    for(let i = 1; i <= day[date.getMonth()][0]; i++) {
        const li = document.createElement('li');
        li.classList.add('calendar__item');
        li.textContent = i;
        calendarList.appendChild(li);
    }

}

const checkCurrentDay = () => {
    const date = new Date();
    const calendarItem = document.querySelectorAll('.calendar__item');
    calendarItem.forEach(item => {
        if(item.textContent == date.getDate()) {
            item.classList.add('check');
        } else {
            item.classList.remove('check');
        }
    })

}
const date = new Date();
let month1 = date.getMonth();
let year1 = date.getFullYear();
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const changeMonth = (value) => {
    calendarList.innerHTML = '';
    if(value == 'prev') {
        if(month1 < 1) {
            year1--;
            month1 = 12;
        }
        month1--;
    } else if(value == 'next') {
        if(month1 > 10) {
            year1++;
            month1 = -1;
        }
        month1++;
    }

    month.textContent = day[month1][1];
    year.textContent = year1;
    for(let i = 1; i <= day[month1][0]; i++) {
        const li = document.createElement('li');
        li.classList.add('calendar__item');
        li.textContent = i;
        calendarList.appendChild(li);
    }
}

createDays();
checkCurrentDay();


prev.addEventListener('click', () => changeMonth('prev'));
next.addEventListener('click', () => changeMonth('next'));