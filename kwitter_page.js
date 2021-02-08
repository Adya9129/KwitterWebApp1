var firebaseConfig = {
    apiKey: "AIzaSyBBiv6IVNOjmNSOX6XlfFw_DnKKTGnEePs",
    authDomain: "lets-chat-web-app-9ac4a.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-9ac4a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-9ac4a",
    storageBucket: "lets-chat-web-app-9ac4a.appspot.com",
    messagingSenderId: "142950071700",
    appId: "1:142950071700:web:debf8c721c95617a6da381",
    measurementId: "G-DLQ2KTECC4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function Send(){
      msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
         name : user_name,
         message : msg,
         like : 0
     });
     document.getElementById("msg").value =  " " ;
  }
  function getData() {
       firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
            firebase_message_id = childKey;
             message_data = childData; 
             //Start code
             console.log(firebase_message_id);
         console.log(message_data);
         name1 = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_width_tag  = "<h4>" + name1 + "<img src='tick.png' class='user_tick'>" + "</h4>";
         message_width_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-danger' id=" + firebase_message_id + " value=" +  like + " onclick = 'updateLike(this.id)'>";
         span_width_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>";
         row = name_width_tag + message_width_tag + like_button + span_width_tag;
         document.getElementById("output").innerHTML += row;
         //End code 
        } }); }); } 
     getData();
     function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }     
  function updateLike(message_id){
button_id = message_id;
console.log(button_id);
likes = document.getElementById(button_id).value;
console.log(likes);
updated_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes
});
  }