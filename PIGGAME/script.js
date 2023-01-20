'use strict';
const player0El=document.querySelector(".player--0")
const player1El=document.querySelector(".player--1")

const score0El =document.getElementById("score--0");
const score1El =document.getElementById("score--1");
const currentScore0El =document.getElementById("current--0");
const currentScore1El =document.getElementById("current--1");

// random img
const diceEl =document.querySelector(".dice");


// btns
const btnNew=document.querySelector(".btn--new");
const btnRoll=document.querySelector(".btn--roll");
const btnHold=document.querySelector(".btn--hold");


score0El.textContent=0;
score1El.textContent=0;

diceEl.classList.add("hidden");

const scores=[0,0];
let currentScore=0;
let activePlayer =0;
let playing=true;

const swithPlayer =function (){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;

    activePlayer=activePlayer===0 ?1 :0;

    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}


btnRoll.addEventListener("click",function(){
    if(playing){

        
        
        const randDice=Math.trunc(Math.random()*6)+1;
        console.log(randDice);
        
        
        diceEl.classList.remove("hidden");
        diceEl.src = `img/dice-${randDice}.png`;
        
        
        if(randDice !== 1){
            currentScore+=randDice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }else{
            swithPlayer();
        }
    }

});


btnHold.addEventListener('click',function(){
    if(playing){

        
        scores[activePlayer]+=currentScore;
        
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        
        if(scores[activePlayer]>=10){
            playing=false

            diceEl.classList.add("hidden")
            
            
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            
        }else{
            swithPlayer();
            
        }
    }


});

btnNew.addEventListener('click',function(){
    let scores=[0,0];
    let  currentScore=0;
    let  activePlayer =0;
    let  playing=true;

    score0El.textContent=0;
    score1El.textContent=0;
    currentScore0El.textContent=0;
    currentScore1El.textContent=0;

    diceEl.classList.add("hidden");

    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
} );