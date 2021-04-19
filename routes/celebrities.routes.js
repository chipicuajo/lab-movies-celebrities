const router = require("express").Router();
let Celebrity = require('../models/Celebrity.model')

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

module.exports = router;