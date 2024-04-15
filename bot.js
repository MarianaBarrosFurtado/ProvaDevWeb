const TelegramBot = require('node-telegram-bot-api');

//Banco de Dados
/*const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const emails = await prisma.email.findMany();
  console.log('Todos os emails:', emails);
}*/

const token = '7041058004:AAEMXleICLFahGc0A65__FBuKH7uNVu-woM';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const date = new Date(msg.date * 1000); 
    const hour = date.getHours();

    
    if (hour >= 9 && hour < 18) {
        const link = 'https://uvv.br/';
        bot.sendMessage(chatId, `Acesse o site de nossa instituição: ${link}`);
    } else {
        bot.sendMessage(chatId, 'No momento não estamos funcionando. Nosso horário de atendimento é de 09:00 às 18:00. Por favor, deixe seu email para que possamos entrar em contato:');
    }
});