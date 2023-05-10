// (7)
let n_words = parseInt(prompt('How many words do you want to provide?'));
let wordToCount = prompt('What would you like to count?');
// (8)
let wordCounter = 0;
for (let i = 0; i < n_words; i++) {
    word = prompt('Write a word');
    // (8-9)
    if (word.toLowerCase() === wordToCount.toLowerCase()) {
        wordCounter++;
    }
}
alert("You typed the word '"+wordToCount+"' "+wordCounter.toString()+" times");