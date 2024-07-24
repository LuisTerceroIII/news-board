export interface Interest {
    id?: string
    label?: string // this is to display
    keyword?: string // this to search, ex: to "Last news", not search for "Last news", search to top news on api
    lastDateRequests?: string // timestamp
    registerAt?: string // timestamp
}