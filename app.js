document.addEventListener("DOMContentLoaded", function() {
    // Cambia "bitcoin" por el símbolo de la criptomoneda que deseas consultar
    var criptoSymbol = "bitcoin";
    var apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=" + criptoSymbol + "&vs_currencies=usd";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var precio = data[criptoSymbol].usd;
            document.getElementById("precio").innerText = "Precio: $" + precio;
        })
        .catch(error => console.error("Error al obtener datos:", error));
});
