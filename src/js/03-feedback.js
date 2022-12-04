

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);
form.addEventListener('input', onFormInput);
valueOfLocalStorage();

function onFormSubmit(e) { 
    e.preventDefault();
   
    e.target.reset();
    //  console.log('reset form')
    localStorage.removeItem(STORAGE_KEY);
    
    console.log()
};


function onTextareaInput(e) { 
    const message = localStorage.setItem(STORAGE_KEY, e.target.value);
    // console.log(message)
};

function valueOfLocalStorage(e) {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
        textarea.value = savedMessage;
    }
};

function onFormInput(e) {
    console.log(e.target.name);
    console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    const data = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, data);

}