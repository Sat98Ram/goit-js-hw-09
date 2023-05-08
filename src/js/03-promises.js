import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const selectedAmount = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  let delay = Number(firstDelay.value);
  const step = Number(delayStep.value);
  const amount = selectedAmount.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(obj => {
        Notiflix.Notify.success(`Fulfilled promise ${i} in ${obj.delay}ms`);
      })
      .catch(obj => {
        Notiflix.Notify.failure(`Rejected promise ${i} in ${obj.delay}ms`);
      });

    delay += step;
    console.log(delay);
  }
  event.currentTarget.reset();
});
