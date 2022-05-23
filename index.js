console.log("index.js has been executed");

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("bot has logged into the account");
});

client.on("message", (message) => {
  if (message.author.bot) return;
  //bot commands here
});

client.login("OTc4MDU2MzE4MDgwNDAxNDA4.GIyHii.e_tAhp2PYWS1x95ovbqbSxD2F3dr6jPFKe4rPw");
