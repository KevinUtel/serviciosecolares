const mongoose = require('mongoose')

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
MONGODB_URI = `mongodb+srv://kevaq:123456siete@utelsa.donokqz.mongodb.net/`;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));