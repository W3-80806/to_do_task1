const mysql = require('mysql');
const express = require('express');
const config = require('config');

const app =  express.Router();

var connectionDetails = {
                            host: config.get("server"),
                            database: config.get("database"),
                            user: config.get("user"),
                            password: config.get("password")
                        }

//Below code handles Users GET, POST, PUT,DELETE
app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var statement = `select * from users`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
             response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var username = request.body.username;
    var status = request.body.status;
    var due_date = request.body.due_date;
    var priority = request.body.priority;
    var description = request.body.description;

    var statement = 
        `insert into users(username,status,due_date,priority,description) values('${username}','${status}','${due_date}','${priority}','${description}')`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

app.put("/:id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var id = request.params.id;
    var username = request.body.username;
    var status = request.body.status;
    var due_date = request.body.due_date;
    var priority = request.body.priority;
    var description = request.body.description;

    var statement = 
        `update users set username='${username}',due_date='${due_date}',priority='${priority}',description='${description}',status='${status}'where id =${id}`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});
app.delete("/:id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var id = request.params.id;//This data belongs to header part 
  
    var statement = 
        `delete from users where id =${id}`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

module.exports =app;