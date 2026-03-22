const mongoose = require("mongoose");
const path = require("path");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: path.join(__dirname, "../.env") });
}

const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/tripnest";
console.log("Connecting to:", dbUrl);

main().then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    
    let testUser = await User.findOne({ username: "tripnest_admin" });
    if (!testUser) {
        let fakeUser = new User({ email: "admin@tripnest.com", username: "tripnest_admin" });
        testUser = await User.register(fakeUser, "tripnest123");
    }

    initData.data = initData.data.map((obj) => ({ ...obj, owner: testUser._id }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized successfully");
};

initDB().then(() => {
    mongoose.connection.close();
});
