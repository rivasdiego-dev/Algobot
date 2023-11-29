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



];

const commandsDefinitions = {

};

if (commandName !== 'apodo' && usedCommands.has(`${userId}-${commandName}`))
    await interaction.reply(`Lo siento, ya utilizaste el comando '/${commandName}'. Si quieres volverlo a usar, contacta a un profesor.`);
else {
    await interaction.reply(commandsDefinitions[commandName](interaction.options));
    if (commandName !== 'apodo') usedCommands.set(`${userId}-${commandName}`, true);
}

export default rolesID;