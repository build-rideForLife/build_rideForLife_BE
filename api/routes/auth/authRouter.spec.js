const request = require('supertest')
const server = require('../../server.js')
const db = require('../../../data/dbConfig.js')


describe('Register', () => {
    describe.skip('POST New User', () => {

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
    describe('AuthRouter Login', () => {

        describe('POST /api/login', () =>{
            it.only('Should respond with 200 Status code on successful login', () => {
                return request(server)
                .post('/api/login')
                .send({
                    "phone": "4152320090",
                    "password": "cool",
                    "driver": false
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
            })
        })
    })
})