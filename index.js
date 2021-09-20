// alert("what is your name?");
// let userName = prompt("What is your name?");
// alert("welcome " + userName);

let userInput = document.querySelector("#txt-input");
let buttonTranslate = document.querySelector("#btn-translate");
let output = document.querySelector("#output");
let url = "	https://api.funtranslations.com/translate/minion.json";
let url2 = "	https://api.funtranslations.com/translate/hodor.json";
let testUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

let convertedUrl = (text) => {
  return url + "?" + "text=" + text;
};

let clickHandler = () => {
  let inputText = userInput.value;
  fetch(convertedUrl(inputText))
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let translatedData = data.contents.translated;
      output.innerText = translatedData;
    });
};

buttonTranslate.addEventListener("click", clickHandler);
