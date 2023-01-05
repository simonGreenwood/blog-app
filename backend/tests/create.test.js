const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Blog = require('../models/Blog');
const User = require('../models/User');

describe('blog tests', () => {
  test('creation succeeds', async () => {
    const newBlog = {
      title: 'test blog',
    }
  })
})
describe('login tests',() => {
  beforeEach(async () => {
    await User.deleteMany({});
    const password = "password";
    const passwordHash = await bcrypt.hash(password,10);
    const user = new User({name:"simon",username:"simon",passwordHash:passwordHash});
    await user.save();
  })
  test('login succeeds', async () => {
    const response = await api.post('/api/login')
      .send({
        username:"simon",
        password:"password",
      })
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  test('login fails with the wrong credentials', async () => {
    const response = await api.post('/api/login')
      .send({
        username:"simon",
        password:"wrong",
      })
      .expect(401)
      .expect('Content-Type', /application\/json/)
      .expect({error:"invalid username or password"})
  })
})
describe('user tests', () => {
  beforeEach(async () => {
    await User.deleteMany({});
    const password = "password";
    const passwordHash = await bcrypt.hash(password,10);
    const user = new User({name:"simon",username:"simon",passwordHash:passwordHash});
    await user.save();
  })
  test('creation succeeds', async () => {
    const usersAtStart = await User.find({});
    console.log(usersAtStart)
    const newUser = {
      name:"root",
      username: "root",
      password:"thebestpassword",
    }
    await api.post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    const usersAtEnd = await User.find({});
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1);
    expect(usersAtEnd.map(u => u.username)).toContain(newUser.username);
  })
  test('creation fails with missing credentials', async () => {
    const usersAtStart = await User.find({});
    console.log(usersAtStart)
    const newUser = {}
    await api.post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)
      .expect({error:"password missing/invalid"})
    const usersAtEnd = await User.find({});
    expect(usersAtEnd.length).toBe(usersAtStart.length);
  })
})
afterAll(() => {
  mongoose.connection.close();
})