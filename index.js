function time(){
    var e=new Date;
    e.getHours()>12?document.getElementById("hr").innerHTML=e.getHours()%12+"<br>hours":document.getElementById("hr").innerHTML=e.getHours()+"<br>hours",document.getElementById("min").innerHTML=e.getMinutes()+"<br>mins",document.getElementById("sec").innerHTML=e.getSeconds()+"<br>secs",e.getHours()>=12?document.getElementById("ampm").innerHTML="PM":document.getElementById("ampm").innerHTML="AM"}setInterval(time,1e3);
    var date=new Date;function set_alarm(){var e=new Date,t=document.getElementById("time1").value,n=document.getElementById("time2").value,g=document.getElementById("time3").value,r=document.getElementById("time4").value;document.getElementById("set1").innerHTML="Wake Up Time : "+t,document.getElementById("set2").innerHTML="Lunch Time : "+n,document.getElementById("set3").innerHTML="Nap Time : "+g,document.getElementById("set4").innerHTML="Night Time : "+r,"6 AM-7 AM"==t?e.getHours()>6&&7>e.getHours()&&(document.getElementById("display").innerHTML="GOOD MORNING !! WAKE UP"):"7 AM-8 AM"==t?e.getHours()>7&&8>e.getHours()&&(document.getElementById("display").innerHTML="GOOD MORNING !! WAKE UP"):"8 AM-9 AM"==t&&e.getHours()>8&&9>e.getHours()&&(document.getElementById("display").innerHTML="GOOD MORNING !! WAKE UP"),"12 AM-1 PM"==n?e.getHours()>12&&13>e.getHours()&&(document.getElementById("display").innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP"):"1 PM-2 PM"==n?e.getHours()>13&&14>e.getHours()&&(document.getElementById("display").innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP"):"2 PM-3 PM"==n&&e.getHours()>8&&9>e.getHours()&&(document.getElementById("display").innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP"),"4 PM-5 PM"==g?e.getHours()>16&&17>e.getHours()&&(document.getElementById("display").innerHTML="GOOD EVENING !!"):"5 PM-6 PM"==g?e.getHours()>17&&18>e.getHours()&&(document.getElementById("display").innerHTML="GOOD EVENING !!"):"6 PM-7 PM"==g&&e.getHours()>18&&19>e.getHours()&&(document.getElementById("display").innerHTML="GOOD EVENING !!"),"8 PM-9 PM"==r?e.getHours()>20&&21>e.getHours()&&(document.getElementById("display").innerHTML="GOOD NIGHT !!"):"9 PM-10 PM"==r?e.getHours()>21&&22>e.getHours()&&(document.getElementById("display").innerHTML="GOOD NIGHT !!"):"10 PM-11 PM"==r&&e.getHours()>22&&23>e.getHours()&&(document.getElementById("display").innerHTML="GOOD NIGHT !!")}11>date.getHours()&&date.getHours()>5?document.getElementById("text").innerHTML="GET SOME HEALTHY BREAKFAST!!!":15>date.getHours()&&date.getHours()>11?document.getElementById("text").innerHTML="LET'S HAVE SOME LUNCH!!":20>date.getHours()&&date.getHours()>15?document.getElementById("text").innerHTML="STOP YAWNING, GET SOME TEA..<br>ITS JUST EVENING!":document.getElementById("text").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP",11>date.getHours()&&date.getHours()>5?document.getElementById("img").innerHTML="<img src='images/Component 30 – 1.svg' width='530' height='350'>":15>date.getHours()&&date.getHours()>11?document.getElementById("img").innerHTML="<img src='images/Component 31 – 1.svg' width='530' height='350'>":20>date.getHours()&&date.getHours()>15?document.getElementById("img").innerHTML="<img src='images/lunch_image.png' width='530' height='350'>":document.getElementById("img").innerHTML="<img src='images/Component 32 – 1.svg' width='530' height='350's>";

    function time(){

    var date = new Date;

    if(date.getHours()>12){
        document.getElementById("hr").innerHTML = date.getHours() % 12 + "<br>hours";
    }else{
    document.getElementById("hr").innerHTML = date.getHours() + "<br>hours";
    }
    document.getElementById("min").innerHTML = date.getMinutes() + "<br>mins";
    document.getElementById("sec").innerHTML = date.getSeconds() + "<br>secs";

    if(date.getHours()>=12){
        document.getElementById("ampm").innerHTML = "PM";
    }else{
    document.getElementById("ampm").innerHTML = "AM";
    }
}
setInterval(time,1000);



var date = new Date;

if(date.getHours()<11 && date.getHours()>5){
    document.getElementById("text").innerHTML = "GET SOME HEALTHY BREAKFAST!!!";
}else 
if(date.getHours()<15 && date.getHours()>11){
    document.getElementById("text").innerHTML = "LET'S HAVE SOME LUNCH!!";
}else
if(date.getHours()<20 && date.getHours()>15){
    document.getElementById("text").innerHTML = "STOP YAWNING, GET SOME TEA..<br>ITS JUST EVENING!";   
}else{
    document.getElementById("text").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"; 
}


if(date.getHours()<11 && date.getHours()>5){
    document.getElementById("img").innerHTML = "<img src='images/Component 30 - 1.svg' width='530' height='350'>"
}else 
if(date.getHours()<15 && date.getHours()>11){
    document.getElementById("img").innerHTML = "<img src='images/Component 31 – 1.svg' width='530' height='350'>"
}else
if(date.getHours()<20 && date.getHours()>15){
    document.getElementById("img").innerHTML = "<img src='images/lunch_image.png' width='530' height='350'>"
}else{
    document.getElementById("img").innerHTML = "<img src='images/Component 32 – 1.svg' width='530' height='350's>"
}



function set_alarm(){

    var date = new Date;

    var time1 = document.getElementById("time1").value;
    var time2 = document.getElementById("time2").value;
    var time3 = document.getElementById("time3").value;
    var time4 = document.getElementById("time4").value;

    document.getElementById("set1").innerHTML = "Wake Up Time : " + time1;
    document.getElementById("set2").innerHTML = "Lunch Time : " + time2;
    document.getElementById("set3").innerHTML = "Nap Time : " + time3;
    document.getElementById("set4").innerHTML = "Night Time : " + time4;



    if(time1 == "6 AM-7 AM"){
        if(date.getHours()>6 && date.getHours()<7){
            document.getElementById("display").innerHTML = "GOOD MORNING !! WAKE UP";
        }
    }
    else if(time1 == "7 AM-8 AM"){
        if(date.getHours()>7 && date.getHours()<8){
            document.getElementById("display").innerHTML = "GOOD MORNING !! WAKE UP";
        }
    }
    else if(time1 == "8 AM-9 AM"){
        if(date.getHours()>8 && date.getHours()<9){
            document.getElementById("display").innerHTML = "GOOD MORNING !! WAKE UP";
        }
    }



    if(time2 == "12 AM-1 PM"){
        if(date.getHours()>12 && date.getHours()<13){
            document.getElementById("display").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        }
    }
    else if(time2 == "1 PM-2 PM"){
        if(date.getHours()>13 && date.getHours()<14){
            document.getElementById("display").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        }
    }
    else if(time2 == "2 PM-3 PM"){
        if(date.getHours()>8 && date.getHours()<9){
            document.getElementById("display").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        }
    }


    if(time3 == "4 PM-5 PM"){
        if(date.getHours()>16 && date.getHours()<17){
            document.getElementById("display").innerHTML = "GOOD EVENING !!";
        }
    }
    else if(time3 == "5 PM-6 PM"){
        if(date.getHours()>17 && date.getHours()<18){
            document.getElementById("display").innerHTML = "GOOD EVENING !!";
        }
    }
    else if(time3 == "6 PM-7 PM"){
        if(date.getHours()>18 && date.getHours()<19){
            document.getElementById("display").innerHTML = "GOOD EVENING !!";
        }
    }



    if(time4 == "8 PM-9 PM"){
        if(date.getHours()>20 && date.getHours()<21){
            document.getElementById("display").innerHTML = "GOOD NIGHT !!";
        }
    }
    else if(time4 == "9 PM-10 PM"){
        if(date.getHours()>21 && date.getHours()<22){
            document.getElementById("display").innerHTML = "GOOD NIGHT !!";
        }
    }
    else if(time4 == "10 PM-11 PM"){
        if(date.getHours()>22 && date.getHours()<23){
            document.getElementById("display").innerHTML = "GOOD NIGHT !!";
        }
    }
}