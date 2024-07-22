//Use to get timestamp of current day
export const getNowTimestamp = ():string => {
    return new Date().getTime().toString()
}
export const formatDateToMMDDYY = (isoDateString: string): string => {
    const date = new Date(isoDateString)

    const day = date.getUTCDate().toString().padStart(2, "0")
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0")
    const year = date.getUTCFullYear().toString().slice(-2)
    
    const hours = date.getUTCHours().toString().padStart(2, "0")
    const minutes = date.getUTCMinutes().toString().padStart(2, "0")
    
    return `${day}/${month}/${year} - ${hours}:${minutes}`
}