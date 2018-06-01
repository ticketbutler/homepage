// Bars Click ON Small Screen
export default () => {    
    let nav_Bars = document.getElementById("bars");
    let ulElement = document.getElementById("ulNav");  
    let backDiv = document.getElementById("navActive_back");
  
    nav_Bars.classList.toggle("clicked");
    
    
    if(nav_Bars.classList.contains("clicked")){
      ulElement.classList.remove("!active");
      ulElement.classList.add("active");
  
      
      backDiv.classList.add("NavbarClicked-background");
  
      document.getElementById("lang").style.display = "inline";


    let liElement = document.querySelectorAll("li");

    console.log(liElement);

    liElement[0].addEventListener("click", ()=> {
      console.log(liElement)
  })
      
    }
    else {
      ulElement.classList.add("!active");
      ulElement.classList.remove("active");
  
      backDiv.classList.remove("NavbarClicked-background");
  
      document.getElementById("lang").style.display = "none";
      
    }
  }