require('dotenv').config()

import { Client, ClientOptions } from 'discord.js'

// Listeners
import ready from './listeners/ready'
import interactionCreate from './listeners/interactionCreate'


const client = new Client({
    intents: []
})

ready(client)
interactionCreate(client)

client.login(process.env.TOKEN)

