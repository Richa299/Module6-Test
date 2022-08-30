function validate(){
    let first_Name=document.getElementById("first-name").value
    let last_Name=document.getElementById("last-name").value
    let email_Input=document.getElementById("email").value
    let phone_Number_Input=document.getElementById("phone-number").value
    let batch_Number_Input=document.getElementById("batch-number").value
    let module_Input=document.getElementById("module").value
    let tnc_Input=document.getElementById("TnC").checked
    let error=false;



//==============================validation for first name=============================

    if(first_Name.length<3){
         document.getElementById("invalid-first-name").style.display="block";
         error=true;
    }
    else if(first_Name.includes(0)||
            first_Name.includes(1)|| first_Name.includes(2)||
            first_Name.includes(3)|| first_Name.includes(4)||
            first_Name.includes(5)|| first_Name.includes(6)||
            first_Name.includes(7)|| first_Name.includes(8)||
            first_Name.includes(9)){
        document.getElementById("invalid-first-name").style.display="block";
        error=true;
    }
    else if(parseInt(first_Name)){
        document.getElementById("invalid-first-name").style.display="block";
        error=true;
    }
    else{
        document.getElementById("invalid-first-name").style.display="none";   
    }


//==================================validation for last name==============================

    if(last_Name.length<3){
        document.getElementById("invalid-last-name").style.display="block";
        error=true;
    }
    else if(parseInt(last_Name)){
        document.getElementById("invalid-last-name").style.display="block";
        error=true;
    }
    else{
        document.getElementById("invalid-last-name").style.display="none";   
    }
    

//===================================validation for email=====================================

    if(email_Input.includes("@")&&
    email_Input.includes(".")&&
    email_Input.lastIndexOf(".")<email_Input.length-2&&
    email_Input.lastIndexOf("@")!=0){
        document.getElementById("invalid-email").style.display="none";
    }
    else{
        document.getElementById("invalid-email").style.display="block"; 
        error=true;  
    }

//=====================================validation for phone====================================


console.log(parseInt(phone_Number_Input));
  if(phone_Number_Input.length!=10){
    document.getElementById("invalid-phone-number").style.display="block";
    error=true;
}
else if(parseInt(phone_Number_Input)){
    document.getElementById("invalid-phone-number").style.display="none"; 
}
else{
    document.getElementById("invalid-phone-number").style.display="block";
    error=true;
}

//=====================================validation for batch====================================

if(batch_Number_Input=="select"){
    document.getElementById("invalid-batch-no").style.display="block";
    error=true;
}
else{
    document.getElementById("invalid-batch-no").style.display="none";   
}

//=====================================validation for module====================================

if(module_Input=="select"){
    document.getElementById("invalid-module").style.display="block";
    error=true;
}
else{
    document.getElementById("invalid-module").style.display="none";   
}


//=====================================validation for tnc====================================

if(tnc_Input!=true){
    document.getElementById("invalid-tnc").style.display="block";
    error=true;
}
else{
    document.getElementById("invalid-tnc").style.display="none";   
}

if(error==false){
document.getElementById("first-name").value="";
document.getElementById("last-name").value="";
document.getElementById("email").value="";
document.getElementById("phone-number").value="";
document.getElementById("batch-number").value="";
document.getElementById("module").value="";
document.getElementById("TnC").checked=""

document.getElementById("invalid-first-name").style.display="none";
document.getElementById("invalid-last-name").style.display="none";  
document.getElementById("invalid-email").style.display="none"; 
document.getElementById("invalid-phone-number").style.display="none";
document.getElementById("invalid-batch-no").style.display="none";
document.getElementById("invalid-module").style.display="none";
document.getElementById("invalid-tnc").style.display="none";

alert("Your details have been saved successfully")
}

}