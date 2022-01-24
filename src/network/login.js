import {http} from "./http"

export function reqLogin() {
    return http({
        url:"/user/register",
        method: "get",
        // params: {
        //     type,
        //     page
        // }
        
    })
}
