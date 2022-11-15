import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { ExperienceBody, MainInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: MainInfo,
  projects: Project[],
  experiences: ExperienceBody[],
  skills: Skill[],
  socials: Social[],
}

const Home = ({ pageInfo, projects, experiences, skills, socials }: Props) => {
  return (
    <div className='bg-gray-100 dark:bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-600 scrollbar-thumb-orange-600 scrollbar-thin'>
      <Head>
        <title>{pageInfo?.name} Portfolio</title>
        <meta name="description" content="Portfolio V2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} pageInfo={pageInfo}></Header>

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      {process.env.NEXT_PUBLIC_ENV == 'local' ?
        <section id='about' className='snap-center'>
          <About pageInfo={pageInfo} />
        </section> : <></>
      }

      {process.env.NEXT_PUBLIC_ENV == 'local' ?
        <section id='experience' className='snap-center'>
          <Experience experiences={experiences} />
        </section> : <></>
      }
      {process.env.NEXT_PUBLIC_ENV == 'local' ?
        <section id='projects' className='snap-center'>
          <Projects projects={projects} />
        </section> : <></>
      }

      <section id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section>

      <section id='contactme' className='snap-center'>
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Link href={'#hero'}>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='rounded-full h-8 w-8 filter grayscale animate-[spin_1.5s_ease-in-out]  hover:grayscale-0 hover:scale-125' src="profile.jpeg" alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: MainInfo = await fetchPageInfo() || null
  const projects: Project[] = await fetchProjects() || null
  const experiences: ExperienceBody[] = await fetchExperiences() || null
  const skills: Skill[] = await fetchSkills() || null
  const socials: Social[] = await fetchSocials() || null


  return {
    props: {
      pageInfo,
      projects,
      experiences,
      skills,
      socials
    },
    revalidate: 10
  }
}