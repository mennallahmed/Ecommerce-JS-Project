document.getElementById("cart").setAttribute("data-count",cartItems)

/* Inputs Validation */
var submit = document.getElementById("submit");
var Uname = document.getElementById("user-name");
var email = document.getElementById("email");
var phone = document.getElementById("phone"); 
var userMsg = document.getElementById("text-msg")
var message = document.getElementById("user-msg")
var count =0;

submit.addEventListener("click",function(event){
 event.preventDefault()
  
  message.innerText="";
  count =0;

  if(!isNaN(Uname.value) || Uname.value == "undefined" || !Uname.value.match(/^[a-zA-Z ]{3,}$/gm))
  {
    Uname.setAttribute("style", " border-color:rgb(241, 40, 40);")
    message.setAttribute("style",`color: rgb(241, 40, 40)`);
    message.innerText+="Name Is Required\n"
    count++;
  } 
  if( !email.value.toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  )   
  {
    email.setAttribute("style", " border-color:rgb(241, 40, 40);")
    message.setAttribute("style",`color: rgb(241, 40, 40)`);
    message.innerText+=  "Email Is Not Valid\n";
    count++;
  }
  if(phone.value.length != 8 || !phone.value.match(/^01[0125][0-9]{8}$/gm)){
    phone.setAttribute("style", " border-color:rgb(241, 40, 40);")
    message.setAttribute("style",`color: rgb(241, 40, 40)`);
    message.innerText+= "Password Must Be 8 Chars At Least\n"
    count++;
  }
  if(!isNaN(userMsg.value) || userMsg.value == "undefined")
  {
    userMsg.setAttribute("style", " border-color:rgb(241, 40, 40);")
    message.setAttribute("style",`color: rgb(241, 40, 40)`);
    message.innerText+="Your Message Is Required\n"
    count++;
  } 
  if(count==0){
    Uname.setAttribute("style", " border-color:green;")
    phone.setAttribute("style", " border-color:green;")
    email.setAttribute("style", " border-color:green;")
    userMsg.setAttribute("style", " border-color:green;")
    message.setAttribute("style",`color: green`);
    message.innerText= "Your Message Sent Successfully\n"
  }
})
function changeBorder(event){
  event.target.setAttribute("style", " border-color:lightgray;")
}