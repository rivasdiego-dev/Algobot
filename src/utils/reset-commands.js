module.exports = (usedCommands, userId) => {
    const userCommandKeys = Array.from(usedCommands.keys()).filter((key) => key.startsWith(`${userId}-`));
    for (const key of userCommandKeys)
        usedCommands.delete(key);
    return usedCommands;
};