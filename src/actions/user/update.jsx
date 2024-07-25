import { base_url } from "../variable"
import { CHANGE_VARIABLE } from "../type"
export const updateUser = (data) => {
    return (dispatch,getState) => {
        const state = getState();
        updateUserHelper({ data, dispatch,state })
    }
}

export const updateUserHelper = async ({ data, dispatch,state }) => {
    const {name,email,phone}=data
    const headers = {
        "Content-type": "application/json",
        "authorization":localStorage.getItem("token")
    }
    const body = JSON.stringify({
        name:name,
        email:email,
        phone:phone,
        subscriptionType:data.subscriptionType,
        subscriptionStartDate:data.subscriptionStartDate
    })
    const config = {
        headers,
        method: "PATCH",
        body
    }
    console.log(state,"herer stateiiei")
    const url = base_url + `/clients/updatesubcription/${state.variables.userData._id}`
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