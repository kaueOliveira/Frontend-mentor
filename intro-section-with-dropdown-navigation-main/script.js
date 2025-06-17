const body = document.getElementsByTagName("body")[0];

const buttonCloseMenu = document.getElementById("close-menu");
const buttonOpenMenu = document.getElementById("open-menu");
const header = document.getElementById("header-nav");

const featuresArrowUp = document.createElement("img");
const featuresArrowDown = document.getElementById("features-arrow-down");

const companyArrowUp = document.createElement("img");
const companyArrowDown = document.getElementById("company-arrow-down");

const featuresList = document.getElementById("features-list");
const companyList = document.getElementById("company-list");

const liLinkFeatures = document.getElementById("link-features");
const liLinkCompany = document.getElementById("link-company");

const backgroundDiv = document.getElementById("background");
console.log(backgroundDiv);

checkScreenSize();

featuresArrowDown.addEventListener("click", (evt) => {
  showDiv(
    featuresList,
    "14.4rem",
    featuresArrowDown,
    featuresArrowUp,
    "features-arrow-up",
    liLinkFeatures
  );
});

companyArrowDown.addEventListener("click", (evt) => {
  showDiv(
    companyList,
    "10.3rem",
    companyArrowDown,
    companyArrowUp,
    "company-arrow-up",
    liLinkCompany
  );
});

featuresArrowUp.addEventListener("click", (evt) => {
  hideDiv(featuresList, featuresArrowUp, liLinkFeatures, featuresArrowDown);
});

companyArrowUp.addEventListener("click", (evt) => {
  hideDiv(companyList, companyArrowUp, liLinkCompany, companyArrowDown);
});

buttonCloseMenu.addEventListener("click", () => {
  openAndCloseMenu("0", "0", "hidden", "0%");
});

buttonOpenMenu.addEventListener("click", () => {
  openAndCloseMenu("1", "27.5rem", "auto", "100%");
});

window.addEventListener("resize", () => {
  checkScreenSize();
});

function checkScreenSize() {
  if (window.innerWidth > 900) {
    buttonOpenMenu.style.display = "none";
    buttonCloseMenu.parentNode.style.display = "none";
    backgroundDiv.style.width = "0%";
    backgroundDiv.style.height = "0%";
  } else {
    buttonOpenMenu.style.display = "block";
    buttonCloseMenu.parentNode.style.display = "block";
    if (header.style.overflow === "auto") {
      backgroundDiv.style.width = "100%";
      backgroundDiv.style.height = "100%";
    }
  }
}

function showDiv(list, heightValue, arrowDown, arrowUp, idAddButton, li) {
  list.style.overflow = "visible";
  list.style.height = heightValue;
  list.style.opacity = "1";

  arrowDown.remove();

  arrowUp.src = "images/icon-arrow-up.svg";
  arrowUp.alt = "Up Arrow Icon"
  arrowUp.id = idAddButton;
  li.appendChild(arrowUp);
}

function hideDiv(list, arrowUp, li, arrowDown) {
  list.style.overflow = "hidden";
  list.style.height = "0rem";
  list.style.opacity = "0";

  arrowUp.remove();
  li.appendChild(arrowDown);
}

function openAndCloseMenu(opacityValue, widthValue, overflowValue, bgSize) {
  buttonCloseMenu.style.opacity = opacityValue;
  header.style.width = widthValue;
  header.style.overflow = overflowValue;

  backgroundDiv.style.width = bgSize;
  backgroundDiv.style.height = bgSize;
}