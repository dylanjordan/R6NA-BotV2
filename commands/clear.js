module.exports = {
    name: 'clear',
    description: "Clear messages",
    async execute(message, args) {

        if (message.member.roles.cache.has('799846513881776160')) {

            if (!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
            if (isNaN(args[0])) return message.reply("Please enter a real number!");

            if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
            if(args[0] < 1) return message.reply("You must delete atleast one message!");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        } else {
            message.reply("You do not have the permissions to use this command!");
        }
    }

}