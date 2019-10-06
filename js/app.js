var imageObj=document.getElementById("slider");

var right=document.getElementById("right-arrow");
var left=document.getElementById("left-arrow");

var imagesname=["0.jpg","3.jpg","1.jpg","5.jpg","8.jpg","2.jpg"];

var counter=0;
setInterval(function () {

    if(counter===imagesname.length)
        counter=0;


    imageObj.src='img/'+imagesname[counter];
    counter++;


},1000);