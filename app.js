const express = require("express");
const app = express();
const morgan = require("morgan");
const { db, User, Page } = require("./models");

//set up logging middleware
app.use(morgan("dev"));

//set up static
app.use(express.static(__dirname + "/public")); //"__dirname + "public" " is being passed as argument, applying static to whichever path indicated

//setup for encoding our body parser
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world"); //if you were to pass "console.log(Hello World)" as an argument, it would appear in the terminal and not on the browser page
});

const PORT = 3000;

const connect = async () => {
  await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

connect();
