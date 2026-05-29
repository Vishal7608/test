const express = require('express');
const { createService, getAllServices,updateService, deleteService } = require('../controllers/serviceController');

const router = express.Router();

// GET route to test home link
router.get('/', (req, res) => {
    res.send('Welcome to the Service Quotation System API test!');
  });
// POST route to create service


module.exports = router;
