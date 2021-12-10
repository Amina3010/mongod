const mongoose = require('mongoose');

const groupeSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
    },

    nbrdegarcons:{
        type:Number,
        required:true,
    },
    
    nbrdefilles:{
        type:Number,
        required:true,
    }


});

const groupeModel = mongoose.model('Groupe', groupeSchema);
module.exports = groupeModel;