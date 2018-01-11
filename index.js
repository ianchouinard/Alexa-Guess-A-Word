/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';
const Alexa = require('alexa-sdk');
const Resources = require('./guess_a_word/echo_functions/Resources');
const Handlers = require('./guess_a_word/echo_functions/Handlers');

const APP_ID = undefined;

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = Resources;
    alexa.registerHandlers(Handlers);
    alexa.execute();
};
