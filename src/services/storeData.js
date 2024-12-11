const { Firestore } = require("@google-cloud/firestore");

async function storeData(id, data) {
    const db = new Firestore({ databaseId: 'db-ml-ari' });

    const predictCollection = db.collection("predictions");
    return predictCollection.doc(id).set(data);
}

module.exports = storeData;
