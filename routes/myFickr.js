const express = require("express");
const router = express.Router();

router.get("/myFickr", (req, res) => {
  fetch(
    "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=990356b263d64347b6d710c80a2f1602&text=porto&format=json&nojsoncallback=1"
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro ao buscar dados do servidor:", error);
    });
});

module.exports = router;
