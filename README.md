# Dockerización de Aplicación NestJS con GitHub Actions

En este repositorio, se presenta un ejemplo detallado de cómo dockerizar una aplicación NestJS y establecer un flujo de trabajo eficiente mediante GitHub Actions para la construcción y despliegue de contenedores Docker.

## Procedimiento

### 1. Creación del Repositorio

Comienza creando un repositorio en GitHub, ya sea público o privado.

![Alt text](img/img1.png)

### 2. Preparación del Código Fuente

Realiza un commit con el código deseado.

![Alt text](img/img2.png)

### 3. Configuración de Secrets en GitHub

Configura los secrets DOCKER_USER y DOCKER_PASSWORD en la sección correspondiente de Secrets en el repositorio de GitHub.

![Alt text](img/img3.png)
![Alt text](img/img4.png)

### 4. Configuración del Token de Docker Hub

Utiliza el nombre de usuario y clave (token) de Docker Hub para llenar los secrets DOCKER_USER y DOCKER_PASSWORD. Crea un Token en Docker (con el nombre Github-Actions) y copia este Token generado en el secret DOCKER_PASSWORD.

![Alt text](img/img5.png)
![Alt text](img/img6.png)
![Alt text](img/img7.png)

### 5. Dockerización de la Aplicación

Realiza la Dockerización de la aplicación NestJS, preferiblemente un servicio REST o GraphQL sin dependencias.

![Alt text](img/img8.png)
![Alt text](img/img9.png)

### 6. Verificación de la Construcción y Funcionamiento

Asegúrate de que la imagen pueda ser compilada.

![Alt text](img/img10.png)
![Alt text](img/img11.png)
![Alt text](img/img12.png)

Realiza el commit para que se ejecuten los builds automáticos.

![Alt text](img/img13.png)

### 7. Crear Acción de Imagen Docker

Configura un flujo de trabajo en GitHub Actions para generar la imagen Docker utilizando el archivo `docker-image.yml`.

![Alt text](img/img14.png)

#### Evidencias

- **El flujo de trabajo está configurado para realizar builds automáticos.**

  ![Alt text](img/img15.png)

- **Durante el guardado, se genera un nuevo build automáticamente.**

  ![Alt text](img/img16.png)

- **Build completado sin errores.**

  ![Alt text](img/img17.png)
