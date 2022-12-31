

    do{
    
        var asset = prompt("Adınız nedir?")
        if(asset == ""){
        alert("İsim girmediniz!")
        }
        
    }
    while(asset == "")
    

    var  element= document.querySelector("#myName") 

    element.innerHTML= asset;

    function getTime(){
        let timezmn = new Date;
        let hour = timezmn.getHours();
        let minute = timezmn.getMinutes();
        let second = timezmn.getSeconds();

        if( hour<10){
            hour = "0" + hour;
        }
        else if(minute<10){
            minute = "0" + minute;
        }
        else if(second<10){
            second = "0" + second;
        } 
        
        let day = new Date();
        let weekday = day.getDay()
         weekDay =
        (weekDay = 1)? "Pazartesi" :
        (weekDay = 2)? "Salı" :
        (weekDay = 3)? "Çarşamba" :
        (weekDay = 4)? "Perşembe" :
        (weekDay = 5)? "Cuma" :
        (weekDay = 6)? "Cumartesi" :
        (weekDay = 0)? "Pazar" : "";

         let date = new Date();
         let dateDay = new Date().getDate();

         if(dateDay<10){
            dateDay = "0" + dateDay
         }
         
         document.querySelector(".clock").innerHTML = hour + ":" + minute + ":" + second;
         document.querySelector(".day").innerHTML = `<b>${weekDay}</b>`

        

    }

    setInterval(getTime)