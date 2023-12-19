const express = require("express");
const app = express();
app.use(express.json());

const routerLibros = require("./routes/libros");
const errorHandler = require("./middleware/errorHandler");

app.use("/libros", routerLibros);
app.use(errorHandler);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running to ${port}`);
});
