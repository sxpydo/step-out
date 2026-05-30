require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path"); // ADD THIS

require("./models/Users");

const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

require("./routes/usersRoutes")(app);
require("./routes/loginRoutes")(app);

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
