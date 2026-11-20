// Export the MongoDB connection settings so other files can use them
module.exports = { URI: process.env.MONGODB_URI };

    // URI is the name we use to access the MongoDB connection string
    // process.env.MONGODB_URI retrieves the MongoDB connection string
    // from the .env file using the environment variable MONGODB_URI

