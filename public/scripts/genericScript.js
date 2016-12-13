console.log( 'genero sourced' );

$( document ).ready( function(){
  console.log( 'JQ' );

  // test get function
  var getData = function(){
    console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/getTowers',
      success: function( response ){
        console.log( 'back from get call:', response );
        displayTowers( response );
      }, // end success
      error: function(){
        console.log( 'error with ajax call...');
      } // end error
    }) // end ajax
  }; // end getData

  // test get function
  var postData = function(){
    console.log( 'in postData' );
    // assemble object to send
    var objectToSend={
      name: $( '#nameIn' ).val(),
      location: $( '#locationIn' ).val()
    }; // end object to send
    $.ajax({
      type: 'POST',
      url: '/addTower',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from post call:', response );
      }, // end success
      error: function(){
        console.log( 'error with ajax call...');
      } // end error
    }) // end ajax
  }; // end getData

  /// - buttons to test - ///
  $( '#getTowersButton' ).on( 'click', function(){
    console.log( 'in getTowersButton on click' );
    getData();
  }); // end testGetButton
  $( '#addTowerButton' ).on( 'click', function(){
    console.log( 'in addTowerButton on click' );
    postData();
  }); // end addTowerButton

  var displayTowers = function( allTowers ){
    // empty outputDiv
    $( '#outputDiv' ).html( '' );
    var outputText = '';
    for (var i = 0; i < allTowers.length; i++) {
      $( '#outputDiv' ).append( '<p>' + allTowers[i].name + '</p>' );
    } // end for
  }; // end displayTowers

}); //end doc ready
