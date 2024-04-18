const express = require("express");
const app = express();

const birds = require("./routing/birds");
const { usersRouter } = require("./routing/users");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/birds", birds);

app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("dziala");
});
