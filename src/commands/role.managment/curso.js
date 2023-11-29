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

    callback: (options) => {
        const curso = options.get('curso').value;

        return `Tu curso es ${curso}`;
    },
}