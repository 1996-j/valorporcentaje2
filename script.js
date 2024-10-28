        // Solicitar el precio de la prenda
        let precio = parseFloat(prompt("Introduce el precio de la prenda:"));

        // Solicitar el porcentaje de descuento
        let descuento = parseFloat(prompt("Introduce el porcentaje de descuento:"));

        // Calcular el valor del descuento
        let cantidadDescuento = (precio * descuento) / 100;

        // Calcular el precio final
        let precioFinal = precio - cantidadDescuento;

        // Mostrar el precio final con descuento
        document.write("<h2>El precio original de la prenda es: $" + precio.toFixed(2) + "</h2>");
        document.write("<h2>El porcentaje de descuento es: " + descuento + "%</h2>");
        document.write("<h2>El precio final con descuento es: $" + precioFinal.toFixed(2) + "</h2>");