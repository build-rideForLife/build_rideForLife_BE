const request = require('supertest');
const server = require('../../server');

const db = require('../../../data/dbConfig')

describe('server', () => {
    describe('GET BY ID', () => {
        beforeEach(async () => {
            await db('drivers').truncate();
          }); 
        it('should return 200/OK', () => {
            return request(server)
            .get('/api/drivers/1')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })

        it('should return JSON', () => {
            return request(server)
            .get('/api/drivers/1')
            .then(response => {
                expect(response.type).toBe('application/json')
            })
        })

        it('should return an obj', () => {
            return request(server)
            .get('/api/drivers/1')
            .then(response => {
                expect(response.body).toEqual({})
            })
        })

    })

    describe('POST review', () => {

        it('should respond 201/Created', async () => {
            const body = { rating: 3, review: 'Great Ride', riders_id: 2, driver_id: 1}
            const response = await request(server).post('/api/drivers/reviews').send(body)
            expect(response.status).toBe(201)
        })
        it('should return JSON', async () => {
            const body = { rating: 3, review: 'Great Ride', riders_id: 2, driver_id: 1 }
            const response = await request(server).post('/api/drivers/reviews').send(body)
            expect(response.type).toBe('application/json')
        })
    })

    describe('PUT- driver edit profile', () => {

       
    
    })

})
