let firstAnswer;
let secondAnswer;
let thirdAnswer;
let total;
let week=7;


$(".buttonOne").click(function(){
    firstAnswer=$(".answerOne").val();
    

});

$(".buttonTwo").click(function(){
    secondAnswer=$(".answerTwo").val();
   
});

$(".buttonThree").click(function(){
    thirdAnswer=$(".answerThree").val();
   
});

$(".calTotal").click(function(){
      total= (Number(firstAnswer) + Number(secondAnswer) + Number(thirdAnswer))*week;
      if(total>=25){
          $(".result").html(`You'll waste ${total} hours this week! What is you doin?`);
          $(".wasteMuch").show();
      }
      else{
          $(".result").html(`<p>You'll waste just ${total} hours this week! You have your priorities straight! Look at you!</p>`);
          $(".wasteLittle").show();
      }
      
});

