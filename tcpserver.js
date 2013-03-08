// var net = require('net')
// var currentUser;
// var users = [];
// var chats = [];
// // var Firebase = require('./firebase-node');
// // var myRootRef = new Firebase('https://polar-bear-firebase.firebaseio.com/');
// 
// var server = net.Server(function(socket){
// 	var user = {}
// 	user["socket"]= socket;
// 	user["username"] = "";
// 	users.push(user);
// 	
// //	socket.write(chats.toString())
// 	
// 	socket.write("Enter a username: \n");
// 	socket.on('end',function() {
// 		for(var i=0;i<users.length; i++)
// 		{
// 			if(users[i]["socket"]==socket){
// 				users.splice(i,1);
// 				break;
// 			}
// 		}		
// 	});
// 	
// 	socket.on('data',function(data){
// 		
// 	
// 		
// 		for(var i=0;i<users.length; i++)
// 		{
// 			if(users[i]["socket"]==socket)
// 			{
// 				currentUser = users[i];
// 			}
// 		}
// 		if(currentUser["username"]=="")
// 		{
// 			currentUser["username"] = data.toString().replace("\n","");	
// 			socket.write("username set to: " + currentUser["username"] + "\n");						
// 			for(var i=0;i<users.length; i++)
// 			{
// 				
// 				if(users[i]==currentUser)
// 					continue; //check sent here!		
// 					users[i]["socket"].write(currentUser["username"] + " joined chat.\n");	
// 			}
// 			
// 			
// 		}
// 		else
// 		{
// //			myRootRef.push({username:currentUser["username"],text:data.toString()});
// //			chats.push (chat);
// 					
// 			for(var i=0;i<users.length; i++)
// 			{
// 				if(data.toString() == "end\n")
// 				{
// 					socket.end("Connection Closed By Client\n");
// 				}
// 				
// 				if(users[i]==currentUser){ 
// 					continue; //check sent here!
// 					
// 				}
// 				if(data.toString() == "end\n")
// 				{
// 					users[i]["socket"].write(currentUser["username"] + " disconnected\n");
// 				}else{
// 					users[i]["socket"].write(currentUser["username"] + " : " + data);	
// 				}
// 			}
// 		
// 		}
// 			
// 		
// 
// 		
// 
// 			
// 	});
// })
// 
// server.listen(8000);