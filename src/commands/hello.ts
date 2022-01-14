import { BaseCommandInteraction, Client } from 'discord.js'
import { Command } from '../command'

const Hello: Command = {
    name: 'hello',
    description: 'Say hello to the bot',
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Howdy!"

        await interaction.reply(content)
    }
}

export default Hello;