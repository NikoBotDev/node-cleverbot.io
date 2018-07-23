const request = require('superagent');
const base_url = 'https://cleverbot.io/1.0';
class CleverBot {
  constructor(user, key, nick) {
    this.user = user;
    this.key = key;
    this.nick = nick || null;
  }

  setNick(newNick) {
    this.nick = newNick;
  }

  /**
   * Creates a new clever bot session.
   * @param {string} nick the cleverbot nickname
   * @returns {Promise<void>} whether or not the session has been created.
   */
  create(nick) {
    return new Promise((resolve, reject) => {
      request.post(`${base_url}/create`).send({
        user: this.user,
        key: this.key,
        nick
      })
        .then((req) => {
          const nick = req.body.nick;
          this.nick = nick;
          resolve(this);
        })
        .catch((e) => reject(e.response.error));
    });
  }


  /**
   * Get a response from the clb api based in the user input.
   * @param {string} input user input
   * @returns {Promise<string>} the response from clb api.
   */
  ask(input) {
    return new Promise((resolve, reject) => {
      request.post(`${base_url}/ask`)
        .send({
          user: this.user,
          key: this.key,
          nick: this.nick,
          text: input
        })
        .then((req) => {
          const response = req.body.response;
          if (response === 'undefined') {
            reject(new Error('Fail to get a proper response...'));
          }
          resolve(req.body.response);
        })
        .catch((e) => reject(e.response.error))
    });
  }
}

module.exports = CleverBot;