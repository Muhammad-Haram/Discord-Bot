import dotenv from "dotenv";
dotenv.config();

import { Client, Events, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN = process.env.TOKEN;

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    message.reply({
        content: `short Id ${url}`,
    })
  }

  message.reply({
    content: "Hello World!",
  });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("pong!!");
});

client.login(TOKEN);
