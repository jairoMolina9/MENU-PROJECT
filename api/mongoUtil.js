const { MongoClient } = require('mongodb');

const url = `mongodb+srv://jmolina:sweatyboys@cluster0.awqxaei.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

const dbName = 'MenuApp';

let db;

 function connect() {
     client.connect();
    console.log("connected");
    db = client.db(dbName);
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

