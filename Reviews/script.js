const reviews = [
    {
        id:1,
        name: "Jack D Cat",
        job: "House cat",
        img: "jackdcat.webp",
        text:"Really nice guy, gave me some catnip yesterday nice quality hash Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus rerum vero quos dolorem. Fugiat esse, rem doloribus eaque voluptate voluptates mollitia aliquid et excepturi nisi, sequi corrupti accusantium ad",
    },
    {
        "id": 2,
        "name": "Molly Paws",
        "job": "Garden Guardian",
        "img": "mollypaws.webp",
        "text": "Zensho was cool, calm, and collected. He didn’t mind when I stared at him from across the room for hours, and he always knew when I was ready for some playtime. Definitely a trustworthy human."
    },
    {
        "id": 3,
        "name": "Whiskers McFluff",
        "job": "Couch Connoisseur",
        "img": "whiskersmcfluff.webp",
        "text": "I’m a bit particular about my routine, but Zensho handled it like a pro. My meals were on time, my favorite blanket was always fluffed, and he even indulged my obsession with laser pointers. I give him a royal seal of approval"
    },
    {
        "id": 4,
        "name": "Shadow Mew",
        "job": "Nighttime Explorer",
        "img": "shadowmew.webp",
        "text": "I’m usually shy around strangers, but Zensho made me feel comfortable. He respected my space and let me come to him on my terms. By the end of the week, I was sitting on his lap! Impressive work."
    },
    {
        "id": 5,
        "name": "Cleo Purrtra",
        "job": "Royal Highness",
        "img": "cleopurrtra.webp",
        "text": "Zensho really gets me. He knows how to give just the right amount of attention without being overbearing. He even remembered that I like my treats served on a silver platter. Purr-fect service"
    }
];

const img = document.getElementById("img-car");
const author = document.getElementById('author');
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.getElementById("random-btn");

let currentItem=0;

window.addEventListener("DOMContentLoaded", showReview);

function showReview(){
    const item = reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

nextBtn.addEventListener("click",function(){
    if(currentItem>=reviews.length-1){
        currentItem=0;
    }else{
        currentItem++;
        
    }showReview();
});

prevBtn.addEventListener("click",function(){
    if(currentItem<=0){
        currentItem=4;
    }else{
        currentItem--;
    }showReview();
});

randomBtn.addEventListener("click",function(){
    let randomNum = Math.floor(Math.random()* reviews.length);
    let prevNum=currentItem;
    if(randomNum==prevNum){
        currentItem++;
    }else{

        currentItem=randomNum;
    }
    //console.log(currentItem);
    showReview();
});
