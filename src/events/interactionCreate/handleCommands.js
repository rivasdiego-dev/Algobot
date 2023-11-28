const { commandsDefinitions } = require("../../utils/commands");

let usedCommands = new Map();

module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const userId = interaction.user.id;

    console.log({ commandName, userId });

    if (usedCommands.has(`${userId}-${commandName}`)) {
        await interaction.reply(`You've already used the ${commandName} command!`);
    } else {
        await interaction.reply(commandsDefinitions[commandName](interaction.options));
        usedCommands.set(`${userId}-${commandName}`, true);
    }
}