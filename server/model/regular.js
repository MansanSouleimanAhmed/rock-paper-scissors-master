const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RegularSchema = new Schema({
    regular:  Number,  
});
module.exports = mongoose.model('regular', RegularSchema,'regulars');