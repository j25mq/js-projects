function emotions(myString, myFunction) {
    console.log("I am " + myString + ", " + myFunction(2));
}

emotions ("happy", function(num) {
    let sound = "";
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
});

console.log(emotions("happy", 2));