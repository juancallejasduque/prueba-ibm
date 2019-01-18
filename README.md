# prueba-ibm
Prueba IBM Juan Callejas Duque.

<h1>Aplicaciones</h1>
<ul>
  <li>
    <h2>1. ibm-api:</h2>
    <p>Esta es la aplicación API con se comunica con los cliente por medio de servicios tipo RESTFULL, el framework SPRINT ayuda con la gestión de las necesidades de las diferentes capas desde el modelo gestionado con JDBC template hasta las capa de control que facilita la construcción de los END-POINT de los servicios.</p>
    <ul>
      <li>
        <h3>1.1 Herramientas usadas:</h3>
        <ul>
          <li>Spring boot</li>
          <li>JdbcTemplate-Spring</li>
          <li>H2BD </li>
          <li>Junit</li>
        </ul>
      </li>
      <li>
        <h3>1.2 Instalación:</h3>
        <p>Configuración de servidor embebido y detalles de <a href="https://spring.io/blog/2014/03/07/deploying-spring-boot-applications">despligue</a>.Para la implemetación se uso la ayuda de IDE Spring Tool Suite el cual ofrece las facilidades para generar básicamente un JAR el cual cuenta con una versión embebida el servidor TOMCAT.</p>
    </ul>
  </li>
  <li>
    <h2>2. ibm-app:</h2>
    <p>Esta es la aplicación cliente, consume los servicios de la API</p>
    <ul>
      <li>
        <h3>1.1 Herramientas usadas:</h3>
        <ul>
          <li>Node JS</li>
          <li>Angular Cli 6.0.0</li>
          <li>Jasmine </li>
          <li>Karma</li>
        </ul>
      </li>
      <li>
        <h3>1.2 Instalación:</h3>
        <p>Se genera una directorio en /dist que contiene la salida o versión producción de la aplicación con el HTML y javascript correspondiente, para el desarrollo se usó el servidor <a href="https://nodejs.org/en/docs/guides/">Node JS</a>.
        </p>
        <p>La aplicación tiene configurada la URI de la API que provee los datos, por defecto tiene "http://localhost:8080" en caso de requerir cambiarlo debe editar el archivo "/src/app/configs/app-config.ts", luego volver a generar el archivo de salida con el comando <code> ng build --prod </code>
      </li>
    </ul>
  </li>
</ul>
