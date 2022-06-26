const express =require('express')
const app = express()
const cors=require('cors')
const PORT=8000

app.use(cors())

let cricketers= {
    'sehwag': {
        'age': 43,
        'birthName': 'Virender Sehwag',
        'birthdate': '20 October 1978', 
        'birthLocation': 'Najafgarh, Delhi, India',
        'occupation': 'cricketer',
        'yearsActive': '1999-2013',
    },
    'virat':{
        'age': 33,
        'birthName': 'Virat Kohli',
        'birthdate': '	5 November 1988', 
        'birthLocation': 'New Delhi, India',
        'occupation': 'cricketer',
        'yearsActive': '2008-present',
    },
    'sachin':{
        'age': 49,
        'birthName': 'Sachin Ramesh Tendulkar',
        'birthdate': '24 April 1973', 
        'birthLocation': 'Bombay, Maharashtra, India',
        'occupation': 'cricketer',
        'yearsActive': '1989-2013',
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    }
}


app.get('/', (req,res)=>{
    res.sendFile(__dirname+'index.html')
})
app.get('api/:name',(req,res)=>{
    const cricName=req.params.name.toLowerCase()
    if(cricketers[cricName]){
        res.json(cricketers[cricName])
    }else{
        res.json(cricketrs['unknown'])
    }
})

app.listen(process.env.PORT || PORT,()=>{
    console.log('running')
})