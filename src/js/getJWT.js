import {fetchData} from "./fetchData.js"
import {queries} from "../queries/queries.js"

const enpoint = "https://learn.zone01oujda.ma/api/auth/signin"
export async function getJWT(usename, password, container) {
    const encryptUP = btoa(`${usename}:${password}`)
    const resp = await fetch(enpoint, {
        method : "POST",
        headers : {
            'Authorization': `Basic ${encryptUP}`,
        }
    })
    const result = await resp.json()
    if (resp.ok) {
        localStorage.setItem("jwt", result)
        container.remove()
        fetchData(queries)
    } else {
        alert(result.error)
    }
}