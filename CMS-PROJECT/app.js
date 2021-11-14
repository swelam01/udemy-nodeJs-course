const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();
const port = process.env.PORT || 4500;

app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const mainRouter = require("./routes/home/main");

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
