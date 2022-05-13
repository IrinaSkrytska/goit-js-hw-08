import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(onTextareaInput, 500));


populateTextarea();

let formData = {};

function onFormSubmit(evt) {

    evt.preventDefault();

 if (email.value === "" || message.value === "") {
        alert("Please fill in the empty fields");
        return;
 }
    
    console.log("Submit Form Done");
    console.log(formData);

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {

    formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
    const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!parsedData) return;
    
    email.value = parsedData.email || '';

    message.value = parsedData.message || '';
}

// -----------------------Another variant-----------------------

// const throttle = require('lodash.throttle');

// const LOCALSTORAGE_FEEDBACK_KEY = 'feedback-form-state';
// const FEEDBACK_DATA = {};

// const refs = {
//   feedbackForm: document.querySelector('.feedback-form'),
//   formInput: document.querySelector('input[name="email"]'),
//   formTextarea: document.querySelector('textarea[name="message"]'),
// };

// window.addEventListener('load', onWindowLoadSetInputValue);

// refs.feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
// refs.feedbackForm.addEventListener('submit', onFeedbackFormSibmit);

// function onFeedbackFormInput(event) {
//   const { name, value } = event.target;

//   FEEDBACK_DATA[name] = value;
//   localStorage.setItem(LOCALSTORAGE_FEEDBACK_KEY, JSON.stringify(FEEDBACK_DATA));
// }

// function onWindowLoadSetInputValue() {
//   try {
//     const formDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY));

//     refs.formInput.value = formDataObj.email;
//     refs.formTextarea.value = formDataObj.message;
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//   }
// }

// function onFeedbackFormSibmit(event) {
//   event.preventDefault();

//   const formDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY));

//   console.log(formDataObj);
//   localStorage.removeItem(LOCALSTORAGE_FEEDBACK_KEY);
//   refs.feedbackForm.reset();
// }