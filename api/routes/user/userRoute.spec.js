const request = require('supertest')
const server = require('../../server.js')
const db = require('../../../data/dbConfig.js')

describe('User/Rider Router', () => {
    
    beforeEach(async () => {
        await db('riders').truncate()
    });
    
    describe('GET /api/users', () => {
        it('Should respond with 200 Ok Status', () => {
            return request(server)
            .get('/api/users')
            .then(response => {
                expect(response.status).toBe(200)
            })
            it('Should return all users/riders json', () => {
                return request(server)
                .get('/api/users')
                .expect(200)
                .expect('Content-Type', /json/)
            })
        })
    })
    describe('GET /api/users/:id', () => {
        it('Should respond with 200 Ok Status', () => {
            return request(server)
            .get('/api/users/1')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })
        it('Should return all users/riders json', () => {
            return request(server)
            .get('/api/users/1')
            .expect(200)
            .expect('Content-Type', /json/)
        })
    })
})