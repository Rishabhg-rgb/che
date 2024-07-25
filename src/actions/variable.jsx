import {CHANGE_VARIABLE} from "./type"
// export const base_url = (process.env.REACT_APP_PUBLIC_ENDPOINT)
// console.log(base_url,"base")
// export const base_url = "https://starfish-app-kubrm.ondigitalocean.app"
// export const base_url = "https://gohworldapi.onrender.com"
export const base_url = "http://localhost:3000"
export const changeVariable = (key, value) => {

    return ({

      type: CHANGE_VARIABLE,
      payload: {

          key,
          value

      }

    })
    
}