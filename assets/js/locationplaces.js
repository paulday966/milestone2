hotels = {
    hotel1: {name: "Hotel Mandolay", location: "Guildford"},
    hotel2: {name: "Hilton Cobham", location: "Cobham"},
};

placesofinterest = {
    placeofinterest1: {name: "Polesden Lacy", location: "Cobham"},
    placeofinterest2: {name: "Guildford Castle", location: "Guildford"},
};

placestoexplore = {
    placetoexplore1: {name: "Bookham Common", location: "Great Bookham"},
    placetoexplore2: {name: "Newlands Corner", location: "Guildford"},
};

for (let place in hotels) {
    console.log(`${hotels[place].name}`);
}

for (let place in placesofinterest) {
    console.log(`${placesofinterest[place].name}`);
}

for (let place in placestoexplore) {
    console.log(`${placestoexplore[place].name}`);
}

