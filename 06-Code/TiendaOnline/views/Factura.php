<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
  <title>Factura</title>
</head>
<body>
<h1><center>Factura</center></h1><br>
<div class="container">
    <div class="row mt-4">
      <div class="col-md">

        <div class="form-group row">
          <label for="CodigoFactura" class="col-lg-3 col-form-label">Número de factura:</label>
          <div class="col-lg-3">
            <input type="text" disabled class="form-control" id="CodigoFactura" value="<?php echo $codigofactura; ?>">
          </div>
        </div>
        
        <div class="form-group row">
          <label for="Fecha" class="col-lg-3 col-form-label">Fecha de emisión:</label>
          <div class="col-lg-3">
            <input type="date" class="form-control" id="Fecha">
          </div>
        </div>
        <div class="form-group row">
          <label for="CodigoCliente" class="col-lg-3 col-form-label">Cliente:</label>
          <div class="col-lg-3">
            <select class="form-control" id="CodigoCliente">
            </div>
        </div>
</select>
<div class="container">
  <div class="row mt-4">
      <div class="col-md">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Descripción</th>
              <th class="text">Cantidad</th>
              <th class="text">Precio Unitario</th>
              <th class="text">Total</th>
              <th class="text"></th>
            </tr>
          </thead>
          <tbody id="DetalleFactura">
          </tbody>
        </table>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</body>
</html>