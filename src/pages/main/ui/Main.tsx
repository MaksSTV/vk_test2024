import { useEffect, useState } from 'react'

export function Main() {

	//const [groups, setGroups] = useState<GetGroupsResponse[]>()

	useEffect(() => {
		fetch('http://localhost:3001/groups')
			.then(res => res.json())
			.then(data => console.log(data))
	}, [])


	return (
		<>

		</>
	)
}