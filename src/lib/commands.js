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
                required: true,
            },
        ]
    },
];

export const commandsDefinitions = {
    soy: (interaction) => { },
    apodo: (interaction) => { },
    curso: (interaction) => { },
};