function getInputFliedById(id){
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFliedById (id){
const textValue = document.getElementById(id).innerText;
const textNumber = parseFloat(textValue);
return textNumber;
}

function showSectionId(id){
  document.getElementById('donate-container').classList.add('hidden');
  document.getElementById('history-container').classList.add('hidden');

  // show the section provide the id

   document.getElementById(id).classList.remove('hidden');

}

