const response = require("../helpers/standardResponse.js");
const userModel = require("../models/users.js");

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((err, results) => {
    if (results.length < 1) {
      return res.redirect("/404");
    }
    return response(res, "List All Users", results);
  });
};

exports.createUser = (req, res) => {
  userModel.createUser(req.body, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      return response(res, "Create User Successfull", results[0]);
    }
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  userModel.updateUser(id, req.body, (err, results) => {
    return response(res, "Update data success", results.rows[0]);
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userModel.deleteUser(id, (results) => {
    return response(res, "User Deleted!", results[0]);
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  userModel.getUserById(id, (err, results) => {
    if (results.rows.length > 0) {
      return response(res, "Detail User", results.rows[0]);
    } else {
      return res.redirect("/404");
    }
  });
};
