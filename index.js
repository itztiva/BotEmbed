const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
    
    const channelId = 'Channel_ID'; 

    const messageContent = {
        "content": "", // message that the bot sends before the embed        
        "embeds": [  // example embed
            {
                "color": 7477715,
                "fields": [
                    {
                        "name": "American 🇺🇸",
                        "value": "Made By <@884509937076666368> - [Video](https://www.youtube.com/watch?v=NE_U_mjo5ME)"
                    },
                    {
                        "name": "French 🇫🇷",
                        "value": "Made By <@351690433249804288> - [Video](https://www.youtube.com/watch?v=a-rCWUN-gNo&ab_channel=ByZNexus)"
                    },
                    {
                        "name": "Europe 🇪🇺",
                        "value": "Made By <@746996581684871218> - [Video](https://www.youtube.com/watch?v=a1_028-5A4E)"
                    },
                    {
                        "name": "Estonian 🇪🇪",
                        "value": "Made By <@804777454581448704> - [Video](https://www.youtube.com/watch?v=gt0UrgywksM)"
                    }
                ],
                "author": {
                    "name": "Astro Tutorials"
                },
                "footer": {
                    "text": "Enjoy! - Astro",
                    "icon_url": "https://media.discordapp.net/attachments/1190820083262570576/1203627153334337626/pngggg-removebg-preview.png?ex=65d1c823&is=65bf5323&hm=b3fafff6dc92d4f631d36be2fcf2f096ca2db05137bfe71a9b3a3e88db26ae68&"
                },
                "image": {
                    "url": "https://backend.ploosh.dev:2053/assets/AstroBanner.png"
                },
                "thumbnail": {
                    "url": "https://media.discordapp.net/attachments/1190820083262570576/1203627153334337626/pngggg-removebg-preview.png?ex=65d1c823&is=65bf5323&hm=b3fafff6dc92d4f631d36be2fcf2f096ca2db05137bfe71a9b3a3e88db26ae68&"
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


client.login('Bot_Token');
