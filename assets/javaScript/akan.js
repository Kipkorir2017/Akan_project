function akan(){
    // declaring Variables
    var CC =document.getElementById("century").value;
    var YY =document.getElementById("year").value;
    var MM=document.getElementById("month").value;
    var DD =document.getElementById("day").value;
    
    // declaring variable for the formulae to calculate day
    var day=parseInt((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD )%7);

    // var day =new Date(+CC+ ","+YY+","+MM+","+DD);
    // var dayOfTheWeek = day.getDay();

        // declaring variables for the gender and names 
   
   
    
   
   
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
    var male =["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    if (CC.length<2 || CC.length>2){
        alert("invalid century");
        return false;
    }
    else if(YY.length<2 || YY.length>2 ){
        alert("invalid year")
        return false;
    }
    else if(MM<1 || MM >12){
        alert("invalid month");
        return false;
    }
    else if (DD<1 || DD >31){
        alert("Invalid Date")
    }
    else if (MM == 4 || MM==6  || MM == 9 || MM == 11) { 
        alert("Please enter a valid date!");
    }
    else if(MM==2 || MM>29){
        alert("please Enter a Valid date")
    }

   // validating day and gender
    var genderMale = document.getElementById("gents").checked;
    var genderFemale=document.getElementById("ladies").checked;
    
     if(day ==0 && genderMale===true){
        alert("Name: "+male[0])
        return false
    }
    else if(day==1 && genderMale===true){
        alert("Name: "+male[1]+"born on"+days[1])
        return false;
    }
    else if(day ==2 && genderMale===true){
        alert("Name: "+male[2]+"born on"+days[1])
        return false;
    }
    else if(day ==3 && genderMale===true){
        alert("Name: "+male[3]+"born on"+days[1])
        return false;
    }
    else if(day ==4 && genderMale===true){
        alert("Name: "+male[4]+"born on"+days[4])
        return false;
    }
    else if(day ==5 && genderMale==true){
        alert("Name: "+male[5]+"born on"+days[5])
        return false;
    }
    else if(day==6 && genderMale==true){
        alert("Name: "+male[6]+"born on"+days[6])
        return false;
    }
    else{
        alert("You did not select your Gender")
    }
   
   

       

    
}