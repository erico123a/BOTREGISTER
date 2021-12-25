const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'clear',
  description: "ini adalah command clear",
  execute(message, args, client) {
    const clearmbed = new MessageEmbed().setColor('BLUE').setDescription('Sabar lagi clear CHAT');
case
    const clearEmbed = new MessageEmbed().setColor('GREEN').setDescription(`**SUCCES**`);

    message.reply({ embeds: [clearEmbed] }).then((message) => {
      setTimeout(() => {
        message.edit({ embeds: [clearEmbed] });
      }, 1000 * 5);
    });
  },
};
