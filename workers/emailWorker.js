require('dotenv').config()

const amqp = require('amqplib');
const { sendEmail } = require('../helpers/mailer')

async function startWorker() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('send-email');

  console.log('📨 Email worker started...');

  channel.consume('send-email', async (msg) => {
    const data = JSON.parse(msg.content.toString());

    console.log(data)

    console.log('Sending email to: diancitra1409@gmail.com', data.email);

    const html = '<p>Thank you for joining us</p>'

    await sendEmail({ to: 'devitas700@gmail.com', subject: "Registration My App", html });

    channel.ack(msg);
  });
}

startWorker();