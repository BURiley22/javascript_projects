//Switch Statement
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        case "Orange":
            Color_Output = "Orange" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written above.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//getElementByClassName
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//Canvas Element
const c = document.getElementById("ID_Name");
const ctx = c.getContext("2d");

ctx.lineWidth = 12;


ctx.beginPath();
ctx.moveTo(220, 220);
ctx.lineTo(220, 107);
ctx.arcTo(107, 250, 7, 168, 15)
ctx.lineTo(15, 107);
ctx.stroke();

//Canvas- createLinearGradient() Method

const d = document.getElementById("New_Name");
const dtx = d.getContext("2d");
const grd = dtx.createLinearGradient(0, 0, 222, 12);

grd.addColorStop(0, "purple");
grd.addColorStop(1, "Orange");

dtx.fillStyle = grd;
dtx.fillRect(10, 10, 350, 210);
