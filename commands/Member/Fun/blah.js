exports.run = async (client, msg) => {
	return msg.send(`Blah to you too, ${msg.author.toString()}.`);
};
    
exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 3,
};
    
exports.help = {
	name: 'blah',
	description: 'Blah to you too :3',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 