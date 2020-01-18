// const { expect } = require('chai')
// const knex = require('knex')
// const app = require('../src/app')

// describe('Articles Endpoints', function() {
//     let db
      
//     before('make knex instance', () => {
//         db = knex({
//         client: 'pg',
//         connection: process.env.TEST_DB_URL,
//         })
//     })
      
//     after('disconnect from db', () => db.destroy())
      
//     before('clean the table', () => db('blogful_articles').truncate())

//     context('Given there are articles in the database', () => {
//         beforeEach('insert articles', () => {
//             return db
//                 .into('blogful_articles')
//                 .insert(testArticles)
//         })

//         it('GET /articles responds with 200 and all of the articles', () => {
//                  return supertest(app)
//                    .get('/articles')
//                    .expect(200, testArticles)
//         }) //end it('GET /articles responds with 200 and all of the articles', ()
//     } //end context('Given there are articles in the database', ()
      

// }) //end describe('Articles Endpoints', function()