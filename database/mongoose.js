const mongoose = require('mongoose');
const url = 'mongodb+srv://durgamrakesh11:rakesh12345@cluster0.lrpmjkw.mongodb.net/?retryWrites=true&w=majority';

const connect = async () =>{
    try {
        await mongoose.connect(url);
        console.log('mongoose connected...');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connect;