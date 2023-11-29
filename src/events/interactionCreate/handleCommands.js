const getLocalCommands = require('../../utils/getLocalCommands');
const resetCommands = require('../../utils/reset-commands');

let usedCommands = new Map();

module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) return;

    const localCommands = getLocalCommands();
    const { commandName } = interaction;
    const userId = interaction.user.id;

    try {
        const commandObject = localCommands.find((cmd) => cmd.name === commandName);
        if (!commandObject) return;

        const checkPermissions = (permissions, errorMessage) => {
            if (permissions?.length && !permissions.every((permission) => interaction.member.permissions.has(permission))) {
                interaction.reply({
                    content: errorMessage,
                    ephemeral: true,
                });
                return false;
            }
            return true;
        };

        if (!checkPermissions(commandObject.permissionsRequired, 'Not enough permissions.')) return;
        if (!checkPermissions(commandObject.botPermissions, "I don't have enough permissions.")) return;

        const roles = interaction.member.roles.cache.map(role => role.name);

        if (commandName === 'reset-commands') {
            if (roles.includes('Profesor')) {
                usedCommands = resetCommands(usedCommands, interaction.options.get('usuario').value);
            } else {
                await interaction.reply({ content: `No tienes permisos para usar este comando.`, ephemeral: true });
                return;
            }
        }

        if (commandName !== 'apodo' && commandName !== 'reset-commands' && usedCommands.has(`${userId}-${commandName}`)) {
            await interaction.reply({ content: `Lo siento, ya utilizaste el comando '/${commandName}'. Si quieres volverlo a usar, contacta a un profesor.`, ephemeral: true });
        } else {
            await commandObject.callback(client, interaction);
            if (commandName !== 'apodo' && commandName !== 'reset-commands') usedCommands.set(`${userId}-${commandName}`, true);
        }

    } catch (error) {
        console.error(`Error al ejecutar el comando: ${error}`);
        interaction.reply({ content: 'Ha ocurrido un error al ejecutar el comando.', ephemeral: true });
    }
};