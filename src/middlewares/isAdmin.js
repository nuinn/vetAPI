// eslint-disable-next-line consistent-return
const isAdmin = async (req, res, next) => {
  const admins = ['admin', 'superadmin'];
  if (!admins.includes(req.user.role)) {
    return res.status(403).send({
      message: 'You do not have permission.',
    });
  }
  next();
};
export default isAdmin;
