function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the star of the " + character.innerHTML + "!");
}