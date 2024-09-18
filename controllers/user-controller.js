const {BookModel, UserModel} =require("../models")

exports.getAllUsers = async(req, res) => {
    const users = await UserModel.find()

    if(users.length === 0)
    {
        return res.status(404).json({
            success: false,
            message: "No User Found"    
        })
    }    

    return res.status(200).json({
        success: true,
        data: users
    })
};

exports.getSingleUserById = async(req, res)=>{
    const {id} = req.params;
    // const book = users.find((each)=> each.id ===id);
    const user = await UserModelModel.findById(id);
    if(!user)
        return res.status(404).json({
            success: false,
            message: "User Not Found"
    })
    return res.status(200).json({
        success: true,
        data: user
    })
};

exports.addNewUser = async(req, res) => {
    const {data} =  req.body;

    if(!data){
        return res.status(400).json({
            success: false,
            message: "No Data Provided"
        })
    }

    await UserModel.create(data)
    const allUsers = await UserModel.find();
    
    return res.status(201).json({
        success: true,
        data: allUsers,
    })
};

exports.updateUserById = async(req, res) => {
    const {id} = req.params;
    const {data} = req.body;

    const updateUser = await UserModel.findByIdAndUpdate({_id:id}, data, {new:true})

    return res.status(200).json({
        success: true,
        data: updateUser
    })
};
