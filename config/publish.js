const ngrok = require('ngrok');
const port = require('./data').port;

(async function(){
  const url = await ngrok.connect(port);
  console.log(`app builded on url: ${url}`)
})();
