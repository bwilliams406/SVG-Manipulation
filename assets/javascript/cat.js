let btns = document.querySelectorAll  (".buttons button");
let cat = document.getElementsByClassName("cat")[0];


const manageCatClasses = function(){
    if(this.getAttribute("data-add")) {
        cat.classList.add(this.getAttribute("data-add"));
    }
    if(this.getAttribute("data-remove")) {
        cat.classList.remove(this.getAttribute("data-remove"));
    }
    // console.log("clicks")
}

for (i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", manageCatClasses);
}
