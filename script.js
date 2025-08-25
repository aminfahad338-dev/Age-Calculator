const input = document.getElementById('input');
const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', () =>{
    const userInput = input.value;

    const now = new Date();
    const year = now.getFullYear();

    const dob = new Date(userInput);
    const userYear = dob.getFullYear();

    const age = year - userYear;
    result.textContent = `Your Age: ${age}`

})