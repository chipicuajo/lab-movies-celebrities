const router = require("express").Router();

let Celebrity = require('../models/Celebrity.model')
let Movie = require('../models/Movie.model')

/* CREATE */
router.get("/movies/create", (req,res)=>{
    Celebrity.find()
    .then((data) => res.render('movies/new-movie.hbs', {celebrities: data}))
    .catch((err) => console.log(err.message));
})

router.post("/movies/create", (req,res)=>{
    const {title, genre, plot, cast} = req.body
    Movie.create({title, genre, plot, cast})
    .then(() => res.redirect('/movies'))
    .catch((err) => console.log(err.message))
})

/* INDEX ALL MOVIES*/
router.get("/movies", (req, res) => {
    Movie.find()
    .then((data) => res.render("movies/movies.hbs", {movies: data}))
    .catch((err) => console.log(err.message))
})

/*SHOW MOVIE DETAILS */
router.get('/movies/:id', (req,res)=>{
    const {id} = req.params;
    Movie.findById(id)
    .populate('cast')
    .then((data) => {
        res.render('movies/movie-details.hbs', {movie: data} )
    }).catch((err) => {
        console.log(err.message)
    });

})
module.exports = router;