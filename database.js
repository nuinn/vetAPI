import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const { MONGO_URL, MONGO_DB_NAME } = process.env;
const dbSettings = { dbName: MONGO_DB_NAME };

try {
  await mongoose.connect(MONGO_URL, dbSettings);
  console.log('Connection to database established successfully');
} catch (e) {
  console.error('ERROR!');
}
