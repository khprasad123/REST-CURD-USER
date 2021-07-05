const User = require("../models/userModel");


const checkDate = (testDate) => {
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!(date_regex.test(testDate))) {
        return false;
    }
    return true;
}


exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find();

        res.status(200).json({
            status: 'success',
            length: users.length,
            data: {
                users
            }
        });
    }catch(e){
        res.status(400).json({
            status: 'fail',
        });
    }
};


exports.getOneUser = async (req, res, next) =>{
    try{
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    }catch(e){
        res.status(400).json({
            status: 'fail',
        });
    }
};



exports.createUser = async (req, res, next) => {
    try{
        const user = await User.create(req.body);
        
        res.status(201).json({
            status: 'success',
            data: {
                user
            }
        });
    }catch(e){
        res.status(400).json({
            status: 'fail',
        });
    }
};

exports.updateUser = async (req, res, next) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    }catch(e){
        res.status(400).json({
            status: 'fail',
        });
    }
};

exports.deleteUser = async (req, res, next) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        
        res.status(200).json({
            status: 'success',
        });

    }catch(e){
        res.status(400).json({
            status: 'fail',
        });
    }
};
