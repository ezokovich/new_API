const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require ("mysql");
const cors = require("cors");


const db = mysql.createPool({
    host: "localhost",
    user: "root",  
    password: "",
    database: "crud_API",
    port: "3307",
});


app.use(cors());
app.use(express.json());
app.use( bodyParser.urlencoded({extended: true}));

app.get("/api/get" , (req ,res ) => {
    const sqlGet = "SELECT * FROM foot ";
    db.query(sqlGet, (error , result) => {
        res.send(result);
    });
});
app.post("/api/post" ,(req, res) => {
    const {wins , losses, points_scored , nom , surnom} = req.body;
    const sqlInsert = "INSERT INTO foot (wins , losses, points_scored , nom , surnom) VALUES(?,?,?,?,?)";
    db.query(sqlInsert,[wins , losses, points_scored , nom , surnom],(error,result) => {
        if (error){
            console.log(error);
        }
    } );
})
 
app.delete("/api/del/:id" ,(req, res) => {
    const {id} = req.params;
    const sqlDelete ="DELETE FROM foot WHERE id = ?";
    db.query(sqlDelete,id,(error,result) => {
        if (error){
            console.log(error);
        }
    } );
})

app.get ("/", (req, res, ) => {
    // const sqlInsert = "INSERT INTO foot (wins , losses, points_scored , nom , surnom) VALUES('123','543','7654','DEZR','hgfdsfrte')";
    // db.query(sqlInsert, (error,result) => {
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("hello ezok" )
    // } );
})



app.listen(5000, () => {
    console.log("server is runinng on port 5000 ");
})