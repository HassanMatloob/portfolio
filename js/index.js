function menuBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }

    var menuIcon = document.getElementById("menu-icon");
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-x");
    }else if(menuIcon.classList.contains('fa-x')){
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-x");
    }

}