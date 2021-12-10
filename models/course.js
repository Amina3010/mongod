const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    label : {
        type:String,
        required:true,
    },

    description : {
        type : String,
        default : "Description du cours",
    },
     
    volume : {
        type : Number,
        max : 7,
    },

    StarDate : {
        type : Date,
    
    },
});

const courseModel = mongoose.model('Course', courseSchema);
module.exports = courseModel;