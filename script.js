function ValidateForm()
{
    var uname=document.myform.username.value;
    var pwd=document.myform.pwd.value;
    if((uname==null) || (uname==""))
    {
        alert("username cannot be blank");
        return false;
    }
    else if(pwd.length<6)
    {
        alert("password must be atleast 6 charcters");
        return false;
    }
    

}