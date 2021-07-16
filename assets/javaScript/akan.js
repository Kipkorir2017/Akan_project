function myFunction(){
    // declaring Variables
    var CC =document.getElementById("century").value;
    var YY =document.getElementById("year").value;
    var MM=document.getElementById("month").value;
    var DD =document.getElementById("day").value;
    // declaring variable for the formulae to calculate day
    var day= parseInt((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD )%7);

        // declaring variables for the gender and names 
   
    var genders = document.getElementsByName("gender").checked;
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
    var male =["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
   
    // using flow control i.e if and else statements
    if (day>=0){
        alert("Your Akan Name is : "+male[0]+", born on: "+days[0])

    }
    // else if (day<3 && gender==="male"){
    //     alert(male[1],days[1])

    // }
    // else if (day==2 && gender==="male"){
    //     alert(male[2],days[2])

    // }
    // else if (day==3 && gender==="male"){
    //     alert(male[3],days[3])

    //  }
    //  else if (day==4 && gender==="male"){
    //     alert(male[4],days[4])

    // }
    //  else if (day==5 && gender==="male"){
    //      alert(male[5],days[5])

    //  }
    //  else if (day==5 && gender==="male"){
    //     alert(male[5],days[5])

    //  }
    else{
        alert("Wrong input")
    }



}