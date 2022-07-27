const { models, model } = require('mongoose');
const ToDo = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    // const Todo = await TodoModel.find();
    const Todo = await ToDo.find();
    res.send(Todo);
}

module.exports.saveToDo = async (req, res) => {
    console.log(req.body);
    const todo = new ToDo(req.body);
    console.log(todo)
    todo.save()
        .then(() => { res.set(201).send('Added Successfully........'); })
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;
    // TodoModel.findByIdAndDelete(_id)
    console.log(req.body);
    ToDo.findByIdAndDelete(_id)
        .then(() => { res.set(201).send('Deleted Successfully') })
        .catch((err) => { console.log(err) });
}
module.exports.deleteToDos=(req,res)=>{
    console.log(req.body);
    const arrayIds = req.body;
    console.log('delete TODOS');
    // arrayIds.forEach(ele=>{
    //     console.log(ele);
    // })
    // arrayIds.forEach(element => {
    //     ToDo.findByIdAndDelete(element)
    // .then(()=>{res.set(201).send('deleted successfully..')})
    // .catch((err)=>{console.log(err)});
    // });
    ToDo.deleteMany({})
    //ToDo.deleteMany({completed:true})
    .then(()=>{res.set(201).send('deleted successfully..')})
     .catch((err)=>{console.log(err)});
    
}
module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;
    console.log('server update');
    console.log(req.body);
    ToDo.findByIdAndUpdate(_id, { text })
        .then(() => { res.set(201).send('Updated Suceessfully.....') })
        .catch((err) => { console.log(err) });
}

module.exports.singleCheck = (req, res) => {
    console.log("singlecheck controller");
    console.log(req.body);
    const { _id, completed } = req.body;
    console.log(`ID -received ${req.body._id}`)
    console.log(`Completed Value  ${completed}`)
    ToDo.updateOne({ _id: req.body._id }, {completed:completed })
        .then((data) => {
            console.log(`Value after updated`, data)
            res.status(200).json({ status: true, message: 'Data updated' })
        })
        .catch((err) => { console.log(err) });
}
module.exports.multiCheck = (req,res)=>{
    console.log("multicheck");
    // ToDo.updateMany({},{$set:{completed:!completed}})
    // .then(()=>{res.set(201).send('deleted successfully..')})
    //  .catch((err)=>{console.log(err)});
}
