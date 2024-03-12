import { Filter } from '../../filter'

type Props = {
	onFilterAvatar: (key: string, value: string) => void,
	onFilterClosed: (key: string, value: string) => void,
	onFilterFriends: (key: string, value: string) => void,
	filterOptions: {
		avatarColor: string,
		closed: string,
		myFriends: string
	}
	arrayColor: string[],
	arrayClosed: string[],
	arrayFriends: string[],
}

const FiltersByGroups = ({ onFilterAvatar, onFilterClosed, onFilterFriends, filterOptions, arrayColor, arrayClosed, arrayFriends }: Props) => {


	const handleChangeAvatar = (key: string, value: string) => {
		onFilterAvatar(key, value)
	}

	const handleChangeClosed = (key: string, value: string) => {
		onFilterClosed(key, value)
	}

	const handleChangeFriends = (key: string, value: string) => {
		onFilterFriends(key, value)
	}

	return (
		<div>
			<Filter
				label="Фильтровать по цвету аватарки"
				options={arrayColor}
				selectedOption={filterOptions.avatarColor}
				onChange={(value) => handleChangeAvatar('avatarColor', value)}
			/>
			<Filter
				label="Фильтровать по приватности группы"
				options={arrayClosed}
				selectedOption={filterOptions.closed}
				onChange={(value) => handleChangeClosed("closed", value)}
			/>
			<Filter
				label="Показывать группы только с моими друзьями"
				options={arrayFriends}
				selectedOption={filterOptions.myFriends}
				onChange={(value) => handleChangeFriends("myFriends", value)}
			/>
		</div>
	)
}

export default FiltersByGroups