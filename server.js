const express = require("express");
const cors = require("cors"); // Adicionar o CORS
const app = express();
const port = 3000;

app.use(cors()); // Habilitar CORS para todas as rotas

const betRoutes = require("./routes/betRoutes");
const myFickr = require("./routes/myFickr");

// Usar as rotas importadas no caminho "/"
app.use("/bets", betRoutes);
app.use("/myFickr", myFickr);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
