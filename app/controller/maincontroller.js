"use strict"
const auto = require('../models/auto');
const {render} = require('ejs');

exports.index = async (req,res)=>{
    try{
        const auto = await auto.getallautos;
        render('Index',{auto})
        return auto;
    }catch (error){
        console.error(error);
        console.log('Internal Error in index');
    }
}