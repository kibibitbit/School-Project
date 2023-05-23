const bcrypt = require('bcrypt');
async function hashpassword(Passwort){
    let hashedpassword = await bcrypt.hash(Passwort,10);
    return hashedpassword;
}async function logincheck(Passwort,hashedpassword){
    const password = Passwort.toString();
    const hash = hashedpassword.toString()
    console.log(Passwort)
    console.log(hashedpassword)
    const results = await bcrypt.compare(password,hash)
    console.log(results)
    return results
}

module.exports = {hashpassword,logincheck};