const express = require('express');
const mongoose = require('mongoose');

const app = express();

// To parse request body
app.use(express.json());

console.log(`------------ Mongo DB Connection ------------`);
// mongodb://localhost:27017/user_databdase
async function mongoConnection(){
    try {
        await mongoose.connect("mongodb://localhost:27017/user_database");
        console.log("------- Mongo DB Connection Successful -------" );
    } catch (error) {
        console.log("Mongo DB Connection Failed",error);
    }
}
mongoConnection();

// Schema: define structure of document
// Model: define structure of collection


// Define schema for Student
const studentSchema = new mongoose.Schema({
    name: {type: String},
    college: {type: String},
    marks: {type: Number},
    country: {type: String},
    branch: {type: String}
},{collection: "student_collection"}
);

// Create model for Student Schema
const studentModel = mongoose.model("Student",studentSchema);


// To retrieve data from database
app.get("/students",async (request,response)=>{
        const allStudents = await studentModel.find({});
        response.status(200)
        .json({
            allStudents
        });
});



//To retrieve or fetch data
// app.get("/students",(request,response)=>{
//     response.status(200)
//     .json({
//         students: [
//             {id: 1, name: 'Ravi', age: 23},
//             {id: 2, name: 'Raj', age: 24},
//             {id: 3, name: 'Rahul', age: 25},
//         ]
//     });
//     response.send(`Students Data: ${request.url}`);
// });


//To create or add resource
app.post("/create",(request,response)=>{
    const {name,college, marks,country,branch} = request.body;
    studentModel.create({
        name,
        college,
        marks,
        country,
        branch
    });
    response.send(`Students created successfully.....`);
});

//To update resource
app.put("/update",async (request,response)=>{
    const {name,college, marks,country,branch} = request.body;
    const studentUpdated = await studentModel.findOneAndUpdate(
        {marks: marks}, // Find the student to update
        {name: name, college: college}, // Update the student with new data
        {new: true, upsert: true}  // flags
    )
    response.send(`Students updated successfully:`);
});

// //To delete resource
// app.delete("/delete/:mrks",async (request,response)=>{
//     const {mrks} = request.params.mrks;
//     const deletedStudent  = await studentModel.findOneAndDelete({marks: mrks});
//     if(deletedStudent){
//         response.status(400).json({
//             message: `Student with marks ${mrks} deleted successfully`,
//             deletedStudent
//         });
//     }
//     else{
//         response.send(`Student not found`);
//     }
// }
// );
     
// To delete the resource using particular field 

// http://localhost:8080/delete/555

app.delete("/delete/:mrk", async (request, response)=>{
    const mrk = request.params.mrk;
    const deletedStudent = await studentModel.findOneAndDelete({marks:mrk})
    if(!deletedStudent) {
        return response.status(404).json({ 
            "status": 404,
            "message":  `Not Found, Student with marks: ${mrk}`})
    }
    return response.status(200).json(deletedStudent);

} );

app.listen(8080,()=>{
    console.log("Hey gyus, server is running....");
});