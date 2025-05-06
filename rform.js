function validateForm()
{

    let name=document.getElementById("name").value;
    let address=document.getElementById("address").value;
    let email=document.getElementById("email").value;
    let pwd=document.getElementById("pwd").value;
    let phone=document.getElementById("phone").value;

    let nameerror=document.getElementById("name-error");
    let addresserror=document.getElementById("address-error");
    let emailerror=document.getElementById("email-error");
    let pwderror=document.getElementById("pwd-error");
    let phoneerror=document.getElementById("phone-error");

    nameerror.textContent="";
    addresserror.textContent="";
    emailerror.textContent="";
    pwderror.textContent="";
    phoneerror.textContent="";

    if (name=="")
    {
        nameerror.textContent="please enter ur name";
        return false;
    }
    if (address=="")
    {
        addresserror.textContent="please enter ur address";
        return false;
    }
    if (email=="" || !email.includes("@"))
    {
        emailerror.textContent="please enter ur email properly";
        return false;
    }
    if (pwd=="" || pwd.length<8)
    {
        pwderror.textContent="please enter ur password alteast 8 character";
        return false;
    }
    if (phone=="" || phone.length<10)
    {
        phoneerror.textContent="please enter a correct mobile number";
        return false;
    }  
    return true;  
}