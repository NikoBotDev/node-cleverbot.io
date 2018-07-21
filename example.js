const cleverbot = require('./index.js');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const bot = new cleverbot('YOUR_USER_KEY', 'YOUR_API_KEY'); // cleverbot (user, key, nick)
bot.create('test').then(() => {
  rl.setPrompt('You> ');
  rl.prompt();
  rl.on('line', (line) => {
    bot.ask(line).then((response) => {
      console.log('Cleverbot:', response);
      rl.prompt();
    })
      .catch((e) => {
        console.error(e);
      })
  }).on('close', () => {
    process.exit(0);
  });
})
  .catch((e) => {
    console.error(e);
  });

	