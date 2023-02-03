import firebase from './FirebaseConfig';

const firestore = firebase.firestore();

const createDocument = ( collection, document ) => {
    return firestore.collection(collection).add(document);
};

const readDocuments = (collection) => {
    return firestore.collection(collection).get();
};

const updateDocument = (collection, id, document) => {
    return firestore.collection(collection).doc(id).update(document);
}

const FirestoreService = {
    createDocument,
    readDocuments,
    updateDocument,
}

export default FirestoreService;