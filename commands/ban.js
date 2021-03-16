module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args) {
        if (message.member.roles.cache.has('799846513881776160')) {

            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("User has been banned");
            } else {
                message.channel.send(`You coudn't ban that member!`);
            }
        } else {
            message.reply("You do not have the permissions to use this command!");
        }
    }
}