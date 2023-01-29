const { MongoClient } = require('mongodb');

const url = `mongodb+srv://jmolina:sweatyboys@cluster0.awqxaei.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

const dbName = 'MenuApp';

let db;

async function connect() {
    try {
        await client.connect();
        db = client.db(dbName);
        console.log("SUCCESSFUL DB  CONNECTION")
    } catch {
        console.log("ERROR CONNECTING TO DB")
    }
}

function get(){
    return db;
}

function close() {
    client.close();
}

module.exports = {
    get,
    connect,
    close
};

