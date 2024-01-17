const Users = require("../model/model");
require("dotenv").config();

const getAllUsers = async (req, res) => {
    let AllUser = await Users.find({});
    res.send(AllUser);
};

const deleteUser = async (req, res) => {
    let id = req.params.id;
    let FindUserAndDelete = await Users.findByIdAndDelete({ _id: id });
};

const postUser = async (req, res) => {

    const NewUser = new Users(req.body)
    NewUser.save()
}

module.exports = { getAllUsers, deleteUser, postUser }