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