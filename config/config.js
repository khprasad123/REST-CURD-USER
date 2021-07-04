module.exports = {
    MONGO_IP: process.env.MONGO_IP || "mongo",
    MONGO_PORT: process.env.MONGO_PORT || 27017,  
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    SYSTEM_IP: process.env.SYSTEM_IP || "localhost",
    PORT: process.env.PORT || 3000,
};