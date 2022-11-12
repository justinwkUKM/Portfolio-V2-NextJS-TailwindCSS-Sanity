// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchProjects } from '../../utils/fetchProjects'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data =  await fetchProjects()
  // console.log("XXX",data)
  res.status(200).json({ name: 'John Doe' })
}
