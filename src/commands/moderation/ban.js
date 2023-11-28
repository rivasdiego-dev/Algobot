const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord-api-types/v9');

module.exports = {
    name: 'ban',
    description: 'Biri biri ban ban',
    options: [
        {
            name: 'user',
            description: 'The user to ban',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        {
            name: 'reason',
            description: 'The reason for the ban',
            type: ApplicationCommandOptionType.String,
            required: false,
        }
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: async (client, interaction) => {
        interaction.reply('Banned');
    }
}