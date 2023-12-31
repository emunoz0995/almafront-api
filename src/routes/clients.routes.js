const { Router } = require('express');
const { getAllClients,getClient, createClient, updateClient, deleteClient }  = require ('../controllers/clients.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/', getAllClients);
router.get('/:client_id', getClient);
router.post('/client', createClient);
router.put('/client/:id', updateClient);
router.delete('/client/:id', deleteClient);


module.exports = router;