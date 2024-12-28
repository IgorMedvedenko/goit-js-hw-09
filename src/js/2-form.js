const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const formData = {
  email: '',
  message: '',
};

const saveFormData = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFormData = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  }
};

loadFormData();

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  saveFormData();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  emailInput.value = '';
  messageInput.value = '';
});
