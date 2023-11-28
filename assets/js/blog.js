const hamburger = document.getElementById("hambuger-button");
const menuList = document.getElementById("ul");
const logo = document.getElementById("logo");
const header = document.getElementById("header");

hamburger.addEventListener("click", () => {
  hamburger.style.backgroundColor = "#000";
});



    hamburger.addEventListener("click", () => {
      if (menuList.style.display === "none") {
        menuList.style.display = "block";
        logo.style.display = "none";
        header.style.height = "100%";
        header.style.top = "5px";
        hamburger.style.position = "relative";
        hamburger.style.bottom = "19rem";
        hamburger.style.left = "12rem";
      } else {
        menuList.style.display = "none";
        logo.style.display = "block";
        header.style.height = "10%";
        header.style.top = "0px";
        hamburger.style.position = "fixed";
        hamburger.style.left = "21rem";
        hamburger.style.bottom = "39rem";
      }
    });
