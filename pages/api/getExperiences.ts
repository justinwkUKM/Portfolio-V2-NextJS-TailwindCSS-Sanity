// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { ExperienceBody } from '../../typings'

type Data = {
 experiences:ExperienceBody[]
}

const query = groq`
*[_type == "experience" ] {
  ..., skills[] ->
}
`
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences : ExperienceBody[] = await sanityClient.fetch(query)
  // console.log('From GET EXPERIENCE',experiences)
  res.status(200).json({experiences })
}
