import Router from 'express';

const router = Router();

router.get('/:name', (request, response) => {
  const { name } = request.params;
  response.json({ message: `Hello, ${name}!` });
});

// router.get('/Marc', (request, response) => {
//   response.json({ message: 'Hello, Marc.' });
// });
// router.get('/Pepe', (request, response) => {
//   response.json({ message: 'Hola, Pepe.' });
// });

export default router;
