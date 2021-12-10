const mongoose = require('mongoose');

const participantsSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
    },

    lastname : {
        type : String,
        required : true,
    },

    birthDate : {
        type : Date,
        required : true,
    },

    address : {
        type : String,
        required : true,
    },

});

const participantsModel = mongoose.model('Participants', participantsSchema);
module.exports = participantsModel;