require('dotenv').config();
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
    name: 'curso',
    description: 'Selecciona el curso al que perteneces"',
    options: [
        {
            name: 'curso',
            description: 'El curso al que perteneces',
            type: ApplicationCommandOptionType.String,
            choices: [
                {
                    name: 'Python',
                    value: '1178579856762613861',
                },
                {
                    name: 'Front End',
                    value: '1178599648718487552',
                },
                {
                    name: 'Unity',
                    value: '1178599785062748171',
                },
                {
                    name: 'Roblox',
                    value: '1178599811080011836',
                },
            ],
            required: true,
        },
    ],

    callback: async (client, interaction) => {
        const curso = interaction.options.get('curso').value;

        let guild = interaction.guild;
        const roles = guild.roles.cache;
        const role = roles.find((role) => role.id === curso);

        const variant = {
            '1178579856762613861': '\n\n¡Hora de programar en Python!',
            '1178599648718487552': '\n\n¡Disfruta del curso de Front End!',
            '1178599785062748171': '\n\n¡Diviértete en el curso de Unity!',
            '1178599811080011836': '\n\n¡Deja volar tu imaginación en el curso de Roblox!',
        }

        await interaction.member.roles.add(role);
        interaction.reply({ content: `Ahora estás en el curso de ${role}. ${variant[curso]}`, ephemeral: true });
    },
}