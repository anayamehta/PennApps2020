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
  
 }
  
]
let url = `https://api.spotify.com/v1/playlists/${playlists[x].id}/tracks`;
fetch(url)
.then(response => response.json()) //unpacking the response into .json format
.then(function(){
    //all the code we want to do with the response
})
.catch(error => console.log(error))
