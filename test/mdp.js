function mdpValidate(mdp,edge) {
    if (mdpLengthSuperior(mdp,edge)){
        console.log("edge")
        if (mdpChiffreBool(mdp)){
            if (mdpLettreBool(mdp)){
                if(mdpSpecialBool(mdp)){
                    console.log('mdp valid')
                    return true
                }
            }           
        }     
    }
   return false
}

function mdpLengthSuperior (mdp,edge) {
    if (mdp.length > edge) {
        return true
    }
        return false
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
mdpValidate(mdp,8)
/*console.log(mdpLengthSuperior(mdp))
console.log(mdpChiffreBool(mdp))
mdpLettreBool(mdp)*/