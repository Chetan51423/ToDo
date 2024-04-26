const todo = require('../models/ToDo')

module.exports.getToDo = async (req, res)=>{
    const toDo = await todo.find();
    res.send(toDo);
}

module.exports.saveToDo = async (req, res) =>{
    const { text } = req.body;
    todo.create({text})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data);
    })
}

module.exports.updateToDo = async (req, res)=>{

    const {_id, text} = req.body;
    todo.findByIdAndUpdate(_id, {text})
    .then(()=> res.set(201).send("Updated Successfully....."))
    .catch((err)=> console.log(err));
}

module.exports.deleteToDo = async (req, res)=>{

    const {_id, text} = req.body;
    todo.findByIdAndDelete(_id)
    .then(()=> res.set(201).send("Deleted Successfully....."))
    .catch((err)=> console.log(err));
}