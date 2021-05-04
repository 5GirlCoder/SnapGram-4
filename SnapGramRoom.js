/* This js is for the room screen */ 

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAXTDZemPaas9wCYf4wdNtSNJ6QRp283l4",
  authDomain: "snapgram-c148f.firebaseapp.com",
  projectId: "snapgram-c148f",
  databaseURL: "https://snapgram-c148f-default-rtdb.firebaseio.com/",
  storageBucket: "snapgram-c148f.appspot.com",
  messagingSenderId: "243680582391",
  appId: "1:243680582391:web:10632a6b8f668fd0d8d1f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var UserName = localStorage.getItem("UserName");
  var RoomName = localStorage.getItem("RoomName");

  function getData() { firebase.database().ref("/"+RoomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 } });  }); }
getData();   

/* To Fix */
function Send()
{
  console.log("Comming in Send()");
  MSG = document.getElementById("MSG").value;
  firebase.database().ref(RoomName).push(
        {
          name:UserName,
          message:MSG,
          likes:0
        }
  );
  document.getElementById("MSG").value = "";
}
/* To Fix */


/* To Fix */
document.getElementById("SGRRoomName").innerHTML = RoomName;
/* To Fix */

function Logout() 
{
  localStorage.removeItem("RoomName");
  localStorage.removeItem("UserName");
  window.location="index.html";
}
