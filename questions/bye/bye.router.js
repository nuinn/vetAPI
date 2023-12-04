import Router from 'express';

const router = Router();

router.get('/Marc', (request, response) => {
  response.json({ message: 'Byeee, Marc.' });
});
router.get('/Pepe', (request, response) => {
  response.json({ message: 'Adios, Pepe.' });
});

export default router;
