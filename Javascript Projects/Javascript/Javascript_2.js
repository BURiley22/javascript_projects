//to validate that text has been entered in form.
function validateForm() {
    let x = document.forms["Contact_Form"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
}

function validateForm() {
    let x = document.forms["Contact_Form"]["lname"].value;
    if (x == "") {
        alert("Last Name must be filled out");
        return false;
    }
}

function validateForm() {
    let x = document.forms["Contact_Form"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
}