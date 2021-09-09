const express = require('express');
const app = express();

const tradingBehaviourRoutes = require('./routes/trading-behaviours');
const accountInformationRoutes = require('./routes/account-information');

let port = process.env.PORT || 3000;

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.use('/trading-behaviours', tradingBehaviourRoutes);
app.use('/account-information', accountInformationRoutes);

function sleep(){
    return new Promise(function(resolve){
        let i = 0;
        while (i < (10000000000/5) ) { i++; }
        resolve({number: '2'});
    })
}


app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
})