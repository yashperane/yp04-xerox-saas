const app = require('./app')
const connectDB = require('./config/db.js')
const port = process.env.PORT || 3000


const startServer = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`Server is successfully running on http://localhost:${port} `)
        })
    }
    catch (error) {
        console.error('Server startup failed:', error.message);
        process.exit(1);
    }
   

}
 startServer()
