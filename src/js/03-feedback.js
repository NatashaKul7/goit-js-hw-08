import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);


const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData) { 
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
};

function onInput () { 
    const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

function onSubmit(e) { 
    e.preventDefault();
    
    const data = localStorage.getItem('feedback-form-state');
  if (!data) {
    return;
  }
  console.log(JSON.parse(data));
  localStorage.removeItem('feedback-form-state');
  form.reset();
}












