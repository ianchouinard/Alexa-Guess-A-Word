const words = require('./Words');

/**
 * Grab a random word from the hardcoded list.
 */
const GetWord = () => {
    const word_list = words.split(', ');
    const index = Math.floor(Math.random() * (word_list.length - 1)) + 0;

    return word_list[index];
};

module.exports = GetWord;
