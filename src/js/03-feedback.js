import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name=email]');
const message = document.querySelector('[name=message]');

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