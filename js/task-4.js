const regform = document.querySelector('.login-form');
function formHandler(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email.trim() === '' || password.trim() === '') {
        alert('All form fields must be filled in');
    } else {
        const data = {
            email: email.trim(),
            password: password.trim(),
        };
        console.log(data);
        form.reset();
    } 
  
}
 
regform.addEventListener('submit', formHandler);