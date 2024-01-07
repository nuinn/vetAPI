import * as authService from './auth.service.js';
import transporter from '../../../nodemailer.js';

async function register(req, res) {
  const { username, password, repeatedPassword } = req.body;
  // regular expression validation failed
  // const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!username.includes('@') || !username.includes('.')) {
    res.status(400);
    res.json({ msg: 'Username must be a valid email address.' });
    return;
  }
  if (password !== repeatedPassword) {
    res.status(400);
    res.json({ msg: 'Both passwords must match.' });
    return;
  }
  const emailToken = await authService.register({ username, password });
  // eslint-disable-next-line prefer-template
  const url = 'http://localhost:3000/auth/confirm/' + emailToken;
  await transporter.sendMail({
    to: username,
    subject: 'Confirm registration',
    html: `<h3>You're almost there!</h3><br><a href=${url}>Click this link to confirm your email address.</a>`,
  });
  res.json({ msg: 'We have just sent you a confirmation email—please check your inbox.' });
}

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    res.json({ msg: 'Both username and password are required.' });
    return;
  }
  const token = await authService.login({ username, password });
  if (!token) {
    res.status(400);
    res.json({ msg: 'Incorrect credentials.' });
    return;
  }
  if (token === 'unconfirmed') {
    res.status(401);
    res.json({ msg: 'Please confirm email address in order to login.' });
    return;
  }
  res.json({ token });
}

async function confirm(req, res) {
  const { emailToken } = req.params;
  const user = await authService.confirm({ emailToken });
  res.json({ msg: `${user.username}, your account has been confirmed.` });
}

export {
  register,
  login,
  confirm,
};
