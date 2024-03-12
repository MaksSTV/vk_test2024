import useGroups from '../utils/hooks/useGroups'
import "./style.css"
import { FiltersByGroups } from '../../../widgets'
import { useEffect, useState } from 'react'
import { Group } from '../../../shared/types/groups.types'
import { filterGroups, getAllAvatarColors } from '../utils/helpers'
import { ListOfGroups } from './listOfGroups/ListOfGroup'


export default function Groups() {

	const { result, data } = useGroups()

	const [filteredData, setFilteredData] = useState<Group[]>()
	const [colors, setColors] = useState<string[]>(["Все"])
	const [filterOptions, setFilterOptions] = useState({
		avatarColor: "Все",
		closed: "Все",
		myFriends: "Нет"
	})

	useEffect(() => {
		if (data) {
			setFilteredData(data)
			setColors(getAllAvatarColors(data))
		}
	}, [data])

	useEffect(() => {
		if (data) {
			setFilteredData(filterGroups(data, filterOptions.avatarColor, filterOptions.closed, filterOptions.myFriends))
		}

	}, [filterOptions])

	const handleFilterChange = (key: string, value: string) => {
		setFilterOptions({
			...filterOptions,
			[key]: value
		})
	}

	return (
		<>

			{
				result === 0 ?
					<div>Ошибка, данные не пришли</div>
					: <div>
						{
							filteredData === undefined ?

								<div>
									Ошибка в получении списка групп
								</div>
								: <div className='groups'>
									<FiltersByGroups
										onFilterAvatar={handleFilterChange}
										onFilterClosed={handleFilterChange}
										onFilterFriends={handleFilterChange}
										filterOptions={filterOptions}
										arrayColor={colors}
										arrayClosed={["Все", "Открытые", "Закрытые"]}
										arrayFriends={["Да", "Нет"]}
									/>
									<ListOfGroups groups={filteredData} />
								</div>
						}
					</div>
			}
		</>
	)
}