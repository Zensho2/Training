const modalOverlay= document.querySelector(".modal-overlay");
const mBtn = document.getElementById("mBtn");
const closeBtn = document.querySelector(".close-btn");

mBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);

function openModal(){
    modalOverlay.className = "open-modal";
}

function closeModal(){
    modalOverlay.className = "modal-overlay";
}