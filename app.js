const express = require( 'express' );
const app = express(); // creates an instance of an express application


var port = process.env.PORT || 3000; //access the port from server to deploy on

app.use(function(req,res,next){
	next();
})

app.use(function(req,res,next){
	console.log(req.method + ':' + req.url);
	next();
})
app.get('/',function(req,res,next){
	res.send('Method : ' + req.method + ' Status Code : ' + res.statusCode)
	next();
})
// app.get('/is-anybody-in-there',function(req,res,next){
// 	res.send('no one here ' + res.statusCode)
// 	next();
// })
// app.get('/special/',function(req,res,next){
// 	res.send('Method : ' + req.method + ' Status Code : ' + res.statusCode)
// })

// app.post('/modernism',function(req,res,next){
// 	res.send('this is modernism')
// 	next();
// })

// put listen at the bottom
app.listen(port, function(){
  console.log(`listening on port ${port}`)
})

