import { strict as assert } from 'assert'
import got from 'got'

describe('activity', () => {
    it("recieve activity by it's key", async () => {
        const response = await got('http://www.boredapi.com/api/activity', { searchParams: { key: 5881028 } })
        const body = JSON.parse(response.body)

        assert(body.key == "5881028", `Ecpected type`)
    })
    it("recieve activity by it's type", async () => {
        let response = await got('http://www.boredapi.com/api/activity', { searchParams: new URLSearchParams({ type: 'recreational' }) })
        let body = JSON.parse(response.body)

        assert(body.length > 0)

        response = await got('http://www.boredapi.com/api/activity', { searchParams: { type: 'social' } })
        body = JSON.parse(response.body)

        assert(body.length > 0)

        response = await got('http://www.boredapi.com/api/activity', { searchParams: { type: 'charity' } })
        body = JSON.parse(response.body)

        assert(body.length > 0)

        response = await got('http://www.boredapi.com/api/activity', { searchParams: { type: 'diy' } })
        body = JSON.parse(response.body)

        assert(body.length > 0)
    })
    it("recieve activity by it's price", async () => {
        const response = await got('http://www.boredapi.com/api/activity?', { searchParams: { price: 0.0 } })
        const body = JSON.parse(response.body)

        assert(body.length > 0)
    })
})