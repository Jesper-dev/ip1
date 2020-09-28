//Link Stuff
let link = document.querySelectorAll(".link");


for(let i = 0; i < link.length; i++){

        if(link[i].classList.contains("active")){
            link[i].classList.remove("link");
            link[i].classList.add("current-link")
        }else{
            link[i].classList.remove("current-link");
        }

        console.log(link[i]);
}

console.log(link);