// Bars Click ON Small Screen
export default () => {
  const nav_Bars = document.getElementById("bars");
  const ulElement = document.getElementById("ulNav");
  const backDiv = document.getElementById("navActive_back");

  nav_Bars.classList.toggle("clicked");

  // if nav bars chlicked do these
  if (nav_Bars.classList.contains("clicked")) {
    ulElement.classList.remove("!active");
    ulElement.classList.add("active");

    // Add dark background to the page
    backDiv.classList.add("NavbarClicked-background");

    // other whise do these
  } else {
    ulElement.classList.add("!active");
    ulElement.classList.remove("active");

    // remove dark background to the page
    backDiv.classList.remove("NavbarClicked-background");
  }
};
