const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    setInterval(() => {
        console.log("Client is ready..")
        const number = '6285881685271@c.us';
        const message = 'stop tipu-tipu ya bang kepo 🙂';
        
        client.sendMessage(number, message).then(response => {
            console.log('Message sent successfully:');
        }).catch(err => {
            console.error('Error sending message:', err);
        });
    }, 1_000);
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();
