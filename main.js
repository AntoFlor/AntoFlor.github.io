document.onreadystatechange = Loading;
window.onload = NavMenuDisplayNone;

function Loading() {
    if (document.readyState !== "complete") {
        document.querySelector(".loading").style.visibility = "visible";
    } else {
        document.querySelector(".loading").style.visibility = "hidden";
    }
}

function NavMenuDisplayNone()
{
    document.querySelector("#projets").style.display = "none";
}

function Hamburger(){
    var nav = document.querySelector("nav");
    nav.style.right = 0;
}

function Close(){
    var nav = document.querySelector("nav");
    nav.style.right = "-80%";
}

function Projects(){
    if (document.querySelector("#projets").style.display == "none")
    {
        document.querySelector("#projets").style.display = "flex";
        document.querySelector("#projectsDefilent").style.padding = "15px 0 8px 0";
        document.querySelector("#arrow1").style.transform = "rotate(90deg)";
    }
    else if (document.querySelector("#projets").style.display != "none")
    {
        document.querySelector("#projets").style.display = "none";
        document.querySelector("#arrow1").style.transform = "rotate(0deg)";
        document.querySelector("#projectsDefilent").style.padding = "15px 0 15px 0";
    }
}  

function ThemeColor(){

    document.querySelector("body").style.backgroundColor = "#ffffff"
}

