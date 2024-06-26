const getFeedloggedIn = () => {
    return fetch("http://localhost:3333/feed",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.getItem("session_token")
        }
    })
    .then((response) => {
        if(response.status === 200){
            return response.json();
        } 
        else if (response.status === 500) {
            throw "Server error"
        }
        else {
            throw "Something went wrong"
        }
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}


const getFeed = () => {
    return fetch("http://localhost:3333/feed")
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }  else if (response.status === 500) {
            throw "Server error"
        }
         else{
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}



export const feedService = {
    getFeedloggedIn,
    getFeed,
}