const Patio = require('../models/patios.model');


class YardService {
    static async getAll() {
        try {
            const result = await Patio.findAll({
                attributes: ['id','name','active'],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getYardById(id) {
        try {
            const result = await Patio.findOne({
                where: { id },
                attributes: ['id','name','active']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createYard(yard) {
        try {
            const result = await Patio.create(yard);
            return result;
        } catch (error) {
            throw error;
         
        }
    }

    static async updateYard(yard, id) {
        try {
            const result = await Patio.update(yard,id);
            return result;
        } catch (error) {
            throw error;  
        }
    }

    static async delete(id) {
        try {
            const result = await Patio.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports =  YardService;