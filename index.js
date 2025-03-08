import dotenv from "dotenv";
import shortid from "shortid";
dotenv.config();

import { Client, Events, GatewayIntentBits } from "discord.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN = process.env.TOKEN;
const id = shortid.generate();

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];

    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Open Link")
          .setStyle(ButtonStyle.Link)
          .setURL(url)
      );

    message.reply({ content: `Your ID: ${id}`, components: [row] });
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
