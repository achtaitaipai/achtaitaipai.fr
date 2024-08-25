export const displayDate = (date: Date) =>
	new Intl.DateTimeFormat("fr", { dateStyle: "medium" }).format(date)
