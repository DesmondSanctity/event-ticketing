import { getXataClient } from '../../src/xata.js'

const xata = getXataClient()

export default async function updateToXata(req, res) {
    let id = req.body.id
    let ticket = {
        firstname: req.body.ticket.firstname,
        lastname: req.body.ticket.lastname,
        email: req.body.ticket.email,
        company: req.body.ticket.company,
        country: req.body.ticket.country,
        jobtitle: req.body.ticket.jobtitle,
        iscoming: req.body.ticket.iscoming,
    }
    console.log(id, ticket)
    await xata.db.tickets.update(id, ticket);
    res.json({
        ok: true,
    })
}