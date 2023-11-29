const getLocalCommands = require('../../utils/getLocalCommands');
const resetCommands = require('../../utils/reset-commands');

let usedCommands = new Map();

module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName);
        if (!commandObject) return;

        if (commandObject.permissionsRequired?.length) {
            for (const permission of commandObject.permissionsRequired) {
                if (!interaction.member.permissions.has(permission)) {
                    interaction.reply({
                        content: 'Not enough permissions.',
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        if (commandObject.botPermissions?.length) {
            for (const permission of commandObject.botPermissions) {
                const bot = interaction.guild.members.me;

                if (!bot.permissions.has(permission)) {
                    interaction.reply({
                        content: "I don't have enough permissions.",
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        const { commandName } = interaction;
        const userId = interaction.user.id;
        const roles = interaction.member.roles.cache.map(role => role.name);

        if (commandName === 'reset-commands') {
            if (roles.includes('Profesor'))
                usedCommands = resetCommands(usedCommands, interaction.options.get('usuario').value)
            else
                await interaction.reply({ content: `No tienes permisos para usar este comando.`, ephemeral: true });
        }


        if (commandName !== 'apodo' && usedCommands.has(`${userId}-${commandName}`))
            await interaction.reply({ content: `Lo siento, ya utilizaste el comando '/${commandName}'. Si quieres volverlo a usar, contacta a un profesor.`, ephemeral: true });
        else {
            await commandObject.callback(client, interaction);
            if (commandName !== 'apodo' || commandName !== 'reset-commands') usedCommands.set(`${userId}-${commandName}`, true);
        }


    } catch (error) {
        console.log({ content: `Error al ejecutar el comando: ${error}`, ephemeral: true });
    }
}