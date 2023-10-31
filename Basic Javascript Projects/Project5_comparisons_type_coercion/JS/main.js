//document.write 
document.write("a weird way to write numbers = " + 7);
//Type Of Operator
document.write(typeof "bland");
//Type coersion
document.write(11222 + "What an odd looking sentence..")
//NaN
function theFunction() {
    document.getElementById("isit").innerHTML = 0/0;
}//isNaN=True
function theFunction2() {
    document.getElementById("true").innerHTML = isNaN("Is this a number?");
}//isNaN=False
function theFunction3() {
    document.getElementById("false").innerHTML = isNaN(14);
}
//Infinity
function theFunction4() {
    document.getElementById("allup").innerHTML = 127/0;
}
//-Ifinity
function theFunction5() {
    document.getElementById("alldwn").innerHTML = -127/0;
}
//Boolean TRUE
function theFunction6() {
    document.getElementById("btrue").innerHTML = (10 > 3);
}
//Boolean FALSE
function theFunction7() {
    document.getElementById("bfalse").innerHTML = (10 < 3);
}
//Console.log
console.log(7 * 3);

//Console.log FALSE
console.log(22 > 33);

//Double Equal Sign TRUE
console.log(2 + 3 == 3 + 2);

//Double Equal Sign FALSE
console.log(4 * 3 == 6 + 8);

//Triple Equal Sign TRUE (a.)
var A = 22;
var B = 22;
console.log(A === B);

//Tiple Equal FALSE different data type & value (b.)
var C = "Help";
var D = 43;
console.log(C === D);

//Triple Equal FALSE diff date type & same value (c.)
var E = 7;
var F = "Seven";
console.log(E === F);

//Triple Equal FALSE same type & different value (d.)
var G = "Pleasant";
var H = "Enjoyable";
console.log(G === H);

//AND Operator TRUE
function theFunction8() {
    document.getElementById("andtrue").innerHTML = (21 > 4 && 5 < 12);
}

//AND Operator FALSE
function theFunction9() {
    document.getElementById("andfalse").innerHTML = (3 > 5 && 4 < 13);
}

//OR Operator TRUE
function theFunction10() {
    document.getElementById("ortrue").innerHTML = (2 < 7 || 4 > 12);
}

//OR Operator FALSE
function theFunction11() {
    document.getElementById("orfalse").innerHTML = (3 > 13 || 5 > 73);
}

//NOT Operator True
function theFunction12() {
    document.getElementById("nottrue").innerHTML = !(22 < 10);
}

//NOT Operator False
function theFunction13() {
    document.getElementById("notfalse").innerHTML = !(7 > 3);
}