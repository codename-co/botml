const SCRIPT = 'https://raw.githubusercontent.com/codename-co/botml/master/examples/hello.bot'
const Botml = require('botml/lib/botml')
const bot = new Botml(SCRIPT)
bot.start(true)
