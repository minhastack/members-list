require('dotenv').config() ? console.log("In development") : console.log("In production");

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env.TOKEN_BOT_DISCORD;

const numberOfMembers = async () => {
    return new Promise((resolve, reject) =>
        client.login(token)
            .then(() => client.on("ready", () => {
                const numberOfMembers = client.guilds.cache.get(process.env.MINHASTACK_GUILD_ID).memberCount;
                resolve(numberOfMembers)
            }
            ))
    )
}

module.exports = numberOfMembers;
