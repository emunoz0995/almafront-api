const { Router } = require('express');
const { getAllYards,getYard, createYard, updateYard, deleteYard }  = require ('../controllers/yards.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/', getAllYards);
router.get('/:yard_id', getYard);
router.post('/yard', createYard);
router.put('/yard/:id', updateYard);
router.delete('/yard/:id', deleteYard);


module.exports = router;