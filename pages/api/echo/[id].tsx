import { NextApiResponse, NextApiRequest } from 'next'
interface MessageNextApiRequest extends NextApiRequest {
  query: {
    id: string
  }
}
export default function getByid(
  req: MessageNextApiRequest,
  res: NextApiResponse,
) {
  //   res.statusCode = 200
  //   res.setHeader('Content-Type', 'application/json')

  //   res.end(req.query.id)

  res.json({ yourId: req.query.id })
}
