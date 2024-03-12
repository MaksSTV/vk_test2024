
type Props = {
	label: string,
	options: string[],
	selectedOption: string,
	onChange: (value: string) => void,
}

const Filter = ({ label, options, selectedOption, onChange }: Props) => {
	return (
		<div>
			<label>{label}:</label>
			<select value={selectedOption} onChange={(e) => onChange(e.target.value)}>
				{options.map((option, index) => (
					<option key={index} value={option}>{option}</option>
				))}
			</select>
		</div>
	)
}

export default Filter