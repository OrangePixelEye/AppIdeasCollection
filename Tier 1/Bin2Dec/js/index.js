var is_binary_conversion = true;

function changeConversion()
{
    is_binary_conversion = !is_binary_conversion;
}

function validateForm(form) 
{
    var fnumber = form.number.value;
    var test_result = false;
    var result = 0;
    if(is_binary_conversion)
    {
        test_result = (/[01]/).test(fnumber);
    }
    else
    {
        test_result = (/[09]/).test(fnumber);
    }
    
    if(test_result == false)
    {
        alert("Cannot convert this.");
        return false;
    }
    else
    {
        if(is_binary_conversion)
        {
            result = convertToDec(fnumber);
        }
        else
        {
            result = convertToBin(fnumber);
        }
        document.forms["form"]["result"].value = result;
        //prevents reloading page
        return false;
    }
}

function convertToDec(number)
{
    return parseInt(number, 2);
}

function convertToBin(number)
{
    return parseInt(number, 10);
}