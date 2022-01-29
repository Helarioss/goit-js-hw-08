import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const feedbackFormRef = document.querySelector('form.feedback-form');
feedbackFormRef.addEventListener('input', throttle(onFeedbackFormInput, 500));
feedbackFormRef.addEventListener('submit', onFeedbackFormSubmit);

readLocaleStorage();

function readLocaleStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!data) return;

  formData = data;
  const formDataKeys = Object.keys(formData);
  formDataKeys.forEach(key => (feedbackFormRef.elements[key].value = formData[key]));
}

function onFeedbackFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFeedbackFormSubmit(event) {
  event.preventDefault();

  console.log(formData);

  formData = {};
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
