const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById('btn');
const bgColor=document.querySelector(".color");

function generateRandomColor() {
    let randomHex= '#';

    for(let i = 0;i<6;i++){
        randomHex += hex[getRandomHex()];
        console.log(randomHex);
    }
    
    document.body.style.backgroundColor = randomHex;
    bgColor.textContent=randomHex;
}

btn.addEventListener('click',generateRandomColor);
console.log("ok");


function getRandomHex(){
        return Math.floor(Math.random() * hex.length);
    }
    