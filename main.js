window.onload = navMenuDisplayNone;

function navMenuDisplayNone()
{
    document.querySelector("#projets").style.display = "none"
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
        document.querySelector("#arrow1").style.transform = "rotate(90deg)";
        console.log("flex");
    }
    else if (document.querySelector("#projets").style.display != "none")
    {
        document.querySelector("#projets").style.display = "none";
        document.querySelector("#arrow1").style.transform = "rotate(0deg)";
        console.log("none");
    }
}