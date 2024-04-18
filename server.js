// const express = require("express");
// const app = express();
const express = require("express");
const app = express();
const birds = require("./birds");

//...
app.use("/birds", birds);

app.listen(3000, () => {
  console.log("dziala");
});

// app.use(express.json());

// const users = [
//   { id: "0", userName: "A" },
//   { id: "1", userName: "B" },
//   { id: "2", userName: "C" },
//   { id: "3", userName: "D" },
//   { id: "4", userName: "E" },
//   { id: "5", userName: "F" },
// ];

// app.use((request, response, next) => {
//   const id = request.body.id;

//   if (id) {
//     delete request.body.id;
//   }

//   next();
// });

// app.get("/users", (request, response) => {
//   response.json(users);
// });

// app.get("/users/:id", (request, response) => {
//   response.json(users[request.params["id"]]);
// });

// app.post("/users", (request, response) => {
//   const newUser = {
//     id: request.body.id,
//     userName: request.body.userName,
//   };

//   users.push(newUser);

//   response.status(201).json({
//     status: "success",
//     message: newUser,
//   });
// });

// app.put("/users/:id", (request, response) => {
//   console.log("request.body", request.body);

//   const userId = request.params.id;
//   const updatedUser = {
//     ...request.body,
//     id: userId,
//   };

//   const userIndex = users.findIndex((user) => user.id === userId);

//   if (userIndex !== -1) {
//     users[userIndex] = updatedUser;

//     response.status(200).json({
//       status: "Success",
//       message: updatedUser,
//     });
//   } else {
//     response.status(400).json({
//       status: "Failed",
//       message: "User not found",
//     });
//   }
// });

// app.delete("/users/:id", (request, response) => {
//   const userId = request.params["id"];

//   const userIndex = users.findIndex((user) => user.id === userId);

//   if (userIndex !== -1) {
//     const deletedUser = users.splice(userIndex, 1)[0];

//     response.status(204).json({
//       status: "Success",
//       message: deletedUser,
//     });
//   } else {
//     response.status(400).json({
//       status: "Failed",
//       message: "User not found",
//     });
//   }
// });

// paramsy i query paramsy:

// app.get("/person/:id", (request, response) => {
//   response.json(request.params["id"]);
// });

// app.get("/user", (request, response) => {
//   const key1 = request.query.key1; //10
//   const key2 = request.query.key2; //Viciu
//   response.json(`Value of key1: ${key1} and  key2: ${key2}`);
// });

//PUT powienien zwrócić status 200 - OK

// Middleware function -USE method in Express.js
// app.use((request, response, next) => {
//   console.log("Request Type:", request.method);
//   next();
// });

// app.put("/user", (request, response) => {
//   response.json("Got a PUT request at /user");
// });

// app.post("/new", (request, response) => {
//   const body = request.body;

//   const user = {
//     ...body,
//   };

//   users.push(user);

// response.send("Create new user - Post method");
// response.status(201).json({
//   status: "success",
//   message: user,
// });
// });

//DELETE powienien zwrócić status 204 - No Content
// app.delete("/new", (request, response) => {
//   response.status(204).json();
// });

// app.listen(3000, () => {
//   console.log("dziala", 3000);
// });

// /tabela -

// GET /users - lista userow
// GET /users/:id - jeden user po id
// POST /users - dodawanie usera
// PUT /users/:id - zmienianie jednego usera
// PATCH /users/:id - zmienianie jednego usera
// DELETE /users/:id - usuwanie usera po ID
