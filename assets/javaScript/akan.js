function akan(){
    // declaring Variables
    var CC =document.getElementById("century").value;
    var YY =document.getElementById("year").value;
    var MM=document.getElementById("month").value;
    var DD =document.getElementById("day").value;
    
    // declaring variable for the formulae to calculate day
    var day=(((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD )%7;
  

        // declaring variables for the gender and names 
   
    var genders = document.getElementsByName("gender").checked=true;
    
   
   
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
    var male =["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    if (day>=0){
        alert("Your Akan Name is : "+male[0]+", born on: "+days[0])
    }
       

    
}