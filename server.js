const express = require('express');
const app = express();

app.use(express.static('views')); //For instruction about serving static files in Express, http://expressjs.com/en/starter/static-files.html

//load body-parser https://github.com/expressjs/body-parser/blob/master/README.md
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//start up express server
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
 });
 app.post('/', (req, res) => {
    let myText = req.body.text;
    console.log(myText);
 });
 const { WebClient } = require('@slack/web-api');
 console.log('Getting started with Node Slack SDK');
 // Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient('xoxb-1035561995699-1068695831201-K8K0bqt4tib1uU6P3GSrliDm');
// The current date
const currentTime = new Date().toTimeString();

(async () => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#general',
      text: `The current time is ${currentTime}`,
    });
  } catch (error) {
    console.log(error);
  }

  console.log('Message posted!');
})();

const axios = require('axios');

let endpoint = 'live'
let access_key = '19d265bab990850bacf515443318a38e';
let currency ='EUR,TWD'
let apiUrl = 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key +'&currencies='+currency;

showCurrency();

async function showCurrency() {
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data.quotes);
    await messageCurrency(response.data.quotes);
  } catch (error) {
    console.log(error);
  }
};

async function messageCurrency(currencydata) {
  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#general',
      text: currencydata,
    });
  } catch (error) {
    console.log(error);
  }

  console.log('Currency posted!');
};


 