const express = require('express')
const app = express()
const PORT = 8000

const supervisors = {
    'flash': {
        'birtname':'flash',
        'Location':'main',
        'nets': 3
    },
    'pedro luis': {
        'birtname':'perro luis',
        'Location':'main',
        'nets': 5
    },
    'cortez': {
        'birtname':'Juan Cortez',
        'Location':'Shields',
        'nets': 7
    },
    'unknown': {
        'birtname':'idk',
        'Location':'idk',
        'nets': 'idk'
    }

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rName = request.params.name.toLowerCase()
    if(supervisors[rName]){
        response.json(supervisors[rName])
    }else{
        response.json(supervisors['unknown'])
    }
    // response.json(supervisors)
})




app.listen(8000, () => {
    console.log(`the server is now runnig on a port ${PORT} better go catch it`)
})