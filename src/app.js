const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const app = express()
const port = process.env.PORT || 3000
// Define path for express config
const publicdir = path.join(__dirname , '../public')
const viewpath = path.join(__dirname , '../templates/views')
const partialpath = path.join(__dirname , '../templates/partials') 
// set up handlebars and views location & set partials
app.set('view engine' , 'hbs')
app.set('views' , viewpath)
hbs.registerPartials(partialpath)
//setup static directory to serve
app.use(express.static(publicdir))

app.get('',(req ,res)=>{
    res.render('index' , {
        title: 'Bitsphere Infosystem' ,
        name: 'Kushagra'
    })
    })
app.get('/about',(req ,res)=>{
    res.send('welcome to  about us')
    })

//conecting ai to browser

    app.get('/products',(req ,res)=>{
        if(!req.query.address)
        {
            return res.send({error: 'you must provide an address'})
        }
        geocode(req.query.address,(error , {latitude , longitude} = {}) =>
        {
            if(error){
                res.send({error}) 
            }
            else
            {
                res.send({
                    latitude ,
                    longitude
                })
            }
        })
        })
    
    app.get('*',(req ,res)=>{
        res.render('404' , {
            title: 'Bitsphere Infosystem' ,
            name: 'Kushagra',
            errormsg: '404 error'
        })
        })

    app.listen(port)
    