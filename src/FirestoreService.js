import firebase from "./FirebaseConfig";

const firestore = firebase.firestore();

const createDocument = (collection, document) => {
  return firestore.collection(collection).add(document);
};

const readDocument = (collection, id) => {
  return firestore.collection(collection).doc(id).get();
};

const readDocuments = async ({
  collection,
  queries,
  orderByField,
  orderByDirection,
  perPage,
  cursorId,
}) => {
  let collectionRef = firestore.collection(collection);

  //.where() queries have to go before .orderBy() queries.
  if (queries && queries.length > 0) {
    for (const query of queries) {
      collectionRef = collectionRef.where(
        query.field,
        query.condition,
        query.value
      );
    }
  }

  if (orderByDirection && orderByDirection) {
    collectionRef = collectionRef.orderBy(orderByField, orderByDirection);
  }

  if (perPage) {
    collectionRef = collectionRef.limit(perPage)
  }

  if (cursorId) {
    const document = await readDocument(collection, cursorId);
    collectionRef = collectionRef.startAfter(document);
  }

  return collectionRef.get();
};

const updateDocument = (collection, id, document) => {
  return firestore.collection(collection).doc(id).update(document);
};

const deleteDocument = (collection, id) => {
  return firestore.collection(collection).doc(id).delete();
};

const readSingleDocument = async (collection, id) => {
  var docRef = firestore.collection(collection).doc(id);
  return docRef.get()
  .then((doc) => {
      if (doc.exists) {
       return (doc.data()); 
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

const FirestoreService = {
  createDocument,
  readDocuments,
  readSingleDocument,
  updateDocument,
  deleteDocument,
};

export default FirestoreService;
