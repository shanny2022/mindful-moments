const express = require("express");
const path = require("path");
const tips = require("./data/tips");

const app = express();
const PORT = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// API route to get all tips
app.get("/api/tips", (req, res) => {
  res.json(tips);
});

// API route to get one tip by id
app.get("/api/tips/:id", (req, res) => {
  const tip = tips.find((item) => item.id === req.params.id);

  if (!tip) {
    return res.status(404).json({ message: "Tip not found" });
  }

  res.json(tip);
});

// Homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Detail page route
app.get("/tips/:id", (req, res) => {
  const tip = tips.find((item) => item.id === req.params.id);

  if (!tip) {
    return res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
  }

  res.sendFile(path.join(__dirname, "public", "detail.html"));
});

// 404 route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
