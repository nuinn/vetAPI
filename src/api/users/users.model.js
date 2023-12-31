import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
  firstName: {
    type: String,
  },
  surname: {
    type: String,
  },
  licenseNo: {
    type: String,
  },
  role: {
    type: String,
    default: 'employee',
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

const userModel = model('Users', usersSchema);
export default userModel;
