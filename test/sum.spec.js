
const sum=require('./sum')
test('sum', () => {
  let result=sum(2,2);
  expect(result).toBe(4);
  });