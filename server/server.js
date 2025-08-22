import { connectDataBase } from './config/config.js';
import app from './app.js'
import {PORT} from './config/config.js'


const startServer=async()=>
{
    
    try
    {
        await connectDataBase()

    app.listen(PORT,()=>
    {
        console.log(`The server is running on ${PORT}`);
        
    })
    }

    catch(error)
    {
        console.log(`Failed to connect to the server: ${error.message}`);
        
    }
}

startServer()


