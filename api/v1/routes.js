var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var payload = {}; // datos de usuario ;v
var secret = '$2y$12$RM3QIuN.9P/KUb4fugZPru0cZ3Sn14r9ajUzWFPzyBGtOxPGjsiE2'; // esto deberíamos guardarlo en un .env pero me fale ferga
var authMiddleware = require('../../middleware');

const productos = [{
        id: 1,
        code: '1111',
        name: 'mango',
        precio: 4,
        unidad: "kg"
    },
    {
        id: 2,
        code: '2222',
        name: 'mandarina',
        precio: 5,
        unidad: "kg"
    },
    {
        id: 3,
        code: '3333',
        name: 'limon',
        precio: 3,
        unidad: "kg"
    },
    {
        id: 4,
        code: '4444',
        name: 'naranja',
        precio: 3,
        unidad: "kg"
    }
]

// ruta: /api/v1/auth/token
// router.get('/auth/token', function(req, res) {
//     var token = jwt.encode(payload, secret);
//     res.json(token);
// });


router.get('/productos', function(req, res) {
    res.status(200).json({
        content: productos
    });
});


module.exports = router;