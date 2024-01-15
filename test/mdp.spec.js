//const {mdpLengthSuperior8,mdpChiffreBool,mdpLettreBool,mdpSpecialBool} = require('./mdp')
const mdpValidate = require('./mdp')
test('ValidateAll', () => {
    let result = mdpValidate("JeSuisGentil8-./");
    expect(result).toBe(true);
})

test('ValidateLength', () => {
    let result = mdpValidate("JeS7./-");
    expect(result).toBe(false);
})
test('ValidateChiffre', () => {
    let result = mdpValidate("JESUISISISISSI./");
    expect(result).toBe(false);
})
test('ValidateLettre', () => {
    let result = mdpValidate("784555599874564./-");
    expect(result).toBe(false);
})
test('ValidateSpecial', () => {
    let result = mdpValidate("JeSuisGENTIL765");
    expect(result).toBe(false);
})

/*test('mdpChiffreBool', () => {
    let result = mdpChiffreBool("JeSuisGentil8")
    expect(result).toBe(true);
})

test('mdpLettreBool', () => {
    let result = mdpLettreBool("JeSuisGentil8")
    expect(result).toBe(true);
})

test('mdpSpecialBool', () => {
    let result = mdpSpecialBool("JeSuisGentil8/.-")
    expect(result).toBe(true);
})*/