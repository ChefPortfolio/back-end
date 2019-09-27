const server = require('../api/server');

const request = require('supertest');

const db = require('../database/dbConfig');

beforeEach(() => db('chefs').truncate());

describe('chefs', () => {
    it('get /', async () => {
        const res = await request(server)
        .post('/api/chefs')
        .send({ first_name: "blake", last_name: "test", username: "testu", email_address: "IamA@yahoo.com", password: "giggles" })
        expect(res.status).toBe(200);
    });
    it('get /', async () => {
        const res = await request(server)
        .get('/api/chefs');
        expect(res.status).toBe(200);
    });
});