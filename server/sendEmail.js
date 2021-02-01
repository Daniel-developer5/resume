const nodemailer = require('nodemailer')

require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'work.offers2005@gmail.com',
        pass: process.env.EMAIL_PASS,
    },
})

module.exports = (subject, text) => {
    const mailOptions = {
        from: 'work.offers2005@gmail.com',
        to: 'daniel.mudrak2005@gmail.com',
        subject, text,
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log(`Email sent: ${info.response}`)
        }
    })
}