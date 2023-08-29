const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const bookRoutes = require("./routes/bookRoutes");

// Add the JSON parsing middleware
app.use(bodyParser.json());

// Use the book routes
app.use("/api/books", bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
