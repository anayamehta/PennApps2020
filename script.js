// boilerplate code for accessing an api
 

let playlists = [
 {
  id: "6w7KExnFpSHdxfv15S6egq",
  mood: "happy"
 },
 {
  id: "71sb3x5BwKk87d7ZBOoSJY",
  mood: "sad"
 },
 {
  id: "2mFml8Bws3cnUjPGZQ4Idx",
  mood: "groovy"
 },
 {
  id: "7L08IETH8EQmm7k4r8rivb",
  mood: "angry"
 },
 {
  id: "6WLK6LubucscF4ly7qbf7L",
  mood: "bored"
 },
 {
  id: "0Re47ehyGKxm9z2ztfre9e",
  mood: "tired"
 },
 {
  id: "0iHf5FaeDgHJdgptRR5xe2",
  mood: "focused"
 },
 {
  id: "24vORFqVMJn3fvuZ42vYbf",
  mood: "angsty"
 },
 {
  id: "5hZLn7plSc9JXFVbm3cYy4",
  mood: "loving"
 },
 {
  id: "0SJKn1U4V6jb1pBvivV4Ck",
  mood: "confident"
 },
 {
  id: "3sCVaEzyJiop7JnN4Cd71D",
  mood: "nervous"
 },
 {
  id: "2Q9S9x5k0l6zwMFvrWx23r",
  mood: "hopeful"
 },
 {
  id: "26KfFNWF3LjCFzjiuk9Y35",
  mood: "lonely"
 }
];

let idVal = ""; 
let userChoice = "happy";  //get from input form

for (var i = 0; i < playlists.length; i++) {
  if (playlists[i].mood.localeCompare(userChoice) == 0) {
     idVal = playlists[i].id; 
  }
}

//replacement for the for loop above --> javascript is amazing! :)
let mood = playlists.find(playlist => playlist.mood === userChoice);

//use idVal to change the embed url

//don't need this stuff right
/*
let url = `https://api.spotify.com/v1/playlists/${idVal}/tracks`;
fetch(url)
.then(response => response.json()) //unpacking the response into .json format
.then(function(){
    //all the code we want to do with the response
})
.catch(error => console.log(error))

*/

window.onload = function(){
    
    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function(){
        var spotifyEmbed = document.getElementById("iframe");
        var album_ID = mood.id;
        spotifyEmbed.setAttribute("src", `https://open.spotify.com/embed/album/${album_ID}`);
    })
}


    

