const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000 ;

// middleware

app.use(cors())
app.use(express.json())


const users = [
    {"id": 1,"name": "John Doe", "email": "john.doe@example.com"},
    {"id": 2,"name": "Jane Smith","email": "jane.smith@example.com"},
    {"id": 3,"name": "Alice Johnson","email": "alice.johnson@example.com"}
  ]


app.get('/', (req,res)=>{
    res.send('User Management Server is Running')
})
app.get('/users', (req,res)=>{
    res.send(users)
})
app.post('/users', (req,res)=>{
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length +1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})