import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const animalsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
    enums: ['dog', 'cat', 'hamster', 'racoon', 'rabbit', 'lizard', 'parrot'],
  },
  breed: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  chipNumber: {
    type: String,
    unique: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  clientId: {
    type: ObjectId,
    ref: 'Client',
  },
});

const animalModel = model('Animal', animalsSchema, 'Animals');
export default animalModel;
