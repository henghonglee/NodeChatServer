NodeChatServer
-
TCP based implementation of mobile chat engine built on the ActionHero Framework
Chat client for iOS
https://github.com/henghonglee/NodeChatiOSClient


Features include:
- Channels
- Redis Pub/Sub system
- Push notifications
- Scalable database, HTTP client capabilites with ActionHero Framework 

Install instructions

    git clone <repository_name>
    cd <repository_name>
    npm install
    npm start

Connect using:

    nc localhost 5000
    
fb_name param is used to determine your nickname

    paramsAdd fb_name=<your-name-here>
    
iOS device_token is for upload of device token for push notification services

    paramsAdd device_token=<your-device-token>
    
Room change (default NodeChatiOSClient uses only Lobby as room)

    roomChange <room-name>
    
Leave Room , stops listening on room and stops recieving push notifications

    leaveRoom <room-name>
    
Say message in current room

    say <message>


*Create own pem files (certs and keys) for push notification setup*

*Demo server : 54.225.247.34:8000:5000*

* Demo server redis commander : 54.225.247.34:8081 *
