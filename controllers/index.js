const db = require("../db");
require('dotenv').config();

let createData = async (req, res, next) => {
    try {
        const { name, email, country } = req.body;
        const postData = await db.query("INSERT INTO data (name, email, country) VALUES ($1,$2,$3) RETURNING *", 
        [name, email, country]);
    
        return res.json({
            status: "success",
            data: {
                message: "Data successfully created"
            }
        })    
    }
    catch (e) {
        return next(e);
    }
}

let readData = async (req, res, next) => {
    try {
        const getDataQuery = await db.query("SELECT * FROM data");
        const data = getDataQuery.rows;
    
        return res.json({
            status: "success",
            message: data
        })    
    }
    catch (e) {
        return next(e);
    }
}


let updateData = async (req, res, next) => {
    try {
        const { name, email, country } = req.body;
        
        name === undefined ? console.log('name not provided') : await db.query("UPDATE data SET name=$1 WHERE id=$2", [ name, req.params.id ]);
        email === undefined ? console.log('email not provided') : await db.query("UPDATE data SET email=$1 WHERE id=$2", [ email, req.params.id ]);
        country === undefined ? console.log('country not provided') : await db.query("UPDATE data SET country=$1 WHERE id=$2", [ country, req.params.id ]);

        return res.json({
            status: "success",
            data: {
                message: "Data successfully updated"
            }
        });
    }
    catch (e) {
        console.log(e);
        return next(e);
    }
}

let deleteData = async (req, res, next) => {
    try {
        const removeData = await db.query("DELETE FROM data WHERE id=$1", [req.params.id]);

        return res.json({
            status: "success",
            data: {
                message: "Data successfully deleted"
            }
        });
    }
    catch (e) {
        return next(e);
    }
}

module.exports = {
    createData, readData, updateData, deleteData
};