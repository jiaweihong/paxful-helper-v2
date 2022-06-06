const express = require('express');
const router = express.Router();

router.get('/deposit-amount', async (req, res) => {
    try {
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error occured has the server';
        res.send(error);
    }
})

router.get('/trading-amount', async (req, res) => {
    try {
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error occured has the server';
        res.send(error);
    }
})

router.get('/asking-price', async (req, res) => {
    try {
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error occured has the server';
        res.send(error);
    }
})

router.get('/dispute-rate', async (req, res) => {
    try {
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error has occured in the server';
        res.send(error);
    }
})

router.get('/trade-velocity', async (req, res) => {
    try {
        throw new Error;
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error has occured in the server';
        res.send(error);
    }
})

module.exports = router;