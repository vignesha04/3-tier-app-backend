const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            // user: process.env.MONGO_USERNAME,
            // pass: process.env.MONGO_PASSWORD,
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
        };
        const useDBAuth = process.env.USE_DB_AUTH || false;
        if(useDBAuth){
            connectionParams.user = process.env.DB_USERNAME;
            connectionParams.pass = process.env.DB_PASSWORD;
        }
        await mongoose.connect(
           process.env.DB_CONN_STR,
           connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
