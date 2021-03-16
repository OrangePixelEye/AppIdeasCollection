function validateForm(form) {
    var binary = form.number.value;
    var test_result = (/[01]/).test(binary);
    if(test_result == false)
    {
        alert("Number is not binary");
        return false;
    }
    else
    {
        convertToDec(binary);
        //prevents reloading page
        return false;
    }
}

function convertToDec(number)
{
    var digit = parseInt(number, 2);
    document.forms["form"]["result"].value = digit;
}