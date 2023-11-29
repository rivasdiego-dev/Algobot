/**
 * Handles the auto role assignment for a new guild member.
 * 
 * @param {Object} client - The Discord client object.
 * @param {Object} member - The guild member object.
 */
module.exports = async (client, member) => {
    try {
        let guild = member.guild;
        const roles = guild.roles.cache;
        const role = roles.find((role) => role.name === 'Estudiante');
        await member.roles.add(role); // Fix: Use member.roles.add() to add the role to the member

    } catch (error) {
        console.error(error); // Fix: Log the error for debugging purposes
    }
};