angular.module('app.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{}];



  var query = new CB.CloudQuery("score");
    //query.equalTo('score', 11); //find all Students who age is 21
    query.find({
    success: function(list){
      //alert("Tamano: "+list.length);
      //chats.length=list.length;
      for (var i =  0; i < list.length; i++) {
        //chats[i]=list[i];
        //chats[i].id=list[i].get('id');
        //chats[i].score=list[i].get('score');
        //chats[i].username=list[i].get("user").get("id");
        //alert(CB.fromJSON(list[i].get('user')));
        var lista = list[i].get('user');
        var query2 = new CB.CloudQuery("User");
        query2.equalTo('id', lista.get("id"));
        query2.findOne({
  		success : function(obj){
  			//alert(list.length);
  			for (var i =  0; i < list.length; i++) {
  				chats[i]=list[i];
  				chats[i].score=list[i].get('score');
  				chats[i].username=obj.get("username");
  				}
  				
  			//alert(obj.get("username"));
  			//chats[0].username=obj.get("username");
  		}, error : function(error){
		      //error
		}
		});


        /*var usuario = list[i].get('usuario');
        var query2 = new CB.CloudQuery("User");
    	query2.equalTo('username', "rihch888@gmail.com");
    	query2.find({
    	success: function(list2){
    		//alert(list2);
    		chats[0].username=list2[0].get('username');
    		//chats[0].username="entra";
    	},
    	error: function(err) {
	    //Error in retrieving the data.
	    }
    	});	*/
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
