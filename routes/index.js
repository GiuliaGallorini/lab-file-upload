const express = require('express');
const multer  = require('multer'); // NEW
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const router  = express.Router();
const upload = multer({ dest: "./public/uploads/" }); // NEW

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get("/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

// router.post("/signup", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const photo = req.body.photo;

//   if (username === "" || password === "") {
//     res.render("auth/signup", { message: "Indicate username and password" });
//     return;
//   }

//   if (photo === "") {
//     res.render("auth/signup", { message: "Please upload a picture" });
//     return;
//   }

//   User.findOne({ username }, "username", (err, user) => {
//     if (user !== null) {
//       res.render("auth/signup", { message: "The username already exists" });
//       return;
//     }

//     const salt = bcrypt.genSaltSync(bcryptSalt);
//     const hashPass = bcrypt.hashSync(password, salt);
//     const newUser = new User({
//       username,
//       password: hashPass,
//       photo
//     });

//     newUser.save()
//     .then(() => {
//       res.redirect("/profile");
//     })
//     .catch(err => {
//       res.render("auth/signup", { message: "Something went wrong" });
//     })
//   });
// });

// router.get("/", (req, res, next) => {
//   Picture.find()
//   .then(pictures => {
//     res.render('index', {pictures})
//   })
// });

// // upload.single("photo") => middleware, a function of (req,res,next)
// // This middleware take the content from <input type="file" name="photo">
// // and define a req.file, an object with information about the uploaded file
router.post("/upload", upload.single("photo"), (req, res) => {

  const pic = new User({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname
  });

  pic.save(err => {
    res.redirect("/");
  });
});


module.exports = router;
