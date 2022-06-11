const supertest = require("supertest");
const app = require("../app");
const server = require("../index");
const mongoose = require("mongoose");
const User = require("./user.model");
const api = supertest(app);

describe("test for auth", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  test("register user", async () => {
    await api
      .post("/api/v1/register")
      .send({
        fullName: "test1userName",
        userName: "test1password",
        password: "test1Name",
      })
      .expect(201)
      .expect("Content-Type", /application\/json/);
  });
  test("login user", async () => {
    const response = await api.post("/api/v1/register").send({
      userName: "test2userName",
      password: "test2password",
      fullName: "test2Name",
    });

    if (!response.body.sucess) {
      await api
        .post("/api/v1/login")
        .send({
          userName: "test3@gmtest2userName",
          password: "test2password",
        })
        .expect(200)
        .expect("Content-Type", /application\/json/)
        .expect("set-cookie", /token/);
    }
  });
});
describe("test for auth failed", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });
  test("register user fail", async () => {
    await api
      .post("/api/v1/register")
      .send({
        userName: "test3userName",
      })
      .expect(400)
      .expect("Content-Type", /application\/json/);
  });
  test("login user fail", async () => {
    const response = await api.post("/api/v1/register").send({
      userName: "test2userName",
      password: "test2password",
      fullName: "test2Name",
    });

    if (!response.body.sucess) {
      await api
        .post("/api/v1/login")
        .send({
          email: "test2userName",
          password: "failpassword",
        })
        .expect(401)
        .expect("Content-Type", /application\/json/);
    }
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});
