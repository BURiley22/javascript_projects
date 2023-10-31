//using JS to add
function mathFunction() {
    var A = 3;
    var B = 4;
    document.getElementById("Math").innerHTML = A + B;
}

//using JS to Subtract
function mathFunction2() {
    var C = 10;
    var D = 3;
    document.getElementById("Subtract").innerHTML = C - D;
}

//using JS to Divide
function mathFunction3() {
    var E = 21;
    var F = 3;
    document.getElementById("Divide").innerHTML = E / F;
}

//using JS to Multiply
function mathFunction4() {
    var G = 7;
    var H = 2;
    document.getElementById("Multiply").innerHTML = G * H;
}

//using multiple mathmatical operators
function mathFunction5() {
    var I = 7;
    var J = 7;
    document.getElementById("multiple").innerHTML = I + J / 2 * 4;
}

//Modulus Operator
function mathFunction6() {
    var K = 32 % 5;
    document.getElementById("leftOver").innerHTML = "Dividing 32 by 5 will give a remainder of: " + K;
}

//Negation Operator
function mathFunction7() {
    var L = 22;
    document.getElementById("negative").innerHTML = -L;
}

//Increment Operator
function mathFunction8() {
    var M = 6;
    M++;
    document.getElementById("increase").innerHTML = M;
}

//Decrememnt Operator
function mathFunction9() {
    var N = 8;
    N--;
    document.getElementById("decrease").innerHTML = N;
}

//Math.random function
window.alert(Math.random() * 100);

//Math Object
function mathFunction10() {
    document.getElementById("mathObject").innerHTML = Math.pow(7,2);
}
