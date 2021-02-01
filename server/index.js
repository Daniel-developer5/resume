const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 8080,
    sendEmail = require('./sendEmail'),
    cors = require('cors')

require('dotenv').config()
app.use(express.json())
app.use(cors())
app.use(express.static('../client/build'))

app.post('/send', (req, res) => {
    const { subject, message } = req.body

    sendEmail(subject, message)

    res.send({ success: true, })
})

app.get('/:route', (req, res) => {
    const { route } = req.params

    if (route !== 'send') {
        res.sendFile('index.html', { root: '.../client/build' })
    }
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))