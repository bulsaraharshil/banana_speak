var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverUrl + "?" + "text=" + input
}

function errorHandler(e) {
    console.log("Error " + e)
    alert("Error occured, please try after sometime")
}

function clickHandler() {
    var inputTxt = txtInput.value
    fetch(getTranslationURL(inputTxt))
        .then(response => response.json())
        .then(json => {
                var translatedText = json.contents.translated;
                outputDiv.innerText = translatedText
            }
        )
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)