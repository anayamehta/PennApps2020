// boilerplate code for accessing an api
 

let playlists = [
 {
  id: "6w7KExnFpSHdxfv15S6egq",
  mood: "happy"
 },
 {
  id: "37i9dQZF1DX7qK8ma5wgG1",
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
 },
 {
    id: "6DEjYFkNZh67HP7R9PSZvv",
    mood: "test"
 }
];

// let idVal = ""; 
let userChoice;  //get from input form

//replacement for the for loop above --> javascript is amazing! :)

window.onload = function(){

    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function(){

        var checkRadio = document.querySelector( 
            'input[name="Current Mood"]:checked'); 
          
        if(checkRadio != null) { 
            userChoice = checkRadio.id;
            //console.log(userChoice);
            let mood = playlists.find(playlist => playlist.mood == userChoice);
            //console.log(mood);
            var spotifyEmbed = document.getElementById("spotify");
            var album_ID = mood.id;
            console.log(album_ID);
            spotifyEmbed.setAttribute("src", `https://open.spotify.com/embed/playlist/${album_ID}`);
            spotifyEmbed.style.display = "block";
            document.getElementById("toReplace").style.display = "none";
        } 
        else { 
            console.log("radio button not selected")
        } 
    })
}



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

// for (var i = 0; i < playlists.length; i++) {
//   if (playlists[i].mood.localeCompare(userChoice) == 0) {
//      idVal = playlists[i].id; 
//   }
// }
