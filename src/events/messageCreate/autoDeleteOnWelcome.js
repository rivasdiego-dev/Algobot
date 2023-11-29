/**
 * Auto deletes messages in the welcome channel.
 * @param {Message} message - The message object.
 */
require('dotenv').config();

module.exports = async (client, message) => {
    // Code to auto delete messages in the welcome channel
    if (message.channel.id === process.env.WELCOME_CHANNEL_ID) {
        setTimeout(() => {
            // Intentar eliminar el mensaje (puede fallar si el mensaje ya se eliminó)
            message.delete().catch((error) => console.error(`Error al eliminar el mensaje: ${error}`));
        }, (3 * 60000)); // Minutos * milisegundos
    }
}