function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const dayBtn = document.getElementById('daysBtn');
    const hourBtn = document.getElementById('hoursBtn');
    const minutesecBtn = document.getElementById('minutesBtn');
    const secBtn = document.getElementById('secondsBtn');

    dayBtn.addEventListener('click', () => {
        if (Number(days.value)) {
            hours.value = days.value * 24;
            minutes.value = hours.value * 60;
            seconds.value = minutes.value * 60;
        }
    });
    hourBtn.addEventListener('click', () => {
        if (Number(hours.value)) {
            days.value = hours.value / 24;
            minutes.value = hours.value * 60;
            seconds.value = minutes.value * 60;
        } if (days.value < 1) {
            days.value = 1;
        }
    });
    minutesecBtn.addEventListener('click', () => {
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
        seconds.value = minutes.value * 60;
        if (days.value < 1) {
            days.value = 1;
        }
    });
    secBtn.addEventListener('click', () => {
        minutes.value = seconds.value / 60;
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
        if (days.value < 1) {
            days.value = 1;
        }
    });

}