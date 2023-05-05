import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const inputDate = document.querySelector('#datetime-picker');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');
const currentDateTimer = new Date();
let selectedDate;
let intervalId;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0] <= currentDate) {
      window.alert('Please choose a date in the future');
    } else if (!intervalId) {
      startBtn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;

  const selectDate = new Date(selectedDate);
  intervalId = setInterval(() => {
    const timeMs = selectDate - new Date();
    const { days, hours, minutes, seconds } = convertMs(timeMs);
    if (timeMs <= 0) {
      intervalId === null;
      return clearInterval(intervalId);
    }
    daysTimer.textContent = days;
    hoursTimer.textContent = hours;
    minutesTimer.textContent = minutes;
    secondsTimer.textContent = seconds;
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
