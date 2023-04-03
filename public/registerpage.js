
    
function fun1(){
    var x = document.getElementById("password");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
 } 


function validation(){
    var form = document.getElementById("form");
    var gmail = document.getElementById("email").value;
    var regex = /^([a-z0-9.!#$%&'*+/=]+){3}@([a-zA-Z]+){3}([.]){1}([a-zA-Z/d]+){2}$/;
    
    var text =  document.getElementById("text");
    var submit =  document.getElementById("submit");
    if(gmail.match(regex)){
         
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML ="your email in valid";
        text.style.color = "green";
        text.style.size = "10px";
        submit.style.display = "block"
    }
    else {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML ="your email is invalid";
        text.style.color = "red";
        text.style.size = "10px";
        submit.style.display = "none"
    }
    if(email ==""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML =" ";
        text.style.color = "pink";
        text.style.size = "10px";
    }
    else {
        form.class == "invalid"
        return false
    }
}



function validation1(){
    var form = document.getElementById("form");
    var name = document.getElementById("name").value;
    var regex1 =  /^([a-zA-Z]+){1}$/;
    var submit1 =  document.getElementById("submit");
    var text1 =  document.getElementById("text1");
    if(name.match(regex1)){
        
        form.classList.add("valid");
        form.classList.remove("invalid");
        text1.innerHTML ="your name valid";
        text1.style.color = "green";
        text1.style.size = "10px";
        submit1.style.display = "block"
        
    }
    else{
        form.classList.add("invalid");
        form.classList.remove("valid");
        text1.innerHTML ="your name is invalid";
        text1.style.color = "red";
        text1.style.size = "10px";
        submit1.style.display = "none"
    }

    if(email ==""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text1.innerHTML =" ";
        text1.style.color = "pink";
        text1.style.size = "10px";
    
}  
} 


function validation2(){
    var form = document.getElementById("form");
    var phno = document.getElementById("phno").value;
    var regex2 = /^([0-9]+){9}$/;
    var text2 =  document.getElementById("text2");
    var submit2 =  document.getElementById("submit");
   
    if(phno.match(regex2)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text2.innerHTML ="your phno. in valid";
        text2.style.color = "green";
        text2.style.size = "10px";
        submit2.style.display = "block"
    }
    else{
        form.classList.add("invalid");
        form.classList.remove("valid");
        text2.innerHTML ="your phno. is invalid";
        text2.style.color = "red";
        text2.style.size = "10px";
        submit2.style.display = "none"
    }
    if(email ==""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text2.innerHTML =" ";
        text2.style.color = "pink";
        text2.style.size = "10px";
    }
}   


function validation3(){
    var form = document.getElementById("form");
    var pass = document.getElementById("password").value;
    var regex3 = /^([a-z0-9@]+){7}$/;
    var text3 =  document.getElementById("text3");
    var submit3 =  document.getElementById("submit");
    if(pass.match(regex3)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text3.innerHTML ="your password in valid";
        text3.style.color = "green";
        text3.style.size = "10px";
        submit3.style.display = "block"
       
    }
    else{
        form.classList.add("invalid");
        form.classList.remove("valid");
        text3.innerHTML ="your password is invalid";
        text3.style.color = "red";
        text3.style.size = "10px";
        submit3.style.display = "none"
    }
    if(email ==""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text3.innerHTML =" please enter";
        text3.style.color = "pink";
        text3.style.size = "10px";
    }
}