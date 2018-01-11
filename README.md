# Guess A word Demo Alexa App
Source code for my Amazon Alexa game/skill "guess a word". This skill gives the user a definition, then they have a chance to guess the word for it.

Posting this code publicly here for people to maybe learn from or hack at.

I decided not to launch this because I didn't find it very fun. Words were either too difficult or easy. In alot of cases, definitions retrieved by the dictionary api were either really obvious or too vague. Trying to vet through these to find reliable words was too time consuming. I attempted to make a locally curated dictionary, and request those definitions, but this was also too time consuming, and didn't yield good results.

In short, I'm glad I made this, but I didn't think this deserved to clutter the skill store.

Origionally deployed to AWS.

## Usage
Initiate: "Alexa Guess A word"

Get A definition: "Give me a definition"

Guess the word to that definition: "The answer is {Word}"

Give up, get the answer: "I give up"
