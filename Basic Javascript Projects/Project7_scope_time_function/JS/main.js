
//Global Variable
var X = 13  
function myFunction () {
    var Y = 22;
    document.write(X + Y);
}
myFunction();


//Local Variable to break the function (fixed so the rest of the page works.)
function myFunction2() {
    var Z = 7;
    console.log(4 + 7); //I had included the Y local variable
                        //from above
}
myFunction2();

//Method Assignment (step 146)
function the_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("salutation").innerHTML = "Good Morning!";
    }
}

//My own IF statement
if (7 > 4) {
    document.write("Seven is greater than 4");
}

//My own If/Else statement
function sandwich() {
    sammies = document.getElementById("sammies").value;
    if (sammies <= 3) {
        response = "Three or less in a day is wise.";
    }
    else {
        response = "A real sandwich fan, eh?"
    }
    document.getElementById("numSammies").innerHTML = response;
 }

 //ELSE IF Statement
 function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
 }