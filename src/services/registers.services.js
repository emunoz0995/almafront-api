const Ingresos = require('../models/ingresos.models');
const Clients = require('../models/clients.model');
const Patio = require('../models/patios.model')


class RegistersService {
    static async getAll() {
        try {
            const result = await Ingresos.findAll({
                where: {indicted: false },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
                include: [
                    {
                        model: Clients,
                        as: 'cliente',
                        attributes: ['name']
                    },
                    {
                        model: Patio,
                        as: 'otros_patios',
                        attributes: ['name']
                    },
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getRegisterById(id) {
        try {
            const result = await Ingresos.findOne({
                where: { id },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createRegister(register) {
        try {
            const result = await Ingresos.create(register);
            return result;
        } catch (error) {
            throw error;
         
        }
    }

    static async updateYard(register, id) {
        try {
            const result = await Ingresos.update(register,id);
            return result;
        } catch (error) {
            throw error;  
        }
    }

    static async delete(id) {
        try {
            const result = await Ingresos.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports =  RegistersService;