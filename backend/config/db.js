const mongoose = require('mongoose')

const connectionDB = async() => {
    try {
        // Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log(`Mongodb connected!`.cyan.underline);
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

        ;
    } catch(error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports=connectionDB; 
