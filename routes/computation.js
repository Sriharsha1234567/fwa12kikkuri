const express = require('express')
const router = express.Router()




router.get('/',(req,res,next) =>{
    console.log(req.query)
    
        
    if(Object.keys(req.query).length === 0){
        
        console.log("entered")
        let rand = Math.random()
        res.render('computation', {value : `cbrt applied to ${rand} is ${Math.cbrt(rand)}`})
    }
    else
    for(let a in req.query)
    {
    {
        
        console.log(a)
    res.render('computation', {value : `cbrt applied to ${req.query[a]} is ${Math.cbrt(req.query[a])}`})
    }
}

    
    
    
    
    

})



module.exports = router