/**
 * Handles the auto role assignment for a new guild member.
 * 
 * @param {Object} client - The Discord client object.
 * @param {Object} member - The guild member object.
 */
module.exports = async (client, member) => {
    try {
        const guild = member.guild; // Use const instead of let for immutability
        const role = guild.roles.cache.find((role) => role.name === 'Estudiante'); // Simplify role finding

        if (role) {
            await member.roles.add(role); // Use member.roles.add() to add the role to the member
        } else {
            console.error("Role 'Estudiante' not found in the guild."); // Log an error if the role is not found
        }

    } catch (error) {
        console.error(error); // Log the error for debugging purposes
    }
};
