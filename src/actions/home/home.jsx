import { base_url } from "../variable"
import { CHANGE_VARIABLE } from "../type"
import { useNavigate } from "react-router-dom"
export const Home = (data) => {
    return (dispatch) => {
        homeHelper({ data, dispatch })
    }
}

export const homeHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json",
        'authorization': localStorage.getItem("token")
    }

    const config = {
        headers,
        method: "GET",
    }
    const url = base_url + "/clients/home"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 200) {
            console.log(response_json, "herer response")
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "totalClients",
                    value: response_json.allClients
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "onTrialClients",
                    value: response_json.trialClients
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "peopleSubsAboutToEnd",
                    value: response_json.endingSoonClients
                }
            })

        }
        // fetch(url,config).then(response=>response.json()).then(responseJson=>{
        //     console.log(responseJson)
        //     if(responseJson){
        //         dispatch({
        //             type:CHANGE_VARIABLE,
        //             payload:{
        //                 key:"products_array",
        //                 value:responseJson.data
        //             }
        //         })
        //     }



        // })


    }
    catch (err) {
        console.log(err)
    }
}