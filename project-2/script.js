"use strict";

const modals = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const btnCloseModal = function () {
  modals.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const btnOpenModal = function () {
  modals.classList.add("hidden");
  overlay.classList.add("hidden");
};
const addHidden = showModal.forEach((modal) => {
  modal.addEventListener("click", btnCloseModal);
});
closeModal.addEventListener("click", btnOpenModal);
overlay.addEventListener("click", btnOpenModal);
