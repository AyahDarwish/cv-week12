const fNameSpan = document.querySelector('#fName');
const lNameSpan = document.querySelector('#lName');
const ageSpan = document.querySelector('#age');
const emailSpan = document.querySelector('#email');
const mobileSpan = document.querySelector('#mobile')

window.onload = () => {

    fetch('profile.json')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        fNameSpan.textContent = data.fName;
        lNameSpan.textContent = data.lName;
        ageSpan.textContent = data.age;
        emailSpan.textContent = data.email;
        mobileSpan.textContent = data.mobile;
    })
    
}