// Bars Click ON Small Screen
export default () => {
  let nav_Bars = document.getElementById("bars");
  let ulElement = document.getElementById("ulNav");
  let backDiv = document.getElementById("navActive_back");

  nav_Bars.classList.toggle("clicked");

  // if nav bars chlicked do these
  if (nav_Bars.classList.contains("clicked")) {

    ulElement.classList.remove("!active");
    ulElement.classList.add("active");

    // Add dark background to the page
    backDiv.classList.add("NavbarClicked-background");

    let liELement = document.querySelectorAll("li");
    console.log(liELement);
    liELement.forEach(item => {
      console.log(item);
        item.addEventListener("Click", () => {
          console.log(liELement);
        })
    });
    

    // other whise do these
  } else {
    ulElement.classList.add("!active");
    ulElement.classList.remove("active");

    // remove dark background to the page
    backDiv.classList.remove("NavbarClicked-background");
  }
};

