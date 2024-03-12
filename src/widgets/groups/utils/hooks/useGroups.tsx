import { useState, useEffect } from 'react'
import { GetGroupsResponse } from '../../../../shared/types/groups.types'
import { GetGroups } from '../../api'
import { URL } from '../../consts'


export default function useGroups() {

	const [groups, setGroups] = useState<GetGroupsResponse>({ result: 1, data: [] })

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await GetGroups(URL)
				setGroups(data)
			} catch (error) {
				console.error("Error fetching groups:", error)
			}
		}

		fetchData()

	}, [])

	return groups
}