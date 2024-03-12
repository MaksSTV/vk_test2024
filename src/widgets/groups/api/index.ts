import { Group, GetGroupsResponse } from "../../../shared/types/groups.types"


export async function GetGroups(url: string): Promise<GetGroupsResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            const response = await fetch(url)
            const groups: Group[] = await response.json()

            if (response.ok) {
                if (groups) {
                    const data: GetGroupsResponse = {
                        result: 1,
                        data: groups
                    }
                    resolve(data)
                } else {
                    const data: GetGroupsResponse = {
                        result: 0,
                        data: undefined
                    }
                    resolve(data)
                }
            } else {
                reject(new Error('unknown'))
            }
        }, 1000)
    })
}