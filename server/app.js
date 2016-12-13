var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;
// create connection string to our database
var connectionString = 'postgres://localhost:5432/tauerRangers';

app.listen( port, function( req, res ){
  console.log( 'server listening on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// testGet
app.get( '/getTowers', function( req, res ){
  console.log( 'getTowers url hit' );
  // connect to db
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    }
    else{
      console.log( 'connected to db' );
      var query = client.query( 'SELECT * from towers') ;
      // array for towers
      var allTowers = [];
      query.on( 'row', function( row ){
        // push this tower into the new array
        allTowers.push( row );
      })
      query.on( 'end', function(){
        // finish the operation
        done();
        // send back data
        console.log( allTowers );
      });
    }
  }); // end connect
  // assemble object to return
  var objectToReturn = {
    field0: 'I came from testGet on server'
  }; // end object to return
  // return objectToReturn
  res.send( objectToReturn );
}); // end testGet

// testPost
app.post( '/addTower', urlEncodedParser, function( req, res ){
  console.log( 'addTower url hit. req.body:', req.body );
  // do work here
  // connect to db
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    }
    else{
      console.log( 'connected to db' );
      // use wildcards to insert record
      client.query( 'INSERT INTO towers( name, location ) values ( $1, $2 )', [ req.body.name, req.body.location ] );
      done();
      res.send( 'woof' );
    }
  }); // end db connection
  // assemble object to return
}); // end testPost

// static folder
app.use( express.static( 'public' ) );
