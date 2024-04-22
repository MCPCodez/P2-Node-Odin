var express = require('express');
var router = express.Router();
/* Message to test add */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.DATA)
  res.render('index', { title:'Mini MessageBoard', messages: messages });
});

router.get('/new', function(req,res,next){
  res.render('form',{});
});

router.post('/new',function(req,res,next){
  messages.push({
    text: req.body.userMessage,
    user: req.body.user,
    added: new Date()
  })
  res.redirect('/')
});
module.exports = router;
