const Client = require('../models/clients.model');
const Roles = require('../models/roles.model');
const Users = require('../models/users.models');
const Patio = require('../models/patios.model')

const db = require("../utils/database");

const roles = [
    { name: 'Administrador'},
    { name: 'Usuario'}
];

const users = [
    {
        firstName: 'Paola ',
        lastName: 'Cano',
        email: 'paola@prueba.com',
        password: 'admin123',
        roleId: 1,
        active: true,
    }
];

const clients = [
    { name: 'ALDIA',active: true},
    { name: 'CONSUMIDOR FINAL',active: true},
    { name: 'JJHOGO',active: true},
    { name: 'LITECOMEXCARGA',active: true},
    { name: 'SI LOGISTICA',active: true},
    { name: 'SUCORDITRANS',active: true},
    { name: 'SYTSA',active: true},
    { name: 'TSP',active: true},
    { name: 'TRANSBRAMACAR',active: true},
    { name: 'TRUECA',active: true},
    { name: 'TRAMOINCA',active: true},
    { name: 'CONDOR ANDINO',active: true},
    { name: 'PARTICULAR',active: true},
    { name: 'PAREDES JHONNY',active: true},
    { name: 'EDUARDO ROSAS',active: true},
    { name: 'MERCO',active: true},
    { name: 'GRUPO BIZA',active: true},
    { name: 'BOTERO SOTO',active: true},
    { name: 'MIDECAR',active: true},
    { name: 'ECUTRAN',active: true},
    { name: 'TERAN',active: true},
    { name: 'ASOCOMEX',active: true},
    { name: 'FUERA DE BODEGA',active: true},
    { name: 'T.C.I.',active: true},
    { name: 'SOTRANS',active: true},
    { name: 'TRANSPORTES EIT',active: true},
    { name: 'PATIOS UNIANDES',active: true},
    { name: 'ALMAFRONTERA',active: true},
    { name: 'LUIS JATIVA',active: true}
];

 const patios = [
     { name: 'ADUANOR',active: true},
     { name: 'ALMAFRONT',active: true},
     { name: 'ALMAFRONTERA - IPIALES',active: true},
     { name: 'ALMAROS',active: true},
     { name: 'BODEGAS ASOCIADAS - IPIALES',active: true},
     { name: 'BOSEFO',active: true},
     { name: 'EL ROSAL',active: true},
     { name: 'LA FRONTERA - IPIALES',active: true},
     { name: 'MEGABODEGAS - IPIALES',active: true},
     { name: 'MIDECAR',active: true},
     { name: 'PARTICULAR',active: true},
     { name: 'PROVIZCAINO',active: true},
     { name: 'SYTSA',active: true},
     { name: 'T.C.I.',active: true},
     { name: 'TRANSBOLIVARIANA',active: true},
     { name: 'TRUECA',active: true},
     { name: 'TSP - IPIALES',active: true},
     { name: 'ZONA DE AFORO',active: true},
     { name: 'TERAN',active: true},
     { name: 'NTA',active: true},
     { name: 'PAR. COLEGIO BOLIVAR',active: true},
     { name: 'PARQ. HOSPITAL - IPIALES',active: true},
     { name: 'ALANDINO',active: true},
     { name: 'LA RINCONADA',active: true},
     { name: 'PATIOS UNIANDES',active: true},
     { name: 'TRANSBRAMACAR ',active: true},
     { name: 'SOLBITRAN',active: true}
 ];
 
 
db.sync({ force: false })

    .then(() => {

        console.log('Iniciando con el sembrario malicioso');

        roles.forEach((rol) => Roles.create(rol));

        setTimeout(() => {
            users.forEach((user) => Users.create(user));
        }, 1000);

        setTimeout(() => {
            clients.forEach((client) => Client.create(client));
        }, 3000);

        setTimeout(() => {
            patios.forEach((patio) => Patio.create(patio));
        }, 5000);

    })
    .catch((error) => console.log(error))