function updateClock() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    const secondsFaction = (seconds / 60) * 360;
    const minutesFaction = (minutes / 60) * 360;
    const hoursFaction = (hours / 12) * 360;

    const hoursHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    hoursHand.style.transform=`rotate(${hoursFaction}deg)`
    minuteHand.style.transform=`rotate(${minutesFaction}deg)`
    secondHand.style.transform=`rotate(${secondsFaction}deg)`
}

setInterval(updateClock, 1000);