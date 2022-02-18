const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {
            headers:{
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjFlNDkzYzU4YjI0OTkxYmFlYTU2MDE5N2VhZDJmMSIsInN1YiI6IjYyMGY2YTE4M2Y0ODMzMDAxYzhkNzY1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FNJTN5WkWnjHFj3hTgmHQLft0v5HoBxIBSBCoo8ULD8" ,
                "Content-Type" : "application/json;charset=utf-8"
            }
        })
        .then(result => result.json())
}