const {getBalance}= require('./bank')
const DAO = require('./bankDAO')

test('retrieveBalance', () => {
    const spy = jest.spyOn(DAO,'retrieveBalance').mockImplementation(() => {});
    getBalance();
    expect(spy).toHaveBeenCalled();
})