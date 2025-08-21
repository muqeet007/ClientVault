import app from './app.js'
import {PORT} from './config/config.js'


app.listen(PORT,()=>
    {
        console.log(`The server is running on ${PORT}`);
        
    })