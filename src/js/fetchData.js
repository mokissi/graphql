
const endPoint = "https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql"

export async function fetchData(querry) {
    const jwt = localStorage.getItem("jwt")
    const resp = await fetch(endPoint, {
        method : "POST",
        headers : {
            'Authorization' : `Bearer ${jwt}`,
        },
    body : JSON.stringify({query: querry})
    })
    
    const result = await resp.json()
  return result
}