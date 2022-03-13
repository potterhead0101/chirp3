var firebaseConfig = {
  apiKey: "AIzaSyBJ0ZsVIMzm0VrFbVmdBluEGUCG3aEy0E0",
  authDomain: "chirp-d9671.firebaseapp.com",
  databaseURL: "https://chirp-d9671-default-rtdb.firebaseio.com",
  projectId: "chirp-d9671",
  storageBucket: "chirp-d9671.appspot.com",
  messagingSenderId: "278888501836",
  appId: "1:278888501836:web:03bc56969276dad47d1ae9",
  measurementId: "G-G8QVRN58W9"
};


firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom(){
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
