const mongoose = require('mongoose')

const connectToDB = async () => {
    try {
        if(mongoose.connections[0].readyState) {
            return true
        } else {
            await mongoose.connect(process.env.MONGO_URL,  {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 15000, // 15 seconds timeout
              })
            console.log('Connect To DB Successfully');
        }
    } catch (err) {
        console.log('DB connection has error ->', err);
    }
}


export default connectToDB