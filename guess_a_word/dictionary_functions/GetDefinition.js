const request = require('request');
const GetWord = require('./GetWord');
const LocalWord = require('./LocalWord');

/**
 * Get a word from GetWord, then do a dictionary api lookup.
 * Run callback to trigger alexa intent when done.
 * @param {Function(string, string)} speak
 */
const GetDefinition = (speak) => {
    
    const word = GetWord();
    let fallback = null;

    const requestOptions = {
        url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${word}`,
        headers: {
            'Accept': 'application/json',
            'app_id': '',
            'app_key': ''
        }
    };

    request(requestOptions, (error, response, body) => {
        // Lookup failed. Use one of the hardcoded entries.
        if (error || response.statusCode != 200) {
            fallback = LocalWord();
            speak(fallback.def, fallback.word);
            return;
        }

        // Lookup success. Parse api response.
        const info = JSON.parse(body);
        const definition = info.results[0]
                               .lexicalEntries[0]
                               .entries[0]
                               .senses[0]
                               .definitions[0];

        speak(definition, word);
    });
    
};

module.exports = GetDefinition;
