# ZURI TASKS
Kindly find below api link and documentation.
## https://zuri-tasks.herokuapp.com/api

### API Endpoint Documentation

#### Endpoint: POST /api/data

##### Request: 
```javascript
{
      "name": String,
      "email": String,
      "country": String
}
```
##### Response:
```javascript
{
      "status": "success",
      "data": {
            "message": "Data successfully created"
      }
}
```

#### Endpoint: GET /api/data
##### Response:
```javascript
{
      "status": "success",
      "message": [
            {
            "name": String,
            "email": String,
            "country": String
            },
            ...
      ]
}
```

#### Endpoint: PATCH /api/data/:id

##### Request: 
```javascript
{
      "name": String,
      "email": String,
      "country": String
}
```
##### Response:
```javascript
{
      "status": "success",
      "data": {
            "message": "Data successfully updated"
      }
}
```
#### Endpoint: DELETE /api/data/:id
##### Response:
```javascript
{
      "status": "success",
      "data": {
            "message": "Data successfully deleted"
      }
}
```