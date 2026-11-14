const app = require('./src/app.js')
const connectDB = require('./src/config/db.js')
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
