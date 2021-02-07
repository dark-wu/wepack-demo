var config = require('./config.json');

module.exports = () => {
    const greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};