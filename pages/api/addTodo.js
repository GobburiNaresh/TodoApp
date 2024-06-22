import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const description = data.description;
    const reminder = data.reminder;
    const todos = {
      description,
      reminder,
      status: 'Incomplete',

    };

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const todoListCollection = db.collection('TodoList');
    
    const result = await todoListCollection.insertOne({ todos });
    
    client.close();

    res.status(201).json({ message: 'todo item inserted' });
  }
}

export default handler;

