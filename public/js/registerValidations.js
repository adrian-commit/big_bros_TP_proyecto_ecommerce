let register = document.forms.register;
let elements = register.elements;
let firstName = elements.firstName;
let lastName = elements.lastName;
let email = elements.email;
let userName = elements.userName;
let password = elements.password;

firstName.addEventListener('blur', function(e) {
    if (e.target.value.length < 3 ) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
})

firstName.addEventListener('keydown', function(e) {
    if (e.target.value.length <= 3) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
})

lastName.addEventListener('blur', function(e) {
    if (e.target.value.length <= 3 ) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
})

lastName.addEventListener('keydown', function(e) {
    if (e.target.value.length <= 3) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
})

userName.addEventListener('blur', function(e) {
    if (e.target.value.length <= 4) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
})

userName.addEventListener('keydown', function(e) {
    if (e.target.value.length <= 4) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
})


/* let testEmail = /^[a-zA-Z0-9]+@{a-zA-Z0-9]+\.[a-zA-Z0-9]+$/; */
/* email.addEventListener('keypress', function(e) {
    if (testEmail.test(e.target.value)) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
}) */
email.addEventListener('keydown', function(e) {
    if (e.target.value.length <= 4) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
})

password.addEventListener('blur', function(e) {
    if (e.target.value.length <= 7) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
})

password.addEventListener('keydown', function(e) {
    if (e.target.value.length <= 7) {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'green';
    }
})



/* register.addEventListener('submit', function(e) {
    e.preventDefault();
    if (firstName.value.length < 3) {
        firstName.style.color = 'red';
    } else if (lastName.value.length <= 3){
        lastName.style.color = 'red';
    }else if (userName.value.length <= 3) {
        userName.style.color = 'red';
    }else if (email.value.length <= 3) {
        email.style.color = 'red';
    }else if (password.value.length <= 3) {
        password.style.color = 'red';
    } else {
        register.submit();
    }    
}) */

