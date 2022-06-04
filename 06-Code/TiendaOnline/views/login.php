<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Inicion de Sesión</title>
        <link rel="stylesheet" href="/ESPE202205-T3-AlphaCoders/06-Code/TiendaOnline/views/css
        /estilosLogin.css" type="text/css" media="all">
    </head>
    <body>
        <nav class="menu" id="menu">
            <ul>
                <li><a href="login.php">Iniciar Sesión</a></li>
                <li> <a href="registrarUsuario.html">Registro de Usuarios</a></li>              
            </ul>
        </nav>
        <div class="cuerpoFormulario" id="cuerpoFormulario">
            <form class="formularioLogin" id="formularioLogin" metodo="post" action="controller/validarUsuario.php">
                <h1>Inicia Sesión en tu cuenta</h1>
                <div class="texto">
                    <input type="text" class="txt" id="txtUsuario" required="" name="txtUsuario" placeholder="Usuario">
                </div>
                <div class="texto">
                    <input type="password" class="txt" id="txtContrasena" required="" name="txtContrasena" placeholder="Contraseña">
                </div>
                <br>
                <input type="submit" value="Iniciar Sesion" class="btn" >              
            </form>
        </div>
    </body>
</html>

