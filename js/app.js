var inputText = document.getElementById('text-input')
var inputBtn = document.getElementById('input-btn')
var output = document.querySelector('#output')

var serverUrl = 'https://api.funtranslations.com/translate/minion.json'

function translateURL(text) {
  return serverUrl + '?' + 'text=' + text
}

function errorHandler(error) {
  console.log('Error occured: ', error)
}

var clicked = inputBtn.addEventListener('click', function clicked() {
  var text = inputText.value
  fetch(translateURL(text))
    .then((response) => response.json())
    .then((json) => {
      output.innerText = json.contents.translated
    })
})
