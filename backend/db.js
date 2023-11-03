const mongoose = require('mongoose');

module.exports = () =>{
    // const connectionParams = {
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // };
    try {
        mongoose.connect(process.env.DB);
        console.log("Database Connected successfully");
    } catch (error) {
        console.log(`Couldn't connect to database: ${error}`);
    }
}