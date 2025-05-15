
// const mongoose = require('mongoose');

// const ConnectToMongo = () => {
//     // mongoose.connect('mongodb://127.0.0.1:27017/inotebook', {
//     // mongoose.connect('mongodb://127.0.0.1:27017/PakLegal', {
//     // mongoose.connect(process.env.MONGO_URI)
//     // mongoose.connect("mongodb+srv://umair:@g786@mail@mongo.igrmyfs.mongodb.net/?retryWrites=true&w=majority&appName=Mongo")
//     mongoose.connect("MONGO_URI=mongodb+srv://umair:%40g786%40mail@mongo.igrmyfs.mongodb.net/?retryWrites=true&w=majority&appName=Mongo")
//     .then(() => {
//         console.log('MongoDB Connected');
//     }).catch((error) => {
//         console.error('MongoDB connection error:', error);
//     });
// };

// module.exports = ConnectToMongo;

const mongoose = require('mongoose');

const ConnectToMongo = () => {
    // mongoose.connect("mongodb+srv://umair:%40g786%40mail@mongo.igrmyfs.mongodb.net/PakLegal?retryWrites=true&w=majority")
    mongoose.connect("mongodb+srv://umair:Umair786@mongo.igrmyfs.mongodb.net/PakLegal?retryWrites=true&w=majority")
    .then(() => {
        console.log('✅ MongoDB Connected');
    }).catch((error) => {
        console.error('❌ MongoDB connection error:', error);
    });
};

module.exports = ConnectToMongo;


