import { BaseCommandInteraction, Client, MessageEmbed } from 'discord.js'
import { Command } from '../command'

// import fetch from "node-fetch";
import axios from "axios"

const Discounts: Command = {
    name: 'discounts',
    description: 'Fetch the latest GTA:O discounts',
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {

        const response = await axios.get('https://gtao-discounts-api.herokuapp.com/discounts')

        const parsed = response.data

        parsed.events = parsed.events.map((e: string) => `- ${e}`)
        parsed.discounts = parsed.discounts.map((e: string) => `- ${e}`)


        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('GTAO Discounts for the week of' + parsed.week)
            // .setURL('https://discord.js.org/') // TODO: Include URL
            // .setDescription('Discounts for the week of' + parsed.week)
            // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Events', value: parsed.events.join('\n') },
                { name: 'Discounts', value: parsed.discounts.join('\n') },
            )

        await interaction.reply({ embeds: [embed] })
    }
}

export default Discounts;