import { Schema, model } from 'mongoose';

const clientsSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  document: {
    type: {
      type: String,
      default: 'dni',
      enums: ['dni', 'nie', 'passport'],
    },
    number: {
      type: String,
      required: true,
    },
  },
  address: {
    streetType: {
      type: String,
      required: true,
      default: 'Calle',
    },
    streetName: {
      type: String,
      required: true,
    },
    streetNumber: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
  },
  tel: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const clientModel = model('Client', clientsSchema, 'Clients');
export default clientModel;
