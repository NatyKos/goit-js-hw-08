const username = document.getElementById('name-input');
const text = document.getElementById('name-output');
function inputHandler(event) {
    if (event.target.value.trim() !== '') {
    text.textContent = event.target.value.trim();
    } else {
    text.textContent = 'Anonymous';
   }
}
username.addEventListener('input', inputHandler);