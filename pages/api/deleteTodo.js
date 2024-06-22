import { MongoClient, ObjectId } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'DELETE') {
    const id = req.body.id;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const todoListCollection = db.collection('TodoList');

    const result = await todoListCollection.deleteOne({ _id: new ObjectId(id) });

    client.close();

    res.status(200).json({ message: 'todo item deleted' });
  }
}

export default handler;
