const express = require("express");
const { createTest } = require("../controller/testController/createTest");
const authMiddleware = require("../middleware/authMidleware");
const { updateTest } = require("../controller/testController/updateTest");
const { deleteTest } = require("../controller/testController/deleteTest");
const { getAllTest } = require("../controller/testController/getAllTest");

const testRoute = express.Router();

testRoute.get("/tests", authMiddleware, getAllTest);
testRoute.post("/create-test", authMiddleware, createTest);
testRoute.patch("/update-test", authMiddleware, updateTest);
testRoute.delete("/delete-test", authMiddleware, deleteTest);

module.exports = { testRoute };
