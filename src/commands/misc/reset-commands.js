const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
    name: 'reset-commands',
    description: 'TEACHER ONLY COMMAND Reset the commands used by a user.',
    options: [
        {
            name: 'usuario',
            description: 'Usuario a resetear los comandos',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
    ],

    callback: async (client, interaction) => {
        const usuario = interaction.options.get('usuario').member;
        interaction.reply({ content: `Comandos reiniciados para ${usuario.nickname}`, ephemeral: true });
    }
}