const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTcwMzkzNzMwOTU2MTMyMzUz.XMEFsQ.dJTLDH0f6oON8na9HL80eGi3Wj0);//BOT_TOKEN is the Client Secret
