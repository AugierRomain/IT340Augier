//const {mdpLengthSuperior8,mdpChiffreBool,mdpLettreBool,mdpSpecialBool} = require('./mdp')
const mdpValidate = require('./mdp')
const mdpLengthMin = 8
test('ValidateAll', () => {
    let result = mdpValidate("JeSuisGentil8-./",mdpLengthMin);
    expect(result).toBe(true);
})

test('ValidateLength', () => {
    let result = mdpValidate("JeS7./-",mdpLengthMin);
    expect(result).toBe(false);
})
test('ValidateChiffre', () => {
    let result = mdpValidate("JESUISISISISSI./",mdpLengthMin);
    expect(result).toBe(false);
})
test('ValidateLettre', () => {
    let result = mdpValidate("784555599874564./-",mdpLengthMin);
    expect(result).toBe(false);
})
test('ValidateSpecial', () => {
    let result = mdpValidate("JeSuisGENTIL765",mdpLengthMin);
    expect(result).toBe(false);
})