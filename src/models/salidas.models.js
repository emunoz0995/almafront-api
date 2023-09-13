const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Salidas = db.define('salidas', {
    n_registro: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    exitDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field:"date_exit",
    },
    numberContainer: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"num_contenedor",
    }, 
    exitPlataform: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"plataforma_salida"
    },
    orderExit: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"ord_salida"

    },
    exitDriver: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"conductor_salida"

    },
    exitPlate: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"placa_salida"

    },
    typeTransport: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"tipo_transporte"

    },
    mercancie: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"mercancia_salida"

    },
    exitobservations: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"observaciones_salida"
    },
    exitoOperator: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"operador_salida"
    },
    valOperationExit: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field:"val_ope_salida"
    },
    exitStatus: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"estatus"
    },
    facture: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"factura"
    },
    valueForDay: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field:"valor_dia"
    },
    daysStored: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"dias_almacenados"
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },

});
module.exports = Salidas;