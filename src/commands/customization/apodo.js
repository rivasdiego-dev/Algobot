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
        const apodo = interaction.options.get('apodo').value;
        interaction.reply({ content: `Tu apodo es ${apodo}`, ephemeral: true });
    },
}