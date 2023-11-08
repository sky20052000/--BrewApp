const mongoose  = require("mongoose");
const  bookSchema = mongoose.Schema({
        title:{
            type:String,
            required:true,
            trim:true,
            maxlength:[20],
            minlength:[2]
         },
         author:{
            type:String,
            required:true,
            trim:true,
            maxlength:[50],
            minlength:[6]
         },
         summary:{
            type:String,
            required:true,
            trim:true,
            maxlength:[25],
            minlength:[3]
         },

         createdBy:{
            type:String,
            trim:true,
            maxlength:[25],
         }
     
 
},{timestamps:true});




module.exports = mongoose.model("Book",bookSchema);