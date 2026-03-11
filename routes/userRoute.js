const express = require('express')
const router = express.Router()
const userController =require('../controller/userController')
const { authentication, authorization } = require('../middlewares/auth')
const { sendEmail } =require('../helpers/mailer')

router.post('/login', userController.userlogin)

//router.use('/register', UserController.register)
router.get('/test-email', async (req, res, next) => {
  try {
    await sendEmail({
      to: process.env.TEST_EMAIL || 'diancitra1409@gmail.com',
      subject: 'Test Email 🚀',
      html: `
<div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 40px;">
  <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 15px rgba(0,0,0,0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #4f46e5, #6366f1); padding: 25px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px;">
        🎉 Welcome to Our App
      </h1>
    </div>

    <!-- Body -->
    <div style="padding: 30px;">
      <h2 style="color: #333; margin-top: 0;">Halo 👋</h2>
      <p style="color: #555; line-height: 1.6; font-size: 14px;">
        Terima kasih sudah menggunakan layanan kami. 
        Email ini dikirim sebagai bagian dari proses sistem kami.
      </p>

      <p style="color: #555; line-height: 1.6; font-size: 14px;">
        Jika kamu memiliki pertanyaan, jangan ragu untuk menghubungi tim support kami.
      </p>

      <div style="text-align: center; margin-top: 30px;">
        <a href="http://localhost:3000"
           style="background-color: #4f46e5; color: white; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">
          🚀 Go to Website
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f1f1f1; padding: 15px; text-align: center;">
      <p style="margin: 0; font-size: 12px; color: #888;">
        © 2026 Your App. All rights reserved.
      </p>
    </div>

  </div>
</div>
`
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (err) {
    next(err)
  }
})


module.exports = router