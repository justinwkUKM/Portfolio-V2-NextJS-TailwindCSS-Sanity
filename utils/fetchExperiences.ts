import { ExperienceBody } from "../typings"

export const fetchExperiences =async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`)
    const data = await response.json()
    const experiences: ExperienceBody[] = data.experiences;
    
    // console.log('From Fetch EXPERIENCE', experiences)

    return experiences
}