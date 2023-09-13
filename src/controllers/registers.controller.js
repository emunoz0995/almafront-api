const RegistersService = require('../services/registers.services');

const getAllRegisters = async (req, res) => {
    try {
        const result = await RegistersService.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getRegister = async (req, res) => {
    try {
        const { register_id } = req.params;
        const result = await RegistersService.getRegisterById(register_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createRegister = async (req, res) => {
    try {
        const register = req.body;
        const result = await RegistersService.createRegister(register);
        res.status(201).json({ message: 'resource created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const yard = req.body;
        const result = await RegistersService.updateYard(yard, {
            where: { id },
        });
        console.log(result)
        res.status(200).json({message: 'resource updated successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await RegistersService.delete({
            where: { id }
        });
        res.status(200).json({message:'resource deleted successfully'})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllRegisters, 
    getRegister, 
    createRegister, 
    updateRegister, 
    deleteRegister
}