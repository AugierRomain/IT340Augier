function mdpValidate(mdp) {
    if (mdpLengthSuperior8(mdp)){
        if (mdpChiffreBool(mdp)){
            if (mdpLettreBool(mdp)){
                if(mdpSpecialBool(mdp)){
                    return true
                }
            }
            
        }     
    }
   return false
}

function mdpLengthSuperior8 (mdp) {
    if (mdp.length > 8) {
        return true
    }
    else {
        return false
    }
}
function mdpLettreBool (mdp) {
    let reg = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/
    for(caractere of mdp){
        if (reg.test(caractere)){
            return true
        }
    }
    return false
}

function mdpChiffreBool (mdp) {  
    let reg = /[0-9]/
    for(caractere of mdp){
        if (reg.test(caractere)){
            return true
        }
    }
    return false
}

function mdpSpecialBool (mdp) {
    let reg = /[./-]/
    for(caractere of mdp){
        if (reg.test(caractere)){
            return true
        }
    }
    return false
}
module.exports = mdpValidate;
const mdp = "JeSuisGentil"
console.log(mdpLengthSuperior8(mdp))
console.log(mdpChiffreBool(mdp))
mdpLettreBool(mdp)