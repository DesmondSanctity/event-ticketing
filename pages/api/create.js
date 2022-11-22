import { getXataClient } from '../../src/xata.js'


const xata = getXataClient()

export default async function createToXata(req, res) {
    let ticket = req.body
    await xata.db.tickets.create(ticket)
    res.json({
        ok: true,
    })
}