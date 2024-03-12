import { Filter } from '../../../features/filter'

type Props = {
	onFilterAvatar: (value: string) => void,
	onFilterClosed: (value: string) => void,
	onFilterFriends: (value: string) => void,
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


	const handleChangeAvatar = (value: string) => {
		onFilterAvatar(value)
	}

	const handleChangeClosed = (value: string) => {
		onFilterClosed(value)
	}

	const handleChangeFriends = (value: string) => {
		onFilterFriends(value)
	}

	return (
		<div>
			<Filter
				label="Фильтровать по цвету аватарки"
				options={arrayColor}
				selectedOption={filterOptions.avatarColor}
				onChange={(value) => handleChangeAvatar(value)}
			/>
			<Filter
				label="Фильтровать по закрытости группы"
				options={arrayClosed}
				selectedOption={filterOptions.closed}
				onChange={(value) => handleChangeClosed(value)}
			/>
			<Filter
				label="Показывать только группы с моими друзьями"
				options={arrayFriends}
				selectedOption={filterOptions.myFriends}
				onChange={(value) => handleChangeFriends(value)}
			/>
		</div>
	)
}

export default FiltersByGroups