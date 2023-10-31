function my_Dictionary() { //KVPs as a Dictionary
    var VideoGame = {
        Platform:"Playstation 5",
        Controllers:2,
        Players:"Up to 4",
        Online:"Playstation Network",
        Format:"Disc"
    };
    delete VideoGame.Platform; //Delete Statement
    document.getElementById("Dictionary").innerHTML = VideoGame.Platform;
}