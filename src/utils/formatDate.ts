const padTo2Digits = (number: number): string =>
	number.toString().padStart(2, '0')

const formatDate = (date: Date): string => {
	return `${padTo2Digits(date.getDate())}/${padTo2Digits(
		date.getMonth() + 1
	)}/${date.getFullYear()}`
}

export default formatDate
