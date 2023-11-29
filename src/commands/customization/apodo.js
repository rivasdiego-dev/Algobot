const { ApplicationCommandOptionType } = require('discord-api-types/v9');

const successMessages = [
    "¡Tu nickname es tan original y creativo! 💡",
    "Me encanta cómo has elegido tu nickname, ¡es único y genial! 🌟",
    "¡Tu nickname es la combinación perfecta de estilo y personalidad! 👌",
    "Wow, tu nickname es realmente llamativo, ¡destaca entre la multitud! 🚀",
    "No puedo evitar admirar tu elección de nickname, ¡es tan atractivo! 😊",
    "Tu nickname refleja tu personalidad de una manera tan encantadora. 💖",
    "¡Increíble elección de nickname! Realmente captura la esencia de quién eres. 🌈",
    "Me encanta cómo tu nickname tiene ese toque único que lo hace inolvidable. 🌠",
    "Tu nickname es tan elegante, ¡definitivamente has acertado con ese estilo! 👏",
]

module.exports = {
    name: 'apodo',
    description: 'Dinos cómo te gusta que te llamemos',
    options: [
        {
            name: 'apodo',
            description: 'Tu apodo en el servidor',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    callback: async (client, interaction) => {
        try {
            const nickname = interaction.options.get('apodo').value;
            const member = interaction.member;
            const fullName = member.nickname || member.user.username; // Use username if no nickname
            const posicion = fullName.indexOf("(");

            const randomIndex = Math.floor(Math.random() * successMessages.length);
            const successMessage = successMessages[randomIndex];

            let newNick;

            if (posicion === -1) {
                newNick = `${fullName} (${nickname})`;
            } else {
                newNick = `${fullName.substring(0, posicion - 1)} (${nickname})`;
            }

            await member.setNickname(newNick);

            interaction.reply({ content: `${successMessage}\n\n Ahora tendrás el apodo de ${nickname} ✨`, ephemeral: true });

        } catch (error) {
            console.error(`Error executing the command: ${error}`);
            interaction.reply({ content: 'Ocurrió un error al cambiar el apodo. Ponte en contacto con un profesor :(', ephemeral: true });
        }
    },
};