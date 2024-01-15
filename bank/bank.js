const {retrieveBalance} = require('./bankDAO')

function getBalance(){
    retrieveBalance()
}

module.exports = {getBalance};