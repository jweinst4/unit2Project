// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const port = 3000;

// USER MODEL REQUIRE
const User = require('./models/users');

// USER MODEL REQUIRE

// MIDDLEWARE
// body parser middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// static files middleware
app.use(express.static('public'))
// user middleware
//app.use('/users', usersController)
// session middleware
  
  // secret: "feedmeseymour", //some random string
  // resave: false,
  // saveUninitialized: false}
  


// CONTROLLERS
// fitting room three


// GET INDEX
app.get('/', (req, res) => {
  console.log("index route");
  res.render('index.ejs', {

  });
});

//ADD ITEM ROUTE
app.get("/users/addItem/:_id", (req, res) => {
  User.findById(req.params._id, (error, allUsers)=>{

    console.log("add Item route");
    
      res.render('users/addItem.ejs', {
        user: allUsers,
        tShirtImage: allUsers.tShirtImage,
        jeansImage: allUsers.jeansImage,
        pantsImage: allUsers.pantsImage,
        hatImage: allUsers.hatImage,
        sneakersImage: allUsers.sneakersImage,
        watchImage: allUsers.watchImage,
        jacketImage: allUsers.jacketImage
      });
    console.log("successful add item get route");

  });
  })

  app.get("/users/show/tShirts/:_id", (req, res) => {
    User.findById(req.params._id, (error, allUsers)=>{
  
      console.log("tShirt Show route");
      
        res.render('users/tShirt.ejs', {
          user: allUsers
        });

    });
    })

    app.get("/users/show/jeans/:_id", (req, res) => {
      User.findById(req.params._id, (error, allUsers)=>{
    
        console.log("Jeans Show route");
        
          res.render('users/jeans.ejs', {
            user: allUsers
          });
  
      });
      })

      app.get("/users/show/pants/:_id", (req, res) => {
        User.findById(req.params._id, (error, allUsers)=>{
      
          console.log("tPants Show route");
          
            res.render('users/pants.ejs', {
              user: allUsers
            });
    
        });
        })
        
        app.get("/users/show/hat/:_id", (req, res) => {
          User.findById(req.params._id, (error, allUsers)=>{
        
            console.log("Hat Show route");
            
              res.render('users/hat.ejs', {
                user: allUsers
              });
      
          });
          })
          
          app.get("/users/show/sneakers/:_id", (req, res) => {
            User.findById(req.params._id, (error, allUsers)=>{
          
              console.log("Sneakers Show route");
              
                res.render('users/sneakers.ejs', {
                  user: allUsers
                });
        
            });
            })

            app.get("/users/show/watch/:_id", (req, res) => {
              User.findById(req.params._id, (error, allUsers)=>{
            
                console.log("Watch Show route");
                
                  res.render('users/watch.ejs', {
                    user: allUsers
                  });
          
              });
              })

              app.get("/users/show/jacket/:_id", (req, res) => {
                User.findById(req.params._id, (error, allUsers)=>{
              
                  console.log("Jacket Show route");
                  
                    res.render('users/Jacket.ejs', {
                      user: allUsers
                    });
            
                });
                })
                
              
            
      
    

//SHOW route
app.get("/users/show/:_id", (req, res) => {
  User.findById(req.params._id, (error, allUsers)=>{
  
    console.log("show route");

  
      res.render('users/show.ejs', {
          user: allUsers,
          tShirtImage: allUsers.tShirtImage[0],
          jeansImage: allUsers.jeansImage[0],
          pantsImage: allUsers.pantsImage[0],
          hatImage: allUsers.hatImage[0],
          sneakersImage: allUsers.sneakersImage[0],
          watchImage: allUsers.watchImage[0],
          jacketImage: allUsers.jacketImage[0],
          mannequinImage: allUsers.mannequinImage
      });
  });
  })
// SEED ROUTE
// NOTE: Do NOT run this route until AFTER you have a create user route up and running, as well as encryption working!
// const seed = require('./models/seed.js');
// const User = require('./models/users.js');

app.get('/seedAgents', (req, res) => {
  // encrypts the given seed passwords
  seed.forEach((user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
  // seeds the data
  User.create(seed, (err, createdUsers) => {
    // logs created users
    //console.log(createdUsers);
    // redirects to index
    res.redirect('/');
  });
});



  //CURRENT OUTFIT ROUTE
app.get("/users/currentOutfit/:_id", (req, res) => {
  User.findById(req.params._id, (error, allUsers)=>{

      res.render('users/currentOutfit.ejs', {
        user: allUsers,
        userNumber: req.params._id,
        tShirtImage: allUsers.tShirtImage,
        jeansImage: allUsers.jeansImage,
        pantsImage: allUsers.pantsImage,
        hatImage: allUsers.hatImage,
        sneakersImage: allUsers.sneakersImage,
        watchImage: allUsers.watchImage,
        jacketImage: allUsers.jacketImage,
        mannequinImage: allUsers.mannequinImage
      });
    console.log("currentOutfit route")

  });
  })

  //ADD ITEM PUT ROUTE, THIS IS THE PART I NEED 
  app.put('/users/addItem/:_id', (req, res)=>{
    User.findByIdAndUpdate(req.params._id, req.body, (err, updatedUser)=>{
  
        console.log("successful add item put route")
   
    });
    });

//NEW route
app.get('/users/new', (req, res) => {
  //console.log("new route");
  res.render('users/new.ejs')
})



//INDEX route
app.get("/users/", (req, res) => {
User.findById(req.params._id, (error, allUsers)=>{
  console.log(allUsers);

    res.render('users/user.ejs', {
        user: allUsers,
        userID: allUsers.id

    });

});
})




//DELETE route
app.delete('/users/show/:_id', (req, res)=>{
User.findByIdAndRemove(req.params._id, (err, deletedUser)=>{
  
    console.log("id: ",req.params._id," deleted");
  
    res.redirect('/users');
});
});


//CREATE route
app.post('/users/create', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    console.log()
    if (err) {
      console.log(err)
    }
    console.log("successful user registration");
    res.redirect("/users/show/" + createdUser._id)
  })  
})



//PUT route, THIS IS THE PART I NEED 
app.put('/users/show/tShirt/:_id', (req, res)=>{
User.findByIdAndUpdate(req.params._id, {"$push": {"tShirtImage": req.body.tShirtImage } }, (err, updatedUser)=>{
  if(err){
    console.log(err);
  }
  else {
    console.log(updatedUser);
  }

    console.log("successful add tShirt post route");
    res.redirect('/users/currentOutfit/' + req.params._id);
});
});

//PUT route, THIS IS THE PART I NEED 
app.put('/users/show/jeans/:_id', (req, res)=>{
  User.findByIdAndUpdate(req.params._id, {"$push": {"jeansImage": req.body.jeansImage } }, (err, updatedUser)=>{
    if(err){
      console.log(err);
    }
    else {
      console.log(updatedUser);
    }
  
      console.log("successful add Jeans post route");
      res.redirect('/users/currentOutfit/' + req.params._id);
  });
  });

  app.put('/users/show/pants/:_id', (req, res)=>{
    User.findByIdAndUpdate(req.params._id, {"$push": {"pantsImage": req.body.pantsImage } }, (err, updatedUser)=>{
      if(err){
        console.log(err);
      }
      else {
        console.log(updatedUser);
      }
    
        console.log("successful add Pants post route");
        res.redirect('/users/currentOutfit/' + req.params._id);
    });
    });

    app.put('/users/show/hat/:_id', (req, res)=>{
      User.findByIdAndUpdate(req.params._id, {"$push": {"hatImage": req.body.hatImage } }, (err, updatedUser)=>{
        if(err){
          console.log(err);
        }
        else {
          console.log(updatedUser);
        }
      
          console.log("successful add Hat post route");
          res.redirect('/users/currentOutfit/' + req.params._id);
      });
      });

      app.put('/users/show/sneakers/:_id', (req, res)=>{
        User.findByIdAndUpdate(req.params._id, {"$push": {"sneakersImage": req.body.sneakersImage } }, (err, updatedUser)=>{
          if(err){
            console.log(err);
          }
          else {
            console.log(updatedUser);
          }
        
            console.log("successful add Sneakers post route");
            res.redirect('/users/currentOutfit/' + req.params._id);
        });
        });

        app.put('/users/show/watch/:_id', (req, res)=>{
          User.findByIdAndUpdate(req.params._id, {"$push": {"watchImage": req.body.watchImage } }, (err, updatedUser)=>{
            if(err){
              console.log(err);
            }
            else {
              console.log(updatedUser);
            }
          
              console.log("successful add Watch post route");
              res.redirect('/users/currentOutfit/' + req.params._id);
          });
          });

          app.put('/users/show/jacket/:_id', (req, res)=>{
            User.findByIdAndUpdate(req.params._id, {"$push": {"jacketImage": req.body.jacketImage } }, (err, updatedUser)=>{
              if(err){
                console.log(err);
              }
              else {
                console.log(updatedUser);
              }
            
                console.log("successful add Jacket post route");
                res.redirect('/users/currentOutfit/' + req.params._id);
            });
            });



//PROFILE EDIT route
app.get("/users/edit/:_id", (req, res) => {
  User.findById(req.params._id, (error, allUsers)=>{

      res.render('users/edit.ejs', {
          user: allUsers,
          userNumber: req.params.id,
          username: allUsers.username,
          password: allUsers.password
      });
    console.log("successful user profile edit route")
  });
  })

// CONNECTIONS
app.listen(port, () => {
  console.log('listening and...listening and...');
});

mongoose.connect('mongodb://localhost:27017/kingsman');
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});











