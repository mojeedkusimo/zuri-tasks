# ZURI TASKS
Kindly find below api link and documentation.
## https://zuri-tasks.herokuapp.com/api

### API Endpoint Documentation

#### Endpoint: POST /api/data

##### Request: 

{
      "name": String,
      "email": String,
      "country": String
}

##### Response:

{
      "status": "success",
      "data": {
            "message": "Data successfully created"
      }
}

Routes below:

      .post("/api/data", createData)
      .get("/api/data", readData)
      .patch("api/data/:id", updateData)
      .delete("api/data/:id", deleteData);