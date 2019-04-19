const request = require('supertest')
const server = require('../../server.js')
// const db = require('../../../data/dbConfig.js')
// const Riders = require('./user-model.js')

describe('User/Rider Router', () => {
    
    // beforeEach(async () => {
    //     await db('riders').truncate()
    // });
    
    describe('GET /api/users', () => {
        it('Should respond with 200 Ok Status', () => {
            return request(server)
            .get('/api/users')
            .expect(200)
        })
            it('Should return all users/riders json', () => {
                return request(server)
                .get('/api/users')
                .expect(200)
                .expect('Content-Type', /json/)
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
        it('Should return user/rider json object', () => {
            return request(server)
            .get('/api/users/1')
            .expect(200)
            .expect('Content-Type', /json/)
        })
    })
    describe('PUT /api/users/:id', () => {

        it('Update the user/rider profile info', () => {
            return request(server)
            .put('/api/users/1')
            .send({
                username: 'RiderProfile1Updated',
                phone: "4151234567"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(202)
        })
    })
    describe('DELETE /api/users/:id', () => {
        it('Delete the user/rider profile from database', () => {
            return request(server)
            .del('/api/users/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(202)
        })
        it('If user/rider is deleted it should not exist', () => {
            return request(server)
            .get('/api/users/1')
            .expect(404)
        })
    })
})
