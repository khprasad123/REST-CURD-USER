const { 
    SYSTEM_IP,
    PORT
} =require("../config/config");


module.exports = {
    servers:[
        {
            url:`http://${SYSTEM_IP}:${PORT}`,
            description:"Running Server"
        },
    ]
}