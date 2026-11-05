const express = require('express')
const app = express()
const cors=require('cors')

app.use(express.json())
app.use(cors())

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Xerox SaaS API is running'
    });
});

module.exports = app