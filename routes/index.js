const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/profile', (req, res, next) => {
  console.log(req.session)
  res.render('profile', {user: req.session.user})
})

module.exports = router;
