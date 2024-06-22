import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const todoId = req.body.todo.id;

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const todoListCollection = db.collection('TodoList');

    await todoListCollection.updateOne(
      { _id: new ObjectId(todoId) },
      { $set: { 'todos.status': 'Complete' } }
    );

    client.close();

    res.status(200).json({ message: 'Status updated successfully.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
