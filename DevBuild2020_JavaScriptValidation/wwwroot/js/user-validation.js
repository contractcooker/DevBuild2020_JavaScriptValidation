function validateForm() {
    let result = validateFirstName() & validateLastName() & validateEmail() & validatePassword() & confirmPassword();

    if (!result) {
        document.querySelector("#Feedback").innerHTML = "Your form has errors. See above.";
        return false;
    } else {
        return true;
    }
}

function validateFirstName() {
    let name = document.querySelector("#FirstName").value;
    let warning = '';

    if (!name || name.length < 3) {
        warning += 'Name is empty or too short. ';
    }


    if (warning == '') {
        document.querySelector("#FirstNameLabel").classList.remove('red');
        document.querySelector("#FirstName").classList.remove('red-bg');
        document.querySelector("#FirstNameFeedback").innerHTML = '';
        return true;
    } else {
        //display the warning in the span set up for it
        document.querySelector("#FirstNameFeedback").innerHTML = warning;
        //add a CSS class to an element
        document.querySelector("#FirstName").classList.add('red-bg');
        document.querySelector("#FirstNameLabel").classList.add('red');
        return false;
    }
}

function validateLastName() {
    let name = document.querySelector("#LastName").value;
    let warning = '';

    if (!name || name.length < 3) {
        warning += 'Name is empty or too short. ';
    }

    if (warning == '') {
        document.querySelector("#LastNameLabel").classList.remove('red');
        document.querySelector("#LastName").classList.remove('red-bg');
        document.querySelector("#LastNameFeedback").innerHTML = '';
        return true;
    } else {
        //display the warning in the span set up for it
        document.querySelector("#LastNameFeedback").innerHTML = warning;
        //add a CSS class to an element
        document.querySelector("#LastName").classList.add('red-bg');
        document.querySelector("#LastNameLabel").classList.add('red');
        return false;
    }


}
function validateEmail() {
    let mail = document.querySelector("#Email").value;
    let warning = '';
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        warning += 'invalid email';
    }
    if (warning == '') {
        document.querySelector("#EmailLabel").classList.remove('red');
        document.querySelector("#Email").classList.remove('red-bg');
        document.querySelector("#EmailFeedback").innerHTML = '';
        return true;
    } else {
        //display the warning in the span set up for it
        document.querySelector("#EmailFeedback").innerHTML = warning;
        //add a CSS class to an element
        document.querySelector("#Email").classList.add('red-bg');
        document.querySelector("#EmailLabel").classList.add('red');
        return false;
    }

}
function validatePassword() {
    let name = document.querySelector("#Password").value;
    let warning = '';

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(name)) {
        warning += 'Password does not meet requirements. Must be between 8-15 characters, 1 upper, 1 lower, 1 special. ';
    }

    if (warning == '') {
        document.querySelector("#PasswordLabel").classList.remove('red');
        document.querySelector("#Password").classList.remove('red-bg');
        document.querySelector("#PasswordFeedback").innerHTML = '';
        return true;
    } else {
        //display the warning in the span set up for it
        document.querySelector("#PasswordFeedback").innerHTML = warning;
        //add a CSS class to an element
        document.querySelector("#Password").classList.add('red-bg');
        document.querySelector("#PasswordLabel").classList.add('red');
        return false;
    }


}
function confirmPassword() {
    let name = document.querySelector("#Password").value;
    let name2 = document.querySelector("#ConfirmPassword").value;
    let warning = '';

    if (name !== name2) {
        warning += 'Passwords do not match';
    }

    if (warning == '') {
        document.querySelector("#ConfirmPasswordLabel").classList.remove('red');
        document.querySelector("#ConfirmPassword").classList.remove('red-bg');
        document.querySelector("#ConfirmPasswordFeedback").innerHTML = '';
        return true;
    } else {
        //display the warning in the span set up for it
        document.querySelector("#ConfirmPasswordFeedback").innerHTML = warning;
        //add a CSS class to an element
        document.querySelector("#ConfirmPassword").classList.add('red-bg');
        document.querySelector("#ConfirmPasswordLabel").classList.add('red');
        return false;
    }


}