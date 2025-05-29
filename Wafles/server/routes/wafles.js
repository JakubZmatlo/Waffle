const express = require('express');
const router = express.Router();

const wafleController = require("../controllers/wafles")

router.get('/', wafleController.getAllwafles);

router.get('/:id', wafleController.getwafleById);

router.post('/', wafleController.createwafle);

router.delete('/:id', wafleController.deletewafle );

router.put('/:id', wafleController.updatewafle);

module.exports = router;
