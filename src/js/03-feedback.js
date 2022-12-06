import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
valueOfLocalStorage();

function onFormSubmit(e) { 
    e.preventDefault();

    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    
};

function valueOfLocalStorage(e) {
    
    const savedMessage = localStorage.getItem(STORAGE_KEY);
   
    if (savedMessage) {
        const parseSavedMessag = JSON.parse(savedMessage);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parseSavedMessag));
        
    }
};

function onFormInput(e) {

    formData[e.target.name] = e.target.value;
    console.log(formData)
    const data = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, data);
};