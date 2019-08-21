const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});//when sign up button is clicked, this class is added

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});//when sign in button is clicked, this class is removed

const sign_up = document.getElementById("sign_up");
sign_up.addEventListener("click",validate);

function validate()
{
    const emailId = document.getElementById('email123').value;
    const atpos = emailId.indexOf('@'); //position where @ appears the first time
    const dotpos = emailId.lastIndexOf('.'); //position where . appers the last time

    if(emailId == "") //Cant leave the email id field empty
    { 
        alert("You can not leave the Email ID blank.");
        document.getElementById('email123').focus(); //to bring the cursor to email id again
        return false;
    }
 
    if(atpos < 1 || (dotpos - atpos < 2)) //. can not come directly after @
    {
        alert("Email ID entered is incorrect");
        document.getElementById('email123').focus();//to bring the cursor to email id again
        return false;
    }

    const mobNo = document.getElementById('mobNo').value;

    if(mobNo == "") //cant leave the mobile number field empty
    {
        alert("You can not leave the Mobile Number blank.");
        document.getElementById("mobNo").focus();//to bring the cursor to email id again
        return false;
    }

    if(mobNo.length != 10) //length of mobile number cant not extend above 10 digits
    {
        alert("The Mobile Number should be of the format ****(10 digits).");
        document.getElementById("mobNo").focus();//to bring the cursor to email id again
        return false;       
    }

    const pass123 = document.getElementById('pass123').value;

    if(pass123 == "") //cant leave the password empty
    {
        alert("You can not leave the Password blank.");
        document.getElementById("pass123").focus();//to bring the cursor to email id again
        return false;        
    }

    if(pass123.length <= 5) //the minimum length of password needs to be 5
    {
        alert("The Password should have more than 5 characters.");
        document.getElementById("pass123").focus();//to bring the cursor to email id again
        return false;       
    }

    if(pass123[0] == pass123[0].toUpperCase()) //First letter cant be capital
    {
        alert("The Password should not have first letter capital and should not have all numbers");
        document.getElementById("pass123").focus();//to bring the cursor to email id again
        return false;               
    }
}


var btn1 = document.getElementById("sign_up");
var details = [];

btn1.addEventListener("click",handler); //Click event added to the sign up button

function handler(e) //When sign up button is pressed, the entered data is added to local storage
{

e.preventDefault(); 

var email123 = document.getElementById("email123").value;
var pass123 = document.getElementById("pass123").value;
document.getElementById("email123").value="";
document.getElementById("pass123").value="";    
var info = {email123,pass123}; //variables used in local storage

details.push(info); //Pushing the entry to array

localStorage.setItem("Details",JSON.stringify(details)); //Converting array in JSON format before storing the data in local storage

}

var btn2 = document.getElementById("sign_in");
btn2.addEventListener("click",checker); //Click event added to the sign in button

function checker() //To check if the user has entered the same data that he did while signing up
{
   var email = document.getElementById("log_email").value;
   var pass = document.getElementById("log_pass").value;
   document.getElementById("log_email").value="";
   document.getElementById("log_pass").value="";

   details2 = JSON.parse(localStorage.getItem("Details"));//Accessing the local storage
  
   
   var i;
   //To check if the sign up and sign in details match or match
   for(i = 0; i < details2.length; i++) 
   { 
       if(email == details2[i].email123 && pass == details2[i].pass123)
       {
       alert("Login successsful"); //if details match
       break;
       }
   }
       
   if(i == details2.length) //if details dont match
   {
       alert("Incorrect Email ID or password"); 
   }
}