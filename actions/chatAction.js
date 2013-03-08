exports.action = {
  name: "chatAction",
  description: "chat",
  inputs: {
    required: [],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  run: function(api, connection, next){
    // your logic here
	 var roomKey = "actionHero:room:" + connection.room  ;
	 api.redis.client.lrange(roomKey,0,20,function(err,result){
	//	api.socketServer.prepareSocketMessage(connection, {context: "response", messages:result });
		connection.response.randomNumber = result;
		});
		
    next(connection, true);
  }
};
