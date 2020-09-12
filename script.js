// boilerplate code for accessing an api
 
let url = `https://api.spotify.com/v1/playlists/{playlist_id}/tracks`
fetch(url)
.then(response => response.json()) //unpacking the response into .json format
.then(function(){
    //all the code we want to do with the response
})
.catch(error => console.log(error))

window.onload = function(){
    
    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function(){
        var spotifyEmbed = document.getElementById("iframe");
        var album_ID = "2QJmrSgbdM35R67eoGQo4j";
        spotifyEmbed.setAttribute("src", `https://open.spotify.com/embed/album/${album_ID}`);
    })
}


    

