
// album price variables.

let hunkyDory = 20;
let stationToStation = 15;
let low = 10;

// Object musician (David Bowie). Properties include Name, Albums, Personas, Record company profit percentage, and a method  for selling albums which updates the artists money, minus the record companies percentage.

const musician = {
    name: "David Bowie",
    albums: ["low","station to station", "hunky dory"],
    money: 10000000,
    recordCompanyCut: .5,
    personas: ["the thin white duke", "halloween jack", "alladin sane", "ziggy stardust", "major tom", "the soul man", "pierrot", "the blind prophet"],
    sellAlbum: function(albumChoice) {
        if (albumChoice.toLowerCase() == "low") {
            musician.money = musician.money + low - (low * musician.recordCompanyCut);
            alert ("Thank you on behalf of RCA Victor and David Bowie. David's fortune is now $" + musician.money);
        } else if (albumChoice.toLowerCase() == "station to station") {
            musician.money = musician.money + stationToStation - (stationToStation * musician.recordCompanyCut);
            alert ("Thank you on behalf of RCA Victor and David Bowie. David's fortune is now $" + musician.money);
        }
        else if (albumChoice.toLowerCase() == "hunky dory") {
            musician.money = musician.money + hunkyDory - (hunkyDory * musician.recordCompanyCut);
            alert ("Thank you on behalf of RCA Victor and David Bowie. David's fortune is now $" + musician.money);
        }
        else {
            musician.money = musician.money + hunkyDory - (hunkyDory * musician.recordCompanyCut);
            alert ("Thank you on behalf of RCA Victor and David Bowie. David's fortune is now $" + musician.money);   
        }
    },
};

// pre alteration console.log. Had to look up and use this weird console.log variation to get an object that doesnt update prior to??? (it goes back in time. that would be cool, haha) being changed. Seems objects are weird like that.

console.log(JSON.parse(JSON.stringify(musician)))
    

//3 user prompts. One to add an album title, another to remove an artist persona, and a third method to sell an album while calculating the artist profit minus the record companies cut.

let addAlbum = prompt("Please add an album to the album list: " + musician.albums.join(", "), "Let's Dance");

if (addAlbum) {
    musician.albums.push(addAlbum);
} else {
    alert("Can't think of one? No worries.");
}

let removePersona = prompt("Please remove a persona from the persona list: " + musician.personas.join(", "), "the Thin White Duke");

// I looked up and used the 'filter boolean function' to remove the 'undefined' that occurs when you splice something out of an array.

if (removePersona) {
    for (let i = 0; i <= musician.personas.length; i++) {
        if (removePersona.toLowerCase() == musician.personas[i]) {
            musician.personas[i] = musician.personas.splice[i];
            musician.personas = musician.personas.filter( Boolean );
        }
    }
}

// prompt to call object funtion (purchase an album) and conditional if else.

let albumChoice = prompt("Which album would you like to purchase? " + musician.albums.join(", "), "Hunky Dory");

if (albumChoice) {
    musician.sellAlbum(albumChoice);
} else {
    alert("Please come back another day.");
}

// post alteration console log

console.log(musician);

