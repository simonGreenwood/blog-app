const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);

const Blog = require('../models/Blog');
const User = require('../models/User');

describe('blog tests', () => {
  beforeEach(async () => {
    await User.deleteMany({});
    const user = new User({name:"simon",username:"simon",password:"password"});
  })
  test('creation succeeds', async () => {
    const newBlog = {
      title: 'test blog',
    }
  })
})
describe('login',() => {
  test('login succeeds', async () => {
    await User.findOne()
    const response = api.post('/api/login')
      .send({
        username:"simon",
        password:"password",
      })
      .expect(200)
    console.log(response.body)
  })
})