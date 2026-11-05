const app = require('./app')
const port = 3000

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({ success: "your entered in testing world" })
})

app.listen(port, () => {
    console.log(`Server is successfully running on http://localhost:${port} `)
})