const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

main()
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner : "6a0d459c9a86164950309a0f"}));
    await Listing.insertMany(initData.data);
    console.log("DB initialized with sample data");
};

initDB();