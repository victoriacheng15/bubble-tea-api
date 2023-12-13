const { MongoClient } = require("mongodb");

const connectDb = async (url) => {
	const client = new MongoClient(url);
	await client.connect();
	return client.db("bubble-tea-api");
};

module.exports = connectDb;
