const db = require('../utils/database');
const { DataTypes } = require('sequelize');


const Ingresos = db.define('ingresos', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    entryDate: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"date_entry",
    },
    operation: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    typeTeam: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"tipo_equipo"
    },
    typeOperation: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"tipo_operacion"

    },
    typeLoad: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"tipo_carga"

    },
    wayOperating: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"operar"

    },
    container: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"contenedor"

    },
    state: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"estado"

    },
    operator: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"operador"

    },
    yard: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"patio"

    },
    otherYard: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field:"otro_patio",
    }, 
    numberContainer: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"num_contenedor"

    },
    numberPlataform: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"num_plataforma"
    },
    numberOrderIncome: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"num_ord_ingreso"
    },
    econductor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    placas: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"client_id",
    }, 
    typeTransport: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"tipo_transporte",
    },
    mercancie: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"mercancia",
    },
    entryObservations: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"observaciones_ingreso",
    },
    valOperationEntry: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field:"val_ope_ingreso",
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"estatus",
    },
    facture: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field:"factura",
    },
    indicted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field:"procesado",
    },
}
);

module.exports = Ingresos;