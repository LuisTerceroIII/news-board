//Use to get timestamp of current day
export const getNowTimestamp = ():string => {
    return new Date().getTime().toString()
}