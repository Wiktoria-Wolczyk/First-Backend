const express = require("express");
const router = express.Router();

const users = [
  { id: "0", userName: "A" },
  { id: "1", userName: "B" },
  { id: "2", userName: "C" },
  { id: "3", userName: "D" },
  { id: "4", userName: "E" },
  { id: "5", userName: "F" },
];

const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now());

  next();
};
router.use(timeLog);

router.use((request, response, next) => {
  const id = request?.body?.id;

  if (id) {
    delete request.body.id;
  }

  next();
});

router.get("/", (request, response) => {
  response.json(users);
});

router.get("/:id", (request, response) => {
  response.json(users[request.params["id"]]);
});

router.post("/", (request, response) => {
  users.sort(function (a, b) {
    return Number(a.id) - Number(b.id);
  });

  const nextID = +users[users.length - 1].id + 1;

  const newUser = {
    id: nextID.toString(),
    userName: request.body.userName,
  };

  console.log("newUser", newUser);
  users.push(newUser);

  response.status(201).json({
    status: "success",
    message: newUser,
  });
});

router.put("/:id", (request, response) => {
  console.log("request.body", request.body);

  const userId = request.params.id;
  const updatedUser = {
    ...request.body,
    id: userId,
  };

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = updatedUser;

    response.status(200).json({
      status: "Success",
      message: updatedUser,
    });
  } else {
    response.status(400).json({
      status: "Failed",
      message: "User not found",
    });
  }
});

router.delete("/:id", (request, response) => {
  const userId = request.params["id"];

  const userIndex = users.findIndex((user) => user.id.toString() === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];

    response.status(204).json({
      status: "Success",
      message: deletedUser,
    });
  } else {
    response.status(400).json({
      status: "Failed",
      message: "User not found",
    });
  }
});

module.exports.usersRouter = router;
