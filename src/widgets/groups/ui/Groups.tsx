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

	useEffect(() => {
		if (data) {
			setFilteredData(data)
		}
	}, [data])

	const [filterOptions, setFilterOptions] = useState({
		avatarColor: "Все",
		closed: "Да",
		myFriends: "Да"
	})

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
			<FiltersByGroups
				onFilterAvatar={handleChangeAvatar}
				onFilterClosed={handleChangeClosed}
				onFilterFriends={handleChangeFriends}
				filterOptions={filterOptions}
				arrayColor={getAllAvatarColors(data)}
				arrayClosed={["Да", "Нет", "Все"]}
				arrayFriends={["Да", "Нет"]}
			/>
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