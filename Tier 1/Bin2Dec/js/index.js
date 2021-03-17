var is_binary_conversion = true;

function changeConversion()
{
    is_binary_conversion = !is_binary_conversion;
    changePlaceholder();
    changeButton();
}

function changeButton()
{
    var text = document.getElementById('change').firstChild;
    text.data = text.data == "Dec2Bin" ? "Bin2Dec" : "Dec2Bin";
    //document.getElementByName().innerText == 
}

function changePlaceholder()
{
    var text = "";
    if(is_binary_conversion)
    {
        text = "Binary number";
    }
    else
    {
        text = "Decimal number";
    }
    document.getElementsByName('number')[0].placeholder = text;
}

function validateForm(form) 
{
    var fnumber = parseInt(form.number.value);
    var test_result = false;
    var result = 0;
    if(is_binary_conversion)
    {
        test_result = (/[01]/).test(fnumber);
    }
    else
    {
        test_result = (/[0-9]/).test(fnumber);
        
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
            result = parseInt(fnumber, 10);
        }
        else
        {
            result = fnumber.toString(2);
        }
        document.forms["form"]["result"].value = result;
        //prevents reloading page
        return false;
    }
}