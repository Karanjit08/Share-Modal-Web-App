let shareButtomElement = document.querySelector(".share-profile-btn");

let closeButton = document.querySelector(".close-button");

let modalContainer = document.querySelector(".modal");

let overlayContainer = document.querySelector("#overlay");


shareButtomElement.addEventListener('click',()=>{
    console.log('Share Button Clicked');
    openModal();
})


closeButton.addEventListener('click',()=>{
    console.log('Close Button Clicked');
    closeModal();
});

overlayContainer.addEventListener('click',()=>{
    closeModal();
})

function openModal(){
    console.log("Calling open modal function");
    overlayContainer.classList.add("active");
    modalContainer.classList.add("active");
}

function closeModal(){
    console.log("Calling close modal function");
    overlayContainer.classList.remove("active");
    modalContainer.classList.remove("active");
}
