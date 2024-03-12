import useGroups from '../utils/hooks/useGroups'
import Accordion from '../../../shared/ui/Accordion'
import "./style.css"
import { FiltersByGroups } from '../../../widgets'
import { useEffect, useState } from 'react'
import { Group } from '../../../shared/types/groups.types'
import { getAllAvatarColors } from '../utils/helpers'


export default function Groups() {

	const { result, data } = useGroups()

	const [filteredData, setFilteredData] = useState<Group[]>()
	const [colors, setColors] = useState<string[]>(["Все"])

	useEffect(() => {
		if (data) {
			setFilteredData(data)
			setColors(getAllAvatarColors(data))
		}
	}, [data])

	const [filterOptions, setFilterOptions] = useState({
		avatarColor: "Все",
		closed: "Все",
		myFriends: "Нет"
	})

	useEffect(() => {
		if (data) {
			setFilteredData(data.filter(group => {
				// Фильтрация по цвету аватара
				if (filterOptions.avatarColor !== 'Все' && group.avatar_color !== filterOptions.avatarColor) {
					return false
				}

				// Фильтрация по закрытости группы
				if (filterOptions.closed !== 'Все' && group.closed !== (filterOptions.closed === 'Да')) {
					return false
				}

				// Фильтрация по наличию друзей
				if (filterOptions.myFriends === 'Да' && (!group.friends || group.friends.length === 0)) {
					return false
				}

				return true
			}))
		}

	}, [filterOptions])

	const handleChangeAvatar = (value: string) => {
		setFilterOptions({
			...filterOptions,
			avatarColor: value
		})
	}

	const handleChangeClosed = (value: string) => {
		setFilterOptions({
			...filterOptions,
			closed: value
		})
	}

	const handleChangeFriends = (value: string) => {
		setFilterOptions({
			...filterOptions,
			myFriends: value
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
										onFilterAvatar={handleChangeAvatar}
										onFilterClosed={handleChangeClosed}
										onFilterFriends={handleChangeFriends}
										filterOptions={filterOptions}
										arrayColor={colors}
										arrayClosed={["Да", "Нет", "Все"]}
										arrayFriends={["Да", "Нет"]}
									/>
									<div className="groups__title">Список групп</div>

									{
										filteredData.map((group) =>
											<div key={group.id} className='group'>
												<div className="group__header">
													<div
														style={{ backgroundColor: group.avatar_color }}
														className="group__avatar"
													></div>

													<div className="group__text">
														<div className="group__title">
															{group.name}
														</div>
														{
															group.closed ?
																<div className="group__isClosed">Закрытая группа</div>
																: <div className="group__isClosed">Открытая группа</div>
														}
														<div className="group__members">
															Подписчиков: {group.members_count}
														</div>
													</div>
												</div>
												{
													group.friends ?
														<div className="friends">
															<Accordion title={`Друзей в группе: ${group.friends.length}`} >
																{group.friends.map((friend, index) => <div className='friend'
																	key={index}>
																	{friend.first_name} {friend.last_name}
																</div>)}
															</Accordion>
														</div>
														: null
												}
											</div>
										)
									}
								</div>
						}
					</div>
			}
		</>
	)
}