import { MainInfo } from "../typings"

export const fetchPageInfo =async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    const data = await response.json()
    const mainInfo: MainInfo = data.info;
    
    // console.log(mainInfo)

    return mainInfo
}