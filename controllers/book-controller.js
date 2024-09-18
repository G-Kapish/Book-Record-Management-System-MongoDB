const {BookModel, UserModel} =require("../models")

exports.getAllBooks = async(req, res) => {
    const books = await BookModel.find()

    if(books.length === 0)
    {
        return res.status(404).json({
            success: false,
            message: "No Book Found"    
        })
    }    

    return res.status(200).json({
        success: true,
        data: books
    })
};

exports.getSingleBookById = () => {};

// module.exports = {getAllBooks, getSingleBookById}