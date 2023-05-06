const db = require("../helpers/db.js");

exports.getAllUsers = (cb) => {
  db.query("SELECT * FROM users", (err, res) => {
    cb(err, res.rows);
  });
};

exports.getUserById = (id, cb) => {
  db.query("SELECT * FROM users WHERE id=$1", [id], (err, res) => {
    cb(err, res);
  });
};

exports.createUser = (data, cb) => {
  const q =
    "INSERT INTO users(email, username, password) VALUES ($1, $2, $3) RETURNING *";
  const val = [data.email, data.username, data.password];
  db.query(q, val, (err, res) => {
    if (res) {
      cb(err, res.rows);
    } else {
      cb(err);
    }
  });
};

exports.updateUser = (id, data, cb) => {
  let val = [id, data.email, data.username, data.password];
  const q =
    "UPDATE users SET email=$2, username=$3, password=$4 WHERE id=$1 RETURNING *";
  db.query(q, val, (err, res) => {
    cb(err, res);
  });
};

exports.deleteUser = (id, cb) => {
  let val = [id];
  const q = "DELETE FROM users WHERE id=$1 RETURNING *";
  db.query(q, val, (err, res) => {
    cb(res.rows);
  });
};
