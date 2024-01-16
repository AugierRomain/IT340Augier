const {bankDAO,debitAccount} = require('./bankDAO')
const banktransfer = require('./bankTransfer')

function getBalance(){
    bankDAO.retrieveBalance()
}
function transferMoney(accountId,amount){
    let result = banktransfer.transfer(accountId,amount);
    result.then(() => debitAccount(accountId,amount))
    .catch(() => console.log("Rejected"))
}

module.exports = {getBalance,transferMoney};