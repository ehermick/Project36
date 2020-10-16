const express = require ("express");
const {pool}=require("./configDB");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.get("/", (req, res)=>{res.render("index");});
app.get("/users/signup", (req, res)=>{res.render("signup");});
app.get("/users/login", (req, res)=>{res.render("login");});
app.post("/users/signup", (req, res)=>{
    let {username, email, pass} = req.body; 
    console.log({
        username,
        email,
        pass
    });
    pool.query(
        `SELECT * FROM users
        WHERE email = $1`, 
        [email], 
        (err, results) => { 
            if (err){
                console.log(err);
            }
            console.log(results.rows);
            if(results.rows.length>0){
                res.render("index", {message: "Email exists"});
            }
            else{
                pool.query(
                    `INSERT INTO users (username, email, password)
                    VALUES ($1, $2, $3)`, [username, email, pass], (err, results)=>{
                        if(err){
                            console.log(err);
                        }
                        console.log(results.rows);
                        res.redirect("/users/login");
                    }
                );
            }
});
});
app.listen(PORT, ()=>{console.log(`Running on ${PORT}`);});