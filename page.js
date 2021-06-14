function validation(){
    
var Nom = document.getElementById("Nom").nodeValue;
var Prenom = document.getElementById("Prenom").nodeValue;
var Adresse = document.getElementById("Adresse").nodeValue;
var phone = document.getElementById("phone").nodeValue;
var quantite = document.getElementById("quantite").nodeValue;
var error_message = document.getElementById("error_message");
var text;
             


  
error_message.style.padding = "10px";
    
    if(Nom.length <5){
        text = "please enter valid Name";
         error_message.innerHTML = text;
        return false;
    }
    if(Prenom.length<5){
        text = "please enter valid Name";
         error_message.innerHTML = text;
        return false;
    }
    
    if(Adresse.length<=50){
        text = "please enter valid Name";
        error_message.innerHTML = text;
        
        return false;
    }
     
    if(phone.lenght != 10){
        text = "please enter valid phone number";
        error_message.innerHTML = text;
        
        return false;
    }
    
    if(quantite.lenght != 4){
        text = "please enter valid number";
        error_message.innerHTML = text;
        
        return false;
    }
  
    alert("form Submitted Successfull")
    return true;
    
    
}
*/