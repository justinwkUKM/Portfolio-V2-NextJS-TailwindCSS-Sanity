interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string,
}

interface Image {
    _type:"image",
    asset:{
        _ref: string,
        _type: 'reference'
    }
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo',
    name: string, 
    role: string, 
    backgroundInformation: string,
    phoneNumber: string, 
    email: string,
    address: string,
    heroImage: Image,
    profilePic:Image,
    socials:Social[],
} 

export interface MainInfo extends SanityBody {
    _type: 'mainInfo',
    name: string, 
    role: string, 
    backgroundInformation: string,
    phoneNumber: string, 
    email: string,
    address: string,
    heroImage: Image,
    profilePic:Image,
    cv: string,
    socials:Social[],
}

export interface Skill extends SanityBody {
    _type: 'skill',
    title: string, 
    progress: string, 
    image: Image,
} 

export interface Project extends SanityBody {
    _type: 'project',
    title: string,
    image: Image,
    linkToBuild: string,
    summary: string,
    technologies: Skill[],
} 

export interface ExperienceBody extends SanityBody {
    _type: 'experience',
    company: string,
    companyImage: Image,
    jobTitle: string,
    dateStarted: date,
    dateEnded: Date,
    isCurrentlyWorkingHere: boolean,
    skills: Skill[],
    points: string[],
} 


export interface Social extends SanityBody {
    _type: 'social',
    title: string,
    url: string,
} 
