import { getXataClient } from '../../src/xata.js'

const xata = getXataClient()

export default async function updateToXata(req, res) {
    let id = req.body.id
    let ticket = {
        title: req.body.ticket.firstname,
        body: req.body.ticket.lastname,
        image: req.body.ticket.email,
        tags: req.body.ticket.company,
        body: req.body.ticket.country,
        image: req.body.ticket.jobtitle,
    }
    console.log(id, ticket)
    await xata.db.tickets.update(id, ticket);
    res.json({
        ok: true,
    })
}