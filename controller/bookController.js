

const Book = require("../models/bookModels");



const addBook = async(req,res)=>{
    try{
        // console.log(req.find_user.id, req.find_user.role,"nn");
        let {title, author,summary} = req.body;
        if(!(title && author && summary )){
           return res.status(400).json({success:false, message:"Manadatory fields can not be empty!"});
        }

        // add book 
          let data = {
            title,
            author,
            summary,
            createdBy:req.find_user.id
          }

          await Book.create(data);
          return res.status(201).json({success:true, message:"Book added successfully"});


      }catch(e){
              // console.log(e,"ee")
            return res.status(500).json({
                success:false,
                message:"Something went wrong!"
            });
      }
}

const getBookList = async(req,res)=>{
    try{
           const getBookList = await Book.find({createdBy:req.find_user.id});
             if(!getBookList){
                   return res.status(200).json({success:true, message:"No records found!"});
             }
             return res.status(200).json({success:true, totalRecords:getBookDetail.length, data:getBookList});
     
      }catch(e){
              // console.log(e,"ee")
            return res.status(500).json({
                success:false,
                message:"Something went wrong!"
            });
      }
}

const getBookDetail = async(req,res)=>{
    try{
        const getBookDetail= await Book.findById({_id:req.params.id});
        if(!getBookDetail){
              return res.status(200).json({success:true, message:"No records found!"});
        }
         return res.status(200).json({success:true, data:getBookDetail});
     
      }catch(e){
              // console.log(e,"ee")
            return res.status(500).json({
                success:false,
                message:"Something went wrong!"
            });
      }
}

const deleteBook = async(req,res)=>{
    try{

    await Book.findByIdAndDelete({_id:req.params.id});
    return res.status(200).json({success:true, data:"Book deleted successfully!"});
     
      }catch(e){
              // console.log(e,"ee")
            return res.status(500).json({
                success:false,
                message:"Something went wrong!"
            });
      }
}

const updateBook = async(req,res)=>{
    try{
        let {bookId,title, author,summary} = req.body;
        if(!(bookId)){
           return res.status(400).json({success:false, message:"Manadatory fields can not be empty!"});
        }

        // add book 
          let data = {
            title,
            author,
            summary,
          }

          await Book.findByIdAndUpdate({_id:bookId},data,{new:true});
          return res.status(200).json({success:true, message:"Book updated successfully"});
     
      }catch(e){
              // console.log(e,"ee")
            return res.status(500).json({
                success:false,
                message:"Something went wrong!"
            });
      }
}



module.exports ={
    addBook,
    getBookList,
    getBookDetail,
    deleteBook,
    updateBook
 

    
}