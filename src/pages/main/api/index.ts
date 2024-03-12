import { Group, GetGroupsResponse } from "../../../app/data/types/groups.types"


export async function GetGroups(url: string): Promise<Group[]> {
    return new Promise((resolve, reject) => {
    setTimeout(async () => {
    const response = await fetch(url)
    const {result = 1, data}: GetGroupsResponse = await response.json()
        console.log(result, data)
        if (response.ok) {
            if (data && result) {
                resolve(data)
            } else {
                reject(new Error(`result = 0 or data is not found"`))
            }
        } else {
            reject(new Error('unknown'))
        }
    }, 1000)
})
}//переделать логику, что тут мы получаем Group, а отдаем GetGroupsResponse