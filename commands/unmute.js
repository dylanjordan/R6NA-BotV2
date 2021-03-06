module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args) {
        if (message.member.roles.cache.has('819347696564961321')) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Sweaty Ash Mains');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            } else {
                message.channel.send('Cant find that member!');
            }
        } else {
            message.reply("You do not have the permissions to use this command!");
        }
    }
}