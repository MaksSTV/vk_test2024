import { Group } from '../../../../shared/types/groups.types'

export function getAllAvatarColors(groups: Group[]): string[] {
	const colors: string[] = []

	for (const group of groups) {
		if (group.avatar_color && !colors.includes(group.avatar_color)) {
			colors.push(group.avatar_color)
		}
	}
	colors.unshift("Все")

	return colors
}

export function filterGroups(groups: Group[], avatarColor: string, closed: string, myFriends: string) {
	return groups.filter(group => {
		if (avatarColor !== 'Все' && group.avatar_color !== avatarColor) {
			return false
		}

		if (closed !== 'Все' && group.closed !== (closed === 'Закрытые')) {
			return false
		}

		if (myFriends === 'Да' && (!group.friends || group.friends.length === 0)) {
			return false
		}

		return true
	})
}