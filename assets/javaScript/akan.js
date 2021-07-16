function myFunction(){
    // declaring Variables
    var CC =parseInt(document.getElementById("century").Value);
    var YY =parseInt(document.getElementById("year").Value);
    var MM=parseInt(document.getElementById("month").Value);
    var DD =parseInt(document.getElementById("day").Value);
    // declaring variable for the formulae to calculate day
    var day= (((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD )%7;

        // declaring variables for the names
    var male =["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var gender=["male","female"]

    // using flow control i.e if and else statements
    if (day==0 && gender=="male"){
        alert(male[0])

    }
    if (day==1 && gender=="male"){
        alert(male[1])

    }
    if (day==3 && gender=="male"){
        alert(male[3])

    }
    if (day==4 && gender=="male"){
        alert(male[4])

    }
    if (day==5 && gender=="male"){
        alert(male[5])

    }
    if (day==6 && gender=="male"){
        alert(male[6])

    }


}