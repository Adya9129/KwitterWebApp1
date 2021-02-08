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
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }
  function getData() {
    firebase.database().ref("/").on('value',
function(snapshot) {
  document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {
  childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name -" + Room_names);
//Start code
row = "<div class'room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
//End code
});
});
}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
