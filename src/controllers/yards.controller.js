const YardService = require('../services/yards.services');

const getAllYards = async (req, res) => {
    try {
        const result = await YardService.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getYard = async (req, res) => {
    try {
        const { yard_id } = req.params;
        const result = await YardService.getYardById(yard_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const createYard = async (req, res) => {
    try {
        const yard = req.body;
        const result = await YardService.createYard(yard);
        res.status(201).json({ message: 'resource created successfully' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateYard = async (req, res) => {
    try {
        const { id } = req.params;
        const yard = req.body;
        const result = await YardService.updateYard(yard, {
            where: { id },
        });
        console.log(result)
        res.status(200).json({message: 'resource updated successfully'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteYard = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await YardService.delete({
            where: { id }
        });
        res.status(200).json({message:'resource deleted successfully'})
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllYards,
    getYard,
    createYard,
    updateYard,
    deleteYard
}