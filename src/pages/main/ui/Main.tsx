import { useEffect, useState } from 'react'
import { GetGroups } from '../api/index'

export function Main() {

	//const [groups, setGroups] = useState<GetGroupsResponse[]>()

	useEffect(() => {
		GetGroups("http://localhost:3001/groups")
			.then(data => console.log(data))
	}, [])


	return (
		<>

		</>
	)
}