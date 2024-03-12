import { useState } from 'react'

type Props = {
	title: string
	children: React.ReactNode
}

import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Accordion = ({ title, children }: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="accordion">
			<div className="accordion-header" onClick={toggleAccordion}>
				<div className="accordion-title" style={{ cursor: 'pointer' }}>
					{title} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
				</div>
			</div>
			{isOpen && (
				<div className="accordion-content">
					{children}
				</div>
			)}
		</div>
	)
}

export default Accordion
