function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }


function generatePoem(event){
    event.preventDefault ();

    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let context =
    "You are an expert writer and love to write poems. Your goal is to write a 4 line poem and display it in basic HTML structure, but without the html and body tags and separate each line. Be sure of generate a different poem every time. Do not add a title";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayPoem);
}


let poemFormElement= document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);