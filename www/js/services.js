angular.module('app.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{}];



  var query = new CB.CloudQuery("score");
    //query.equalTo('score', 11); //find all Students who age is 21
    query.find({
    success: function(list){
      alert("Tamano: "+list.length);
      //chats.length=list.length;
      for (var i =  0; i < list.length; i++) {
        chats[i]=list[i];
        //chats[i].id=list[i].get('id');
        chats[i].score=list[i].get('score');
        chats[i].username=list[i].get('user').get('_id');
        
        //chats[i].username=list[i].get('id');
      }
      
      
    //list is an array of CloudObjects
    },
    error: function(err) {
    //Error in retrieving the data.
    }
    });

  return {
    all: function() {
      return chats;
    }
  };
});
