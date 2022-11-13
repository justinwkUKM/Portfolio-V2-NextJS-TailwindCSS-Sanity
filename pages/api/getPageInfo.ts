// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { MainInfo } from '../../typings'

type Data = {
  info: MainInfo
}

const query = groq`
*[_type == "mainInfo"][0]
`
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const info : MainInfo = await sanityClient.fetch(query)
  // console.log(info)
  res.status(200).json({info})
}
