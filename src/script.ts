(function() {
    (document.getElementById('guess-form') as HTMLButtonElement).addEventListener("submit", compareUserGuess);

    function compareUserGuess (event : Event) {
        event.preventDefault();

        const secretNumber = generateSecretNumber().toString();
        const userNumber = (document.getElementById('guess') as HTMLInputElement).value;

        if (secretNumber == userNumber) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

    function generateSecretNumber() {
        const secretNumber = getRandomArbitrary(1, 22);

        return secretNumber;
    }

    function getRandomArbitrary(min:number, max:number) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();