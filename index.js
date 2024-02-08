const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
    
    const channelId = 'Channel_ID'; // channel to send embed

    const messageContent = {
        "content": " ", // message that the bot sends before the embed        
        "embeds": [  // example embed
            {
                "color": 7477715,
                "fields": [
                    {
                        "name": " ",
                        "value": " "
                    },
                    {
                        "name": " ",
                        "value": " "
                    },
                    {
                        "name": " ",
                       "value": " "
                    },
                    {
                           "name": " ",
                        "value": " "
                    }
                ],
                "author": {
                    "name": " "
                },
                "footer": {
                    "text": " ",
                    "icon_url": " "
                },
                "image": {
                    "url": " "
                },
                "thumbnail": {
                    "url": " "
                }
            }
        ],
        "attachments": []
    };

    const channel = client.channels.cache.get(channelId);
    if (!channel) return console.error('Invalid channel ID.');

    channel.send(messageContent)
        .then(() => console.log('Message sent successfully!'))
        .catch(error => console.error('Error sending message:', error));
});


client.login('Bot_Token'); // make this your bot token
