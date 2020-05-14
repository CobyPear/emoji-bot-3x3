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

console.log(emojiGrid());
// tweets the grid
function tweet() {
    T.post('statuses/update', { status: `${emojiGrid()}` }, function(err, data, response) {
      console.log(data)
  })
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

//invokes function that tweets the grid
tweet();
//makes the bot wait 1 hour before tweeting again hopefully
setInterval(tweet, 1000 * 60 * 60);