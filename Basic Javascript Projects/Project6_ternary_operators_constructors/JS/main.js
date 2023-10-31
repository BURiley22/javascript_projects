function Ride_Function () { //Ternary Operator Example
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";  
}

function Vote_Function() { //My Ternary Operator 
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You are old enough to vote!":"You are NOT old enough.";
    document.getElementById("Vote").innerHTML = Can_vote;
}

//Keyword Example
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drive a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//My Keyword
function VideoGame(Platform, Players, Genre, ReleaseYear) {
    this.VideoGame_Platform = Platform;
    this.VideoGame_Players = Players;
    this.VideoGame_Genre = Genre;
    this.VideoGame_ReleaseYear = ReleaseYear;
}
var FIFA = new VideoGame("Playstation 5", "Up to 4", "Sport", 2023);
var HorizonForbiddenWest = new VideoGame("Playstation 5", 1, "Action", 2021);
var SuperMarioBrosWonder = new VideoGame("Nintendo Switch", "Up to 4", "Platformer", 2023);
function vgFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Benjamin tries a " + SuperMarioBrosWonder.VideoGame_Platform + " game, released in "
    + SuperMarioBrosWonder.VideoGame_ReleaseYear + ".  " + SuperMarioBrosWonder.VideoGame_Genre +
    " is his favorite type of game to play.";
}

//Reserved Keyword Challenge
function Player(Team, Position, Age, Country) {
    this.Player_Team = Team;
    this.Player_Position = Position;
    this.Player_Age = Age;
    this.Player_Country = Country;
}
var Nunez = new Player("Liverpool FC", "CF", 24, double);
function playFunction() {
    document.getElementById("resKeyword").innerHTML =
    "One player for " + Nunez.Player_Team + " that caught our eye is Darwin Nunez."
    "He plays " + Nunez.Player_Position + 
    " and is originally from " + Nunez.Player_Country + " but is adjust well to England.";
}

//Nested Function
function minusFunction () {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var initial = 8;
        function subtract() {initial -= 1;}
        subtract();
        return initial;
    }
}