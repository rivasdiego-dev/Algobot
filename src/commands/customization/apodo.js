const { ApplicationCommandOptionType } = require('discord-api-types/v9');

const successMesaages = [
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
    // deleted: true,
    name: 'apodo',
    description: 'Dinos como te gusta que te llamemos',
    options: [
        {
            name: 'apodo',
            description: 'Tu apodo en el servidor',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    callback: (client, interaction) => {
        try {
            const nickname = interaction.options.get('apodo').value;
            const member = interaction.member;
            const fullName = member.nickname;
            const posicion = fullName.indexOf("(");

            const randomIndex = Math.floor(Math.random() * successMesaages.length);
            const successMessage = successMesaages[randomIndex];

            let newNick = fullName;

            if (posicion === -1)
                newNick = `${fullName} (${nickname})`
            else
                newNick = `${fullName.substring(0, posicion - 1)} (${nickname})`

            member.setNickname(newNick)

            interaction.reply({ content: `${successMessage}\n\n Ahora tendrás el apodo de ${nickname} ✨`, ephemeral: true });

        } catch (error) {
            interaction.reply({ content: `Error al ejecutar el comando: ${error}. Ponte en contacto con un profesor :(`, ephemeral: true });
        }
    },
}