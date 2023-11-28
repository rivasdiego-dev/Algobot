const rolesID = {
    '@everyone': '1178533158694694984',
    'Profesor': '1178579803549478912',
    'Python': '1178579856762613861',
    'Front End': '1178599648718487552',
    'Unity': '1178599785062748171',
    'Roblox': '1178599811080011836',
    'Estudiante': '1178605313792950282',
    'Algobot': '1178653885250932810',
};

const commands = [
    {
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
        ]
    },
    {
        name: 'apodo',
        description: 'Dinos como te gusta que te llamemos',
        options: [
            {
                name: 'apodo',
                description: 'Tu apodo en el servidor',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ]
    },
    {
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
        ]
    },
];

const commandsDefinitions = {
    soy: (options) => {
        const nombre = options.get('nombre').value;
        const apellido = options.get('apellido').value;

        return `Tu nombre es ${nombre} ${apellido}`;
    },
    apodo: (options) => {
        const apodo = options.get('apodo').value;

        return `Tu apodo es ${apodo}`;
    },
    curso: (options) => {
        const curso = options.get('curso').value;

        return `Tu curso es ${curso}`;
    },
};

if (commandName !== 'apodo' && usedCommands.has(`${userId}-${commandName}`))
    await interaction.reply(`Lo siento, ya utilizaste el comando '/${commandName}'. Si quieres volverlo a usar, contacta a un profesor.`);
else {
    await interaction.reply(commandsDefinitions[commandName](interaction.options));
    if (commandName !== 'apodo') usedCommands.set(`${userId}-${commandName}`, true);
}

export default rolesID;