import { base_url } from "../variable"
import { CHANGE_VARIABLE } from "../type"
export const createUser = (data) => {
    return (dispatch) => {
        createUserHelper({ data, dispatch })
    }
}

export const createUserHelper = async ({ data, dispatch }) => {
    const {name,email,phone}=data
    const headers = {
        "Content-type": "application/json"
    }
    const body = JSON.stringify({
        name:name,
        email:email,
        phone:phone,
        subscriptionType:'trial'
    })
    const config = {
        headers,
        method: "POST",
        body
    }
    const url = base_url + "/clients/add"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 201) {
            localStorage.setItem("token",response_json.token)
            
            alert("Client Successfully Added")
            
        }
        else{
            alert(response_json.message)
        }

    }
    catch (err) {
        console.log(err)
    }
}