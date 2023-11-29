const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
    name: 'soy',
    description: 'Selecciona tu nombre en el servidor',
    options: [
        {
            name: 'nombre',
            description: 'Uno de tus nombres',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'apellido',
            description: 'Uno de tus apellidos',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    callback: (client, interaction) => {
        const nombre = interaction.options.get('nombre').value;
        const apellido = interaction.options.get('apellido').value;
        const member = interaction.member;

        member.setNickname(`${nombre} ${apellido}`)
            .then(() => {
                interaction.reply({ content: `Perfecto! Tu nombre en el servidor ahora es ${nombre} ${apellido}`, ephemeral: true });
            })
            .catch((error) => {
                console.error(error);
                interaction.reply({ content: 'Ha ocurrido un error al cambiar el nombre... Ponte en contacto con un profesor:(', ephemeral: true });
            });
    },
}