

window.addEventListener('load', calculateTime)

function calculateTime(){
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = (hour > 18 && hour <= 22) ? 'Вечер' : (hour > 22 && hour <= 5) ? 'Ночь' : (hour > 5 && hour <= 9) ? 'Утро' : 'День';
    let dayNames = ["ВОС", "ПОН", "ВТ", "СР", "ЧЕТ", "ПЯТ", "СУБ"];




    document.getElementById('day').innerHTML = dayNames[dayNumber];
    document.getElementById('hour').innerHTML = hour < 10 ? '0' + hour : hour;
    document.getElementById('minute').innerHTML = minute < 10 ? '0' + minute : minute;
    document.getElementById('ampm').innerHTML = ampm
    setTimeout(calculateTime, 200);


}







