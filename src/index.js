function generatePoem(event){
    event.preventDefault ();

    let poemElement = document.querySelector ("#poem");
    poemElement.innerHTML = "french poem";
}


let poemFormElement= document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);