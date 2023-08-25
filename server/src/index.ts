import express from 'express';


const app = express();

app.get('/' , (req , res) =>{
    res.status(200).json({msg:'hey'})
})

app.listen(5000)