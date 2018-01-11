const state = require('./State');
const GetDefinition = require('../dictionary_functions/GetDefinition');

/**
 * Alexa Handlers
 */
const handlers = {
    'LaunchRequest': function () {
        this.response.cardRenderer(this.t('SKILL_NAME'), `Welcome: ${this.t('HELP_MESSAGE')}`);
        this.response.speak(`Welcome: ${this.t('HELP_MESSAGE')}`).listen("poop");
        this.emit(':responseReady');
    },
    'DefinitionIntent': function () {
        GetDefinition((def, word) => {
            state.definition = def;
            state.word = word;

            const speechOutput = `The definition is: ${def}`;

            this.response.cardRenderer(this.t('SKILL_NAME'), def);
            this.response.speak(`The definition is: ${def}`).listen("poop");

            this.emit(':responseReady');
        });
    },
    'AnswerIntent': function() {
        const itemSlot = this.event.request.intent.slots.Item;
        let itemName;

        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }

        let speechOutput;
        
        if (itemName == state.word.toLowerCase()) {
            // answer was correct
            speechOutput = `${itemName} is correct!`;
            this.response.cardRenderer(this.t('SKILL_NAME'), speechOutput);
            this.response.speak(speechOutput).listen("poop");
        } else {
            // answer was incorrect
            speechOutput = `${itemName} is incorrect`;
            this.response.cardRenderer(this.t('SKILL_NAME'), speechOutput);
            this.response.speak(speechOutput).listen("poop");
        }

        this.emit(':responseReady');
    },
    'RepeatIntent': function() {
        const speechOutput = `The definition is: ${state.definition}`;

        this.response.cardRenderer(this.t('SKILL_NAME'), speechOutput);
        this.response.speak(speechOutput).listen("poop");

        this.emit(':responseReady');
    },
    'GiveupIntent': function() {
        const speechOutput = `Ok, the word was: ${state.word}`;

        this.response.cardRenderer(this.t('SKILL_NAME'), speechOutput);
        this.response.speak(speechOutput).listen("poop");

        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');

        this.emit(':ask', speechOutput, reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
}

module.exports = handlers;
