# cleverbot.io

[![build status](https://secure.travis-ci.org/CleverbotIO/node-cleverbot.io.svg)](http://travis-ci.org/CleverbotIO/node-cleverbot.io)

### Installation

To install this package, simply enter the following in your console
```
npm i NikoBotDev/cleverbot.io#master
```

### Setup

Before using this module, please get your API keys at [http://cleverbot.io/keys](http://cleverbot.io/keys)

To initialize cleverbot, require the module, then create a new instance of cleverbot
``` javascript
const cleverbot = require('cleverbot.io'),
const bot = new cleverbot('YOUR_API_USER', 'YOUR_API_KEY');
```
### Creating Sessions
    
*cleverbot.io* allows you to save cleverbot sessions to access later
If you've already created a session previously, simply add the following code to reference it
``` javascript
bot.setNick('nickname');
```
Or include in the constructor
```javascript
  const bot = new cleverbot('YOUR_API_USER', 'YOUR_API_KEY', 'NICKNAME');
```
To create or access a cleverbot session, start with the following
``` javascript
bot.create('nick').then(() => {
    // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you
  
    // Woo, you initialized cleverbot.io.  Insert further code here
})
```
### Querying Cleverbot

Now querying cleverbot is simple, you pass the text to the *.ask()* method
``` javascript
bot.ask('Just a small town girl').then(response => {
    console.log(response); // Will likely be: "Living in a lonely world"
});
```
Well, that's it for now!  Happy hacking!

**Cleverbot.io is free and open source, and will remain so.**
