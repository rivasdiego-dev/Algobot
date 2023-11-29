const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
    name: 'soy',
    description: 'Selecciona tu nombre en el servidor',
    options: [
        {
            name: 'nombre',
            description: 'Tu primer nombre en el servidor',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'apellido',
            description: 'Tu apellido en el servidor',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    callback: (client, interaction) => {
        const nombre = interaction.options.get('nombre').value;
        const apellido = interaction.options.get('apellido').value;
        interaction.reply({ content: `Tu nombre es ${nombre} ${apellido}`, ephemeral: true });
    },
}