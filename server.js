const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const user = require('./userschema')

mongoose.connect('mongodb://127.0.0.1:27017', err=>err? console.log(err): console.log('db is running'))
app.use(express.json()) 
const port = 9000;
app.post('/', async(req,res)=>{
    try {
        const newUser = User.create (req.body)
        res.json(newUser)

        
    } catch (error) {
        console.log(error)
        
    }
})
app.get('/', async(req,res)=>{
    try {
        const newUser = await User.find
        res.json(newUser)
    } catch (error) {
        console.log(error)
    }
 })
 app.delete('/:id', async(rep,res)=>{
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.id)
        res.json({msg:'user has be deleted'})
    } catch (error) {

        console.log(error)
        
    }


 })
 app.put('/:id', async(req,res)=>{
    try {
        const updatedUser= await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}}, {new:true})
        res.json(updatedUser)
    } catch (error) {
        console.log(error)
    }
 })


app.listen(port, err=>err? console.log(err): console.log(`server is running on ${port}`))