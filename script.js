// boilerplate code for accessing an api

fetch(url)
.then(response => response.json()) //unpacking the response into .json format
.then(function(){
    //all the code we want to do with the response
})
.catch(error => console.log(error))