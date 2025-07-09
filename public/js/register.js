var eye=document.getElementById("eye");
var pass=document.getElementById("Pass");
// var eyeIcon=document.getElementsByClassName("Eye")[0];
// var slashEyeIcon=document.getElementsByClassName("slashEye")[0];
var Form=document.getElementById("Register");
var username=document.getElementById("Username");
var email=document.getElementById("Email");
var pass=document.getElementById("Pass");

/* Username and password error message */

var userError=document.createElement("p");
userError.textContent="هذا الحقل مطلوب";
userError.classList.add("userError");

var emailError=document.createElement("p");
emailError.textContent="هذا الحقل مطلوب";
emailError.classList.add("emailError");


var passError=document.createElement("p");
passError.textContent="هذا الحقل مطلوب";
passError.classList.add("passError");


// username.setCustomValidity("x");

// username.addEventListener("input",function(e){
//     // alert(this.value.length==0);
//     if(this.value.length==0)
//     {
//         username.parentNode.insertBefore(userError,username.nextSibling);
//     }
//     else
//     {
//         userError.remove();
//     }
// })

username.addEventListener("blur",function(e){
    if(this.value.length==0)
    {
        this.parentNode.insertBefore(userError,this.nextSibling);
    }
    else
    {
        userError.remove();
    }
})


email.addEventListener("blur",function(e){
    if(this.value.length==0)
    {
        this.parentNode.insertBefore(emailError,this.nextSibling);
    }
    else
    {
        emailError.remove();
    }
})

pass.addEventListener("blur",function(e){
    if(pass.value.length==0)
    {
        eye.parentNode.insertBefore(passError,eye.nextSibling);
    }
    else
    {
        passError.remove();
    }
})

Form.addEventListener("submit",function(e){
   
    if(username.value.length==0 || pass.value.length==0 || email.value.length==0)
    {
        e.preventDefault();

        if(pass.value.length!= 0 && this.contains(passError))
        {
            passError.remove()
        }
        else if(pass.value.length==0 && !this.contains(passError))
        {
            eye.parentNode.insertBefore(passError,eye.nextSibling);
        }

        if(username.value.length!=0 && this.contains(userError))
        {
            userError.remove();
        }
        else if(username.value.length==0 && !this.contains(userError))
        {
            username.parentNode.insertBefore(userError,username.nextSibling);
        }


        if(email.value.length!=0 && this.contains(emailError))
        {
            emailError.remove();
        }
        else if(email.value.length==0 && !this.contains(emailError))
        {
            email.parentNode.insertBefore(emailError,email.nextSibling);
        }
    }
    
});

eye.addEventListener("click",function(e){
    if(pass.type=="password")
    {
        eye.childNodes[0].classList.remove("Eye");
        eye.childNodes[0].classList.add("slashEye");
        pass.type="text";
        
    }
    else
    {
        eye.childNodes[0].classList.remove("slashEye");
        eye.childNodes[0].classList.add("Eye");
        pass.type="password"; 
    }
});

