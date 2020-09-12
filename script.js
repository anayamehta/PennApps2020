// boilerplate code for accessing an api

let query = ""; 
let url = `https://api.spotify.com/v1/search?query=${query}&type=artist&market=US&offset=5&limit=10`
fetch(url)
.then(response => response.json()) //unpacking the response into .json format
.then(function(){
    //all the code we want to do with the response
})
.catch(error => console.log(error))
