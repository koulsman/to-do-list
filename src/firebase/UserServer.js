// server.js (ή το αρχείο του server σας)
const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

// Αρχικοποίηση του Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://<YOUR-PROJECT-ID>.firebaseio.com"
});

const db = admin.firestore();
const app = express();
app.use(bodyParser.json());

app.get('/getUserLists', async (req, res) => {
  const { userId } = req.query;

  try {
    const userRef = db.collection('users').doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).send({ message: 'User not found' });
    }

    const userData = userDoc.data();
    res.status(200).send({ lists: userData.lists });
  } catch (error) {
    res.status(400).send({ message: 'Error fetching user lists', error });
  }
});

app.post('/createUser', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password
    });

    await db.collection('users').doc(userRecord.uid).set({
      username,
      email,
      lists: []
    });

    res.status(201).send({ message: 'User created successfully', uid: userRecord.uid });
  } catch (error) {
    res.status(400).send({ message: 'Error creating user', error });
  }
});

app.post('/addList', async (req, res) => {
  const { userId, title } = req.body;

  try {
    const listRef = db.collection('lists').doc();
    const listId = listRef.id;

    await listRef.set({
      userId,
      title,
      tasks: []
    });

    const userRef = db.collection('users').doc(userId);
    await userRef.update({
      lists: admin.firestore.FieldValue.arrayUnion({
        listId,
        title,
        tasks: []
      })
    });

    res.status(201).send({ message: 'List added successfully', listId });
  } catch (error) {
    res.status(400).send({ message: 'Error adding list', error });
  }
});

app.post('/addTask', async (req, res) => {
  const { listId, description } = req.body;

  try {
    const taskId = db.collection('lists').doc(listId).collection('tasks').doc().id;

    await db.collection('lists').doc(listId).update({
      tasks: admin.firestore.FieldValue.arrayUnion({
        taskId,
        description,
        completed: false
      })
    });

    res.status(201).send({ message: 'Task added successfully', taskId });
  } catch (error) {
    res.status(400).send({ message: 'Error adding task', error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
