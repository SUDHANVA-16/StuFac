//to import we use "require" keyword in JS
const express = require('express');
const app = express();
const PORT = 5000;
const Stud = require("./models/Student");
const Faculty = require("./models/Faculty");
require('./db')
app.use(express.json());
//creating a resource
app.post('/student', async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const createdStu = new Stud(data);
        await createdStu.save();
        res.send("Student Created")
    } catch (error) {
        console.log("Error", error);
    }
});
app.get("/student", async (req, res) => {
    try {
        const studentList = await Stud.find(); //find() to read all documents for student collection
        res.send(studentList);
    } catch (error) {
        console.log(error)
    }
});
app.put("/student/:id", async (req, res) => {
    try {
        const StuId = req.params.id;
        await Stud.updateOne({ id: StuId }, { $set: req.body });
        res.send("Student Created")
    } catch (error) {
        console.log(error);
    }
});
app.delete("/student/:id", async (req, res) => {
    try {
        await Stud.deleteOne({ id: req.params.id });
        res.send("Deleted Successfully");
    } catch (error) {
        console.log(error);
    }
});
app.post("/fact", async (req, res) => {
    try {
        const Data = req.body;
        const fact = new Faculty(Data);
        await fact.save();
        res.send("Faculty Created");
    } catch (error) {
        console.log(error);
    }
});
app.get("/fact", async (req, res) => {
    try {
        const facList = await Faculty.find();
        res.send(facList);
    } catch (error) {
        console.log(error);
    }
});
app.put("/fact/:id", async (req, res) => {
    try {
        const FactId = req.params.id;
        await Faculty.updateOne({ id: FactId }, { $set: req.body });
        res.send("Updated Successfully")
    } catch (error) {
        console.log(error)
    }
});
app.delete("/fact/:id", async (req, res) => {
    try {
        await Faculty.deleteOne({ id: req.params.id });
        res.send("Successfully Deleted")
    } catch (error) {
        console.log(error);
    }
})

//starting the server
app.listen(PORT, function () {
    console.log(`Server is on localhost:${PORT}`);
}
);
