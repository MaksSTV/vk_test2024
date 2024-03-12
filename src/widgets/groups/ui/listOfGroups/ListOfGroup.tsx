import { Group } from '../../../../shared/types/groups.types'
import Accordion from '../../../../shared/ui/Accordion'

type Props = {
	groups: Group[]
}

export function ListOfGroups({ groups }: Props) {

	return (
		<>
			<div className="groups__title">Список групп</div>
			{
				groups.map((group) =>
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
		</>
	)
}