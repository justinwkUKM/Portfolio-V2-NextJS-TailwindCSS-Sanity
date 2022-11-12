import { Social } from "../typings"

export const fetchSocials =async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
    const data = await response.json()
    // console.log("FromFetchSocials",data)
    const socials: Social[] = data.socials;
    
    // console.log(socials)

    return socials
}