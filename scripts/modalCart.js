const cartButton = document.getElementById("btnCard");
const modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal")

const toggleModal = (button, modal) => {
    button.addEventListener("click", () => {
        modal.classlist.toggle("hidden");
        modal.classlist.toggle("show");
    });
};

toggleModal(cartButton,modal);




