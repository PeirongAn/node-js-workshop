// import PokemonModule from '../modules/index';

import supertest from 'supertest';
import app from '../server'; // Express framework

const mongoose = require('mongoose');

const {
  DB_HOST,
  DB_NAME,
} = process.env;

beforeEach((done) => {
  mongoose.connect(`${DB_HOST}/${DB_NAME}`,
    { useNewUrlParser: true },
    () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

test('GET /pokemon/:id', async () => {
  // console.log('...', PokemonModule.add);
  // const poker = await PokemonModule.add({
  //   url_image:
  //     `https://images.wikidexcdn.net.mwuploads
  //     /wikidex/thumb/0/0c/latest/20190227123718.Sobble.png/400px-Sobble.png`,
  //   type: ['Water'],
  //   name: [{ english: 'abc' }],
  //   id: 0,
  // });

  await supertest(app).get('/pokemon/0')
    .expect(200)
    .then((response) => {
      // Check type and length
      // eslint-disable-next-line no-underscore-dangle
      expect(response.body._id).toBe(0);
    });
});
