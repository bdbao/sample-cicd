const request = require('supertest');
const app = require('../app');

describe('Books API', () => {
    it('should return all books', async () => {
        const res = await request(app).get('/books');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('should add a new book', async () => {
        const res = await request(app).post('/books').send({ title: "New Book", author: "New Author" });
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe("New Book");
    });
});
