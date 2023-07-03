// Make a function that receive age, and return what they drink.

function peopleWithAgeDrink(old) {
    let age = old;
    switch (true) {
        case age <= 13:
            return 'drink toddy';
        case age < 18:
            return 'drink coke';
        case age < 21:
            return 'drink beer';
        case age >= 21:
            return 'drink whisky';
    }
}