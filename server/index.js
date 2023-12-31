const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors()); 
app.use(express.json()); //req.body

//ROUTES

//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

// dashboard route
app.use("/dashboard", require("./routes/dashboard"));

//Create a to do
app.post("/todos", async(req, res) => {
    try {
        // console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
            // $1 is a parameter placeholder. The actual value will be provided in the array [someId].
        );

        res.json(newTodo);
    } 
    catch (err) {
        console.error(err.message);
    }
});

//Get all to do

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo"
        );
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a to do

app.get("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1", [id]
        )
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Update a to do
app.put("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]
            );
        res.json("Todo was updated");
    } catch (err) {
        console.error(err.message);
    }
})


//Delete a to do
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1", [id]
        );
        res.json("Todo was deleted");
    } catch (err) {
        console.error(err.message);
    }
})


// Initiating the server
app.listen(5000, () => {
    console.log("Server has started on port 5000");
})