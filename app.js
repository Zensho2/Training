const projects = [
    {
        id:1,
        title:"Color generator",
        desc:"A basic random color generator RGB based on html/css/js",
        src:"/Color%20generator/",
        img:"content/colorGenerator.png",
    },
    {
        id:2,
        title:"Counter",
        desc:"A basic counter based on html/css/js",
        src:"/Counter/",
        img:"content/counter.png",
    },
    {
        id:3,
        title:"Reviews",
        desc:"A website showing different reviews based on html/css/js",
        src:"/Reviews/",
        img:"content/reviews.png",
    },
    {
        id:4,
        title:"Navbar",
        desc:"A responsive navbar based on html/css/js",
        src:"/Navbar/",
        img:"content/navbar.png",
    },
    {
        id:5,
        title:"Modal",
        desc:"A modal window on html/css/js",
        src:"/Modal/",
        img:"content/modal.png",
    },
];

const img = document.querySelector(".img");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");
const listing = document.querySelector(".listing");
let currentItem = 0;

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


window.addEventListener("DOMContentLoaded",showProject);

function showProject(){
    const item = projects[currentItem];
    img.src=item.img;
    title.textContent=item.title;
    title.src=item.src;
    desc.textContent=item.desc;
}

nextBtn.addEventListener("click",function(){
    if(currentItem>=projects.length-1){
        currentItem=0;
    }else{
        currentItem++;
        
    }showProject();
});

prevBtn.addEventListener("click",function(){
    if(currentItem<=0){
        currentItem=4;
    }else{
        currentItem--;
    }showProject();
});