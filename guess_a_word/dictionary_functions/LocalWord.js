const LocalDictionary = require('./LocalDictionary');

/**
 * Grab a word & def from the hardcoded dictionary.
 */
const LocalWord = () => {
    const index = Math.floor(Math.random() * (LocalDictionary.length - 1)) + 0;
    return LocalDictionary[index];
};

module.exports = LocalWord;
