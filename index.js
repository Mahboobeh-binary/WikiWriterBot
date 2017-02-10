var TelegramBot = require('node-telegram-bot-api');

var token = "XXX";

var bot= new TelegramBot(token , {polling : true});

bot.onText(/\/echo (.+) / ,function(msg , match){
    var chatId = msg.chat.id;
    var resp = match[1];

    bot.sendMessage(chatId , resp);
});

bot.on('message' , function(msg){
    var chatId= msg.chat.id;
    bot.sendMessage(chatId , "Message Recived : "+msg.text);
});
