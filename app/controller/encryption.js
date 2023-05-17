const bcrypt = require('bcrypt');
async function hashpassword(req,res,hashedpassword){
    const {Passwort} = req.body;
    console.log(Passwort)
    hashedpassword = await bcrypt.hash(Passwort,10);
}
async function logincheck(req,res){

}

module.exports = {hashpassword,logincheck};