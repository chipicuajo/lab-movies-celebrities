const router = require("express").Router();
let Celebrity = require('../models/Celebrity.model')


//CREATE New Celebs
router.get('/celebrities/create', (req,res,next)=>{
  res.render('celebrities/new-celebrity.hbs')
})

router.post('/celebrities/create', (req, res) => {
    const {name, occupation, catchPhrase} = req.body;

    Celebrity.create({name, occupation, catchPhrase})
    .then(() => res.redirect("/celebrities"))
    .catch((err) => {
        res.render("celebrities/new-celebrity.hbs")
        console.log(err.message)
    });
})


//FIND All Celebs
router.get('/celebrities', (req, res)=>{
    Celebrity.find()
    .then((result) => res.render('celebrities/celebrities.hbs', {celebrities: result}))
    .catch((err) => console.log('ERROR: ', err));
})

module.exports = router;