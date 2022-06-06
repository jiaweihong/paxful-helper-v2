const express = require('express');
const router = express.Router();
import usePaxful from "@paxful/sdk-js";
require('dotenv').config();


const paxfulApi = usePaxful({
    clientId: process.env.API_ID,
    clientSecret: process.env.secret,
});

router.get('/account-age', async (req, res) => {
    try {
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error has occured in the server';
        res.send(error);
    }
})

router.get('/used-devices', async (req, res) => {
    try {
        throw new Error;
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error has occured in the server';
        res.send(error);
    }
})

router.get('/quick-feedback', async (req, res) => {
    try {
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error occured has the server';
        res.send(error);
    }
})

router.get('/ip-addresses', async (req, res) => {
    try {
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error occured has the server';
        res.send(error);
    }
})

router.get('/login-region', async (req, res) => {
    try {
        res.json({number: '5'});
    } catch (error) {
        error.status = 500;
        error.message = 'An error occured has the server';
        res.send(error);
    }
})

router.post('/online-status', async (req, res) => {
    try {
        const userInfo = paxfulApi.invoke('paxful/v1/user/info/me');
        const data = await userInfo.json();



        res.send('hi');
    } catch (error) {
        
    }
})

module.exports = router;