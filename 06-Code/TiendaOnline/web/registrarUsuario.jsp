<%-- 
    Document   : registrarUsuario
    Author     : 
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulario de Registro</title>
        <link rel="stylesheet" href="css/estilosRegistrarUsuario.css" type="text/css" media="all">
        <%
            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            response.setHeader("Pragma", "no-cache");
            response.setDateHeader("Expires", 0);
        %>
    </head>
    <body>
        <div class="cuerpoFormulario" id="cuerpoFormulario"> 
            <form class="formularioRegistro" id="formularioRegistro" method="post" action="GuardarServlet">
                
                <h1>Formulario de Registro</h1><br>
                <fieldset>            
                    <legend>Datos personales</legend>   
                <label>Cédula:</label>
                    <input type="text" class="txt" id="txtCedula" required="" name="txtCedula"><br>
                <label>Nombres:</label>
                     <input type="text" class="txt" id="txtNombre" required=""  name="txtNombre"><br>
                <label>Apellidos:</label>
                    <input type="text" class="txt" id="txtApellidos" required="" name="txtApellidos"><br>
                 <label>Género:</label>   
                <select name="genero" class="genero" id="genero">
                    <option value=" ">Femenino</option>
                    <option value=" ">Masculino</option>  
                 </select>   
                </fieldset><br>
                <fieldset>   
                <legend>Datos del Usuario</legend>
                <label>Usuario:</label> 
                    <input type="text" class="txt" id="txtUsuario" required="" name="txtUsuario"><br>
                <label>Email:</label> 
                    <input type="text" class="txt" id="txtEmail" required="" name="txtEmail"><br>
                <label>Contraseña:</label> 
                    <input type="password" class="txt" id="txtContrasena" required="" onkeyup="coincidirContrasena()"><br>
                <label>Confirmar Contraseña:</label> 
                <input type="password" class="txt" id="txtRepetirContrasena" required="" onkeyup="coincidirContrasena()" name="txtContrasena"><br>                      
                </fieldset><br><br>                 
                <input type="submit" value="Crear Usuario" class="btn" id="btnCrearUsuario">
                <input type="button" value="Borrar" class="btn" id="btnBorrar" onclick="resetearFormulario()">
            </form>
        </div>
    </body>
    <script src="js/funcionesRegistrarUsuario.js"></script>
</html>
