document.addEventListener("DOMContentLoaded", function() {
  obtenerPrecioBinance();
});

function obtenerPrecioBinance() {
  var url = "https://api.binance.com/api/v3/ticker/price?symbol=P2PUSDT";

  axios.get(url)
    .then(function(response) {
      var precio = response.data.price;
      document.getElementById("precio").textContent = "Precio: " + precio + " USDT";
    })
    .catch(function(error) {
      console.error("Error al obtener el precio:", error);
    });
}
