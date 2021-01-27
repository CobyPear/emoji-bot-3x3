//Twitter library and configuration file

const Twit=require('twit');

const T = new Twit(require('./config.js'));

//emoji library
const emojis = require ('emojis-list');

//gets a random emoji
function randomEmojis() {
    return emojis[Math.floor(Math.random() * emojis.length)]
};

//create emoji grid
function emojiGrid() {
    return `${randomEmojis()}${randomEmojis()}${randomEmojis()}
${randomEmojis()}${randomEmojis()}${randomEmojis()}
${randomEmojis()}${randomEmojis()}${randomEmojis()}`
};

// Callback for when the tweet is sent
function tweeted(err, data, response) {
    if (err) {
        console.log(err);
    } else {
        console.log('Success: ' + data.text);
        //console.log(response);
    }
};

// tweets the grid
function tweet() {
    T.post('statuses/update', { status: `${emojiGrid()}` }, tweeted(err, data, response))
};

//invokes function that tweets the grid
tweet();