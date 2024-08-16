const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const count = document.querySelector(".block-count");

function increaseCount(){
    count.textContent++;
    //console.log("increase done");
}

function resetCount(){
    count.textContent=0;
    //console.log("reset done");
}

function decreaseCount(){
    count.textContent--;
    //console.log("decrease done");
}

increaseBtn.addEventListener('click',increaseCount);
resetBtn.addEventListener('click',resetCount);
decreaseBtn.addEventListener('click',decreaseCount);