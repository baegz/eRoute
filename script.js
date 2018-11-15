function calcularYVisualizarRuta(servicioDeDirecciones, pantallaDeDirecciones, partida, puntos) {
    servicioDeDirecciones.route({
      origin: partida,
      destination: partida,
      waypoints: puntos,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        pantallaDeDirecciones.setDirections(response);
        var route = response.routes[0];
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }