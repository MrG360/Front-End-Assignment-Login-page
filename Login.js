const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const  container = document.getElementById("container");

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function validateSignIn()
{
    var email=document.forms["signInForm"]["email1"].value;
   var pass=document.forms["signInForm"]["signinpass"].value;
  console.log(email+" "+pass);
   if(email==""||pass=="")
   {
       alert(" Field left empty");
   } 
    else if(pass.length<8)
    {
        alert("Password too short");
    }
    
}
function validateSignUp()
{
    var signUpname=document.forms["signUpForm"]["signupname"].value; 
    var emailSignUp=document.forms["signUpForm"]["email2"].value;
    var passSignUp=document.forms["signUpForm"]["signpass"].value;
    if(signUpname==""||emailSignUp==""||passSignUp=="")
    {
        alert("Field left empty");
    }
    else if(signUpname.length<4)
    {
        alert("Name too Short");
    }
    else if(signUpname.length>10)
    {
        alert("Name too Long");
    }
    else if(passSignUp.length<8)
    {
        alert("Password too short");
    }
}