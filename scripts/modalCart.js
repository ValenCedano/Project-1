const cartButton = document.getElementById("btnCard");
const modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal")

const toggleModal = (button, modal) => {
    button.addEventListener("click", () => {
        modal.classList.toggle("show");
        modal.classList.toggle("hidden");
        
    });
};

toggleModal(cartButton,modal);
toggleModal(closeButton,modal);




