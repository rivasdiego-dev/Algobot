import { ApplicationCommandOptionType } from "discord.js";

export const commands = [
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

export const commandsDefinitions = {
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