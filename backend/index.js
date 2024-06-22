const express = require('express')
const { createTodo, updateTodo } = require('./types')
const app = express()
const port = 3000

app.use(express.json())

app.post('/todo', function(req, res) {
    const createPayLoad= req.body;
    const parsedPayLoad= createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
})
app.get('/todo', function(req, res) {

})
app.put('/completed', function(req, res) {
    const updatePayLoad= req.body;
    const parsedPayLoad= updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})