const Clients = require('../models/clients.model');


class ClientService {
    static async getAll() {
        try {
            const result = await Clients.findAll({
                attributes: ['id','name','active'],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getClientById(id) {
        try {
            const result = await Clients.findOne({
                where: { id },
                attributes: ['id','name','active']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createClient(client) {
        try {
            const result = await Clients.create(client);
            return result;
        } catch (error) {
            throw error;
         
        }
    }

    static async updateClient(client, id) {
        try {
            const result = await Clients.update(client,id);
            return result;
        } catch (error) {
            throw error;  
        }
    }

    static async delete(id) {
        try {
            const result = await Clients.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports =  ClientService;