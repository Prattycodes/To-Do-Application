const mongoose= require('mongoose');
//mongodb+srv://prattycodes:AwViaY5uUqCe5z29@newcluster.ymjuxnm.mongodb.net/todos

mongoose.connect("mongodb+srv://prattycodes:AwViaY5uUqCe5z29@newcluster.ymjuxnm.mongodb.net/todos");
const todoSchema= mongoose.Schema({
    title: String, 
    description: String, 
    completed: Boolean
})

const todo= mongoose.model('todos', todoSchema);

module.exports= {
    todo
}