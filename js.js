var button_audio = new
Audio("https://awiclass.monoame.com/ballsound/click14.wav");



$(".i5").click(function(){
  $(".phone").css("width","");
  $(".screen").css("height","");
  $(".phonename").text($(this).text());
  button_audio.play();
});
$(".i5s").click(function(){
  $(".phone").css("width","250px");
  $(".screen").css("height","420px");
  $(".phonename").text($(this).text());
  button_audio.play();
});


$(".i6").click(function(){
  $(".phone").css("width","270px");
  $(".screen").css("height","440px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i6s").click(function(){
  $(".phone").css("width","300px");
  $(".screen").css("height","480px");
  $(".phonename").text($(this).text());
  button_audio.play();

});

var screen_audio = new
Audio("https://awiclass.monoame.com/ballsound/click18.wav");


var page=0;
$(".screen").click(function(){
  page++;
  if(page>2){
    page=0;
  }
  $(".pages").css("left","-"+page*100+"%");
  screen_audio.play();
});
var home_audio = new
Audio("https://awiclass.monoame.com/ballsound/click18.wav");

$(".button").click(function(){
    $(".pages").css("left","0");
    home_audio.play();
});


$(".turn").click(function(){
  $(".phone").css("transform","rotate(360deg");
});


$(".wiggle").click(function(){
  wiggletime=0;
  wiggle_audio.play();
});

var wiggle_audio = new
Audio("https://awiclass.monoame.com/ballsound/phonevi.mp3");

var wiggletime=20;
setInterval(function(){
  if(wiggletime<=20){
    wiggletime+=1;
    if(wiggletime%2==0){
     $(".phone").css("left","30px");
    }else{
      $(".phone").css("left","-30px");
    }
    if(wiggletime==21){
      $(".phone").css("left","");
    }
 }
},60);
