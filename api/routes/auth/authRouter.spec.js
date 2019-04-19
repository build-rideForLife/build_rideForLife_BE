const request = require('supertest')
const server = require('../../server.js')
const db = require('../../../data/dbConfig.js')


describe('Register', () => {
    describe('POST New User', () => {

        it('should respond 201/Created', async () => {
            const body = { username: 'greatDriver', password: 'password', phone: '4123456789'}
            const response = await request(server).post('/api/register').send(body)
            expect(response.status).toBe(201)
        })
        it('should return JSON', async () => {
            const body = { username: 'greatDriver', password: 'password', phone: '4123456789' }
            const response = await request(server).post('/api/register').send(body)
            expect(response.type).toBe('application/json')
        })
    })
})