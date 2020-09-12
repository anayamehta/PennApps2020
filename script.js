// boilerplate code for accessing an api
 

let playlists = [
 {
  id: "6w7KExnFpSHdxfv15S6egq",
  mood: "happy"
 },
 {
  id: 
 }
  
]
let url = `https://api.spotify.com/v1/playlists/{playlist_id}/tracks`
fetch(url)
.then(response => response.json()) //unpacking the response into .json format
.then(function(){
    //all the code we want to do with the response
})
.catch(error => console.log(error))
