import firebase from './FirebaseConfig';

const firestore = firebase.firestore();

const createDocument = ( collection, document ) => {
    return firestore.collection(collection).add(document);
};

const readDocuments = (collection) => {
    return firestore.collection(collection).get();
};

const FirestoreService = {
    createDocument,
    readDocuments,
}

export default FirestoreService;