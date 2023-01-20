'use strict';


// try to again
// try to again

document.querySelector(".again").addEventListener('click',function(){
    window.location.reload();
});


let score =20;
let randNumber=Math.trunc(Math.random()*20)+1;


document.querySelector(".check").addEventListener("click",function(){

    
    const guess=Number (document.querySelector(".guess").value);

    if(guess === randNumber){
        document.querySelector(".message").textContent="🙌 you are winner 🎉";



        document.querySelector('.number').textContent=randNumber;
        document.querySelector("body").style.backgroundColor="#7fce46";
        document.querySelector(".highscore").textContent=score;
        if (score>document.querySelector(".highscore")){
            score=document.querySelector(".highscore")
        }
        
    }else if(guess <randNumber){

        if(score>1){
            document.querySelector(".message").textContent="🔽 Too Low  ";
            score--;
            document.querySelector(".score").textContent=score;
        }else{
            document.querySelector(".message").textContent="🚫 try again  ";
            document.querySelector("body").style.backgroundColor="red";
            
            window.location.reload();

        }

    }else if(guess>randNumber){
        if(score>1){
            document.querySelector(".message").textContent="🔼 Too High  ";
            score--;
            document.querySelector(".score").textContent=score;
        }else{
            document.querySelector(".message").textContent="🚫 try again  ";
            document.querySelector("body").style.backgroundColor="red";
            
            window.location.reload();

        }
    }else{
        document.querySelector(".message").textContent="⛔ No number   ";

    }


    
});