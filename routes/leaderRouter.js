const express = require ('express');
const bodyParser = require ('body-parser');

const leadersRouter = express.Router();

leadersRouter.use(bodyParser.json());

leadersRouter.route('/')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next ) => {
    res.end('will send all leaders to you!');
})

.post((req,res,next)=>{
    res.end('will add the leaders: ' + req.body.name + ' with detail:' + req.body.description);
})

.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})

.delete((req,res,next ) => {
    res.end('Deleting all the leaders');
});

leadersRouter.route('/:leaderId')
.all((req,res,next)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('will send details of the leaders: '+req.params.leaderId+' to you!')
})

.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/ '+req.params.leaderId)
})

.put((req, res, next) => {
    res.write('Updating the leaders: ' + req.params.leaderId + '\n');
    res.end('Will update the leaders: ' + req.body.name + 
          ' with details: ' + req.body.description);
  })
  
  .delete((req, res, next) => {
      res.end('Deleting leaders: ' + req.params.leaderId);
  });

module.exports = leadersRouter;