
//scrolling top
$(document).ready(function(){
    //scrolling to  top
    $("#scroling").on("click",function(){
        $(window).scrollTop(0);
    })
    
    //fade in the ifomation
 $('.container').each(function(){
$(this).slideToggle(1000);
 })
    //auto writer
   

var textwriter="hi i'm hicham front-end devoloper";
var thelength=textwriter.length;
n=0;
thetyper =setInterval(function(){
    $('#textwriter').each(function(){
        $(this).html($(this).html() + textwriter[n]);
      
    });
    n += 1;
    if(n===thelength){
        clearInterval(thetyper) 
    }
   
},100)




})