const { Router } = require('express');
const { getAllRegisters, getRegister, createRegister, updateRegister, deleteRegister }  = require ('../controllers/registers.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get('/', getAllRegisters);
router.get('/:register_id', getRegister);
router.post('/register', createRegister);
router.put('/register/:id', updateRegister);
router.delete('/register/:id', deleteRegister);


module.exports = router;