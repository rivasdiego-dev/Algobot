module.exports = {
    name: 'ping',
    description: 'Ping when pong',

    callback: async (client, message, args, text) => {
        message.reply(`Pong! ${client.ws.ping} 🏓 `);
    }
}