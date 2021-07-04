const { 
    SYSTEM_IP,
    PORT
} =require("../config/config");


module.exports = {
    servers:[
        {
            url:`http://localhost:${PORT}`,
            description:"Local server"
        },
        {
            url:`http://${SYSTEM_IP}:${PORT}`,
            description:"Cloud Server"
        },
    ]
}