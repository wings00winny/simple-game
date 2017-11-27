function check(){

var question1 = document.SIMPLEGAME.question1.value;
var question2 = document.SIMPLEGAME.question2.value;
var question3 = document.SIMPLEGAME.question3.value;
var question4 = document.SIMPLEGAME.question4.value;
var question5 = document.SIMPLEGAME.question5.value;
var question6 = document.SIMPLEGAME.question6.value;
var question7 = document.SIMPLEGAME.question7.value;
var correct = 0;

if (question1 == "Mak Qanita"){
correct++;
}
if (question2 == "Korea"){
correct++;
}
if (question3 == "Jawa"){
correct++;
}
if (question4  == "4"){
correct++;
}
if (question5 == "benar"){
correct++;
}
if (question6 == "salah"){
correct++;
}
if (question7 == "Clara"){
correct++;
} 

var message =["Kamu orangnya asiik bakat jadi artis dadakan","ya kamu bisalah buat ditongkrongin","Kudet dasar"];
var picture =["img/menang.gif","img/sedang.gif","img/kalah.gif"];
var range;
if (correct < 2){
 range = 2;
}
if (correct === 2 && correct < 3){
 range = 1;
}
if (correct > 3 && correct <==7){
 range = 0;
}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = message[range];
document.getElementById("number_correct").innerHTML = "KAMUDAPAT " + correct + " ygBENER."
document.getElementById("picture").src = picture[range];

}


