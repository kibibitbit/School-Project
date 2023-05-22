const bcrypt = require('bcrypt');
async function hashpassword(req,res){
    const {Passwort} = req.body;
    console.log(Passwort)
    let hashedpassword = await bcrypt.hash(Passwort,10);

}
async function logincheck(req,res){

}

module.exports = {hashpassword,logincheck};