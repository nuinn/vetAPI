import mongoose from 'mongoose';

const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.invzag8.mongodb.net/';
const MONGO_DB_NAME = 'VetsDB';
const dbSettings = { dbName: MONGO_DB_NAME };
try {
  await mongoose.connect(MONGO_URL, dbSettings);
  console.log('Connection to database established successfully');
} catch (e) {
  console.error('ERROR!');
}
