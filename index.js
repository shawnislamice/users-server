const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const users = [
  { id: 1, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 2, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 3, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 4, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 5, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 6, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 7, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 8, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 9, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 10, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 11, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 12, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 13, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 14, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
  { id: 15, name: "Shawon Islam", email: "shawnislam.ice@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Hitted");
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running: ${port}`);
});
