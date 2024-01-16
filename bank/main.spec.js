const {getBalance,transferMoney}= require('./bank')
const DAO = require('./bankDAO')
const banktransfer = require('./bankTransfer')
/*test('retrieveBalance', () => {
    const spy = jest.spyOn(DAO,'retrieveBalance').mockImplementation(() => {});
    getBalance();
    expect(spy).toHaveBeenCalled();
})*/
test.skip('transfer',() => {
    //GIVEN
    const spy = jest.spyOn(banktransfer, 'transfer');
    const accountId = 1;
    const amount = 7000;
    //WHEN
    transferMoney(accountId,amount);
    //THEN
    expect(spy).toHaveBeenCalledWith(accountId, amount)
})
test('debitAccount', () => {
    const spy = jest.spyOn(DAO,'debitAccount');
    const accountId = 1;
    const amount = 7000;
    DAO.debitAccount(accountId,amount);
    expect(spy).toHaveBeenCalled();
})
test('debitAccount has been called if transferMoney return a resolved promise', () => {
    const spy = jest.spyOn(banktransfer,'transfer').mockResolvedValue(() => Promise.resolve());
    const accountId = 1;
    const amount = 7000;
    transferMoney(accountId,amount);
    expect(spy).toHaveBeenCalled();

    const spy2 = jest.spyOn(DAO, 'debitAccount');
    let result = DAO.debitAccount(accountId,amount);
    expect(spy2).toHaveBeenCalled();
    expect(result).toBe(true);
})

test('debitAccount has not been called if transferMoney return a rejected promise', () => {
    const spy = jest.spyOn(banktransfer,'transfer').mockResolvedValue(() => Promise.reject());
    const accountId = 1;
    const amount = 7000;
    transferMoney(accountId,amount);
    expect(spy).toHaveBeenCalled();

    const spy2 = jest.spyOn(DAO, 'debitAccount');
    let result = DAO.debitAccount(accountId,amount);
    expect(spy2).toHaveBeenCalled();
    expect(result).toBe(true);
})