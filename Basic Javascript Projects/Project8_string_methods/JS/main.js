//Concat() Method

function oregon_weather() {
    var A = "On most days in Oregon ";
    var B = "if you do not enjoy ";
    var C = "what the weather is doing ";
    var D = "just wait 15ish minutes ";
    var E = "for the weather to change...";
    var complete_saying = A.concat(B, C, D, E);
    document.getElementById("bettertogether").innerHTML = complete_saying;
}

//Slice() Method

function slice_method() {
    var sentence = "How much wood could a woodchuck chuck?";
    var newness = sentence.slice(9,13);
    document.getElementById("whatWould").innerHTML = newness;
}

//toUpperCase() Method

function big_letter() {
    var my_word = "it would look like this!";
    var shout = my_word.toUpperCase();
    document.getElementById("canYou").innerHTML = shout;
}

//toString() Method

function asA_string() {
    var F = 722;
    document.getElementById("numWord").innerHTML = F.toString();
}

//toPrecision() Method

function precise() {
    var G = 1576884.5488773018447657;
    document.getElementById("sevenDigit").innerHTML = G.toPrecision(7);
}

//toFixed() Method

function Fixed_that() {
    var H = 17.592167;
    var after = H.toFixed(2);
    document.getElementById("fourPlaces").innerHTML = after;
}

//valueOf() Method

function the_Words() {
    var I = "To the victor goes the spoils.";
    var victory = I.valueOf();
    document.getElementById("theSpoil").innerHTML = victory;
}