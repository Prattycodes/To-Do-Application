const mongoose= require('mongoose');
const { boolean } = require('zod');
//mongodb+srv://prattycodes:AwViaY5uUqCe5z29@newcluster.ymjuxnm.mongodb.net/todos
mongoose.connect("mongodb+srv://prattycodes:AwViaY5uUqCe5z29@newcluster.ymjuxnm.mongodb.net/todos");
const todoSchema= mongoose.Schema({
    title: String, 
    description: String, 
    completed: boolean
})

const todo= mongoose.model('todos', todoSchema);
module.exports= {
    todo
}