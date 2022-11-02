window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  header.classList.toggle("header-js" ,window.scrollY > 100)
})


let modalBtns2 = [...document.querySelectorAll(".buttonTelecoms")];
modalBtns2.forEach(function (btn2) {
  btn2.onclick = function () {
    let modal = btn2.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns2 = [...document.querySelectorAll(".close")];
closeBtns2.forEach(function (btn2) {
  btn2.onclick = function () {
    let modal = btn2.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event2) {
  if (event2.target.className === "modal") {
    event2.target.style.display = "none";
  }
};

let modalBtns = [...document.querySelectorAll(".buttonReseau")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

let modalBtns3 = [...document.querySelectorAll(".buttonProg")];
modalBtns3.forEach(function (btn3) {
  btn3.onclick = function () {
    let modal = btn3.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns3 = [...document.querySelectorAll(".close")];
closeBtns3.forEach(function (btn3) {
  btn3.onclick = function () {
    let modal = btn3.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event3) {
  if (event3.target.className === "modal") {
    event3.target.style.display = "none";
  }
};

let modalBtns4 = [...document.querySelectorAll(".buttonCyber")];
modalBtns4.forEach(function (btn4) {
  btn4.onclick = function () {
    let modal = btn4.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns4 = [...document.querySelectorAll(".close")];
closeBtns4.forEach(function (btn4) {
  btn4.onclick = function () {
    let modal = btn4.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event4) {
  if (event4.target.className === "modal") {
    event4.target.style.display = "none";
  }
};








