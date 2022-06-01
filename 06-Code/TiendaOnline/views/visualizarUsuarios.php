<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro de los nuevos Productos</title>
        <link rel="stylesheet" href="css/estilosLogin.css" type="text/css" media="all">
    </head>
    <body>
    <nav class="menu" id="menu">
            <ul>
            <li> <a href="visualizarUsuarios.php">Usuarios</a></li>
                <li><a href="insertarProductos.html">Registrar Nuevos Productos</a></li>
                <li><a href="login.php">Salir</a></li>           
            </ul>
        </nav>
    </body>
</html>
<h1><center>Usuarios Activos</center</h1><br><br>
<?php 
   
    require_once $_SERVER['DOCUMENT_ROOT']."/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/db/db.php";
    $filter = [];
    $options = [];
    $query = new MongoDB\Driver\Query($filter, $options);
    $cursor = $manager->executeQuery('TiendaOnline.persons', $query);
    
    
    echo '<div class="col-md-12">';
    echo '<div class="row" style="padding-left: 10rem;padding-right: 10rem;">';
    echo '<table cellspacing="10" cellpadding="10" border>';
    echo '<tr>';
    echo '<th>Nombre</th>';
    echo '<th>Apellido</th>';
    echo '<th>Usuario</th>';
    echo '<th>Tipo Usuario</th>';
    echo '</tr>';

    foreach ($cursor as $document) {
        $document = json_decode(json_encode($document),true);
            
        echo '<tr>';
        echo '<td>'.$document['nombre'].'</td>';
        echo '<td>'.$document['apellido'].'</td>';
        echo '<td>'.$document['usuario'].'</td>';
        echo '<td>'.$document['Tipo_Usuario'].'</td>';

        echo '</tr>';
    }
    echo '</div>';
    echo '</div>';
   
?>
            <?php      
            ?>
        </div>
    </div>

</body>
</html>