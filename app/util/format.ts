
/**
 * Extracts and capitalizes the domain name from a URL.
 * 
 * This function takes a URL, extracts its domain name, and transforms it 
 * into a format where only the first letter is capitalized and the rest are lowercase.
 * 
 * @param {string} url - The URL from which to extract the domain name.
 * @returns {string} - The capitalized domain name.
 * 
 * @example
 * // Returns "Ksl"
 * getDomainName("https://ksl.com")
 * 
 * @example
 * // Returns "Sportsnet"
 * getDomainName("https://sportsnet.ca")
 */
export const getDomainName = (url: string): string => {
    try {
        const formattedUrl = url.startsWith("http://") || url.startsWith("https://") ? url : `http://${url}`
        const parsedUrl = new URL(formattedUrl)
        let hostname = parsedUrl.hostname
        if (hostname.startsWith("www.")) hostname = hostname.substring(4)
        const parts = hostname.split(".")
        const domainPart = parts.length > 2 ? parts[parts.length - 2] : parts[0]
        const capitalizedDomain = domainPart.charAt(0).toUpperCase() + domainPart.slice(1)
        return capitalizedDomain
    } catch (error) {
        console.error("Error parsing URL:", error)
        return ""
    }
}