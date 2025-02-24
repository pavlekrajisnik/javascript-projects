"use strict";

const modals = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const btnOpenModal = function () {
  modals.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const btnCloseModal = function () {
  modals.classList.add("hidden");
  overlay.classList.add("hidden");
};
const addHidden = showModal.forEach((modal) => {
  modal.addEventListener("click", btnOpenModal);
});
closeModal.addEventListener("click", btnCloseModal);
overlay.addEventListener("click", btnCloseModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modals.classList.contains("hidden")) {
    btnCloseModal();
  }
});
