//While Loop
function Call_Loop() {
    a = "";
    b = 2;
    while (b < 12) {
        a += b + " is less than 12<br>";
        b++; 
    }
    document.getElementById("Loop").innerHTML = a;
}

//String Length Property
function myFunction() {
var C = "This is a man's world!";
var D = C.length;
document.getElementById("howMany").innerHTML = D;
}

//for Loop
var Instruments = ["Bass", "Guitar", "Drums", "Saxophone", "Tambourine", "Cello"];
var music = "";
var X;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++) {
    music += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = music;
}

//Array
function array_Function() {
    var fav_Colors = [];
    fav_Colors[0] = "Green";
    fav_Colors[1] = "Red";
    fav_Colors[2] = "Blue";
    fav_Colors[3] = "Purple";
    fav_Colors[4] = "Orange";
    document.getElementById("Array").innerHTML = "A few colors I enjoy are " +
        fav_Colors[1] + ", " + fav_Colors[3] + " and " + fav_Colors[2] + " .";
    }
    
//Const Keyword
function constant_function() {
    const Donut_Doggy = {breed:"Boston Terrier", color:"Black and White", hair:"Short"};
    Donut_Doggy.color = "Brindle";
    Donut_Doggy.age = 10;
    document.getElementById("Constant").innerHTML = "My dog's name is Donut and he is a " +
    Donut_Doggy.age + " years old.  His hair color is " + Donut_Doggy.color;
}

//Let Keyword
var D = 22;
document.write(D);
{
    let D = 47; //let will only apply within the curly brackets
    document.write("<br>" + D);
}
var D = 44;
document.write("<br>" + D);

//Return statement 
let q = datFunction(4, 3);

function datFunction(e, f) {
    return e * f;
}
console.log(datFunction(4, 3));

//Let Keyword
let halloween = {
    month: "October",
    season: "Fall",
    colors: "Black and Orange",
    phrase: "Trick or Treat",
    description : function() {
        return "Halloween occurs every " + this.month + ".  During the " + this.season + " colors of "
        + this.colors + " can be seen all over." 
    }
};
document.getElementById("pumpkinFace").innerHTML = halloween.description();