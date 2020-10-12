//Link Stuff
let link = document.querySelectorAll(".link");

for (let i = 0; i < link.length; i++) {

    //Checks if the current link has a class of "active"
    //If it does it removes the link class and adds the current.link class instaed.
    if (link[i].classList.contains("active")) {
        link[i].classList.remove("link");
        link[i].classList.add("current-link")
    }
};