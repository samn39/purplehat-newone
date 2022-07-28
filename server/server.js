const { response } = require("express");
const path = require("path");
const express = require("express");
const pool = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3001;

// app.use(express.static(path.join(__dirname, './purple_hat')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
    

// app.get('/', (request, response) => {
//     response.sendFile(path.join(__dirname, './purple_hat/index.html'));
// });
// app.get('/getinvolved', (request, response) => {
//     response.sendFile(path.join(__dirname, './purple_hat/getinvolved.html'));
// });
// app.get('/faq', (request, response) => {
//     response.sendFile(path.join(__dirname, './purple_hat/faq.html'));
// });
// app.get('/form', (request, response) => {
//     response.sendFile(path.join(__dirname, './purple_hat/form.html'));
// });



//new user input
app.post("/contact", async (req, res) => {
    try {
        const {name, email, phone} = req.body;
        const newContact = await pool.query("INSERT INTO info (name, email, phone) VALUES($1, $2, $3)", [name, email, phone]);
        //res.json(newContact);
        res.redirect('http://localhost:3000/thanks');
    } catch (err){
        console.error(err.message);
    }
  
});


//get all contact
app.get("/contact", async (req, res) => {
    try {
        const allContact = await pool.query("SELECT * FROM info");
        res.json(allContact.rows);
    } catch (err){
        console.error(err.message);
    }
});

//get individual contact
app.get("/contact/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const allContact = await pool.query("SELECT * FROM info WHERE user_id = $1", [id]);
        res.json("allContact.rows[0]");
    } catch (err){
        console.error(err.message);
    }
});

//delete individual contact
app.delete("/contact/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const allContact = await pool.query("DELETE FROM info WHERE user_id = $1", [id]);
        res.json("contact deleted :D");
    } catch (err){
        console.error(err.message);
    }
});


app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}`);
});