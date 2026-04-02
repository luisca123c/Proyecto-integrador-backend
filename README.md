# Backend — Proyecto Integrador

## Participantes

| Nombre | Rol |
| :--- | :--- |
| **Julián Andrés Diaz Chaparro** | Product Owner |
| **Luis Carlos Villamizar Sanchez** | Backend |
| **Carol Dayana Lizarazo Colmenares** | Frontend |
| **Josue Chaparro Oviedo** | Frontend |

---

## Requisitos previos

- [Node.js](https://nodejs.org/) instalado
- [MySQL](https://dev.mysql.com/downloads/mysql/) instalado y corriendo

---

## Instalación y puesta en marcha

### 1. Clonar y ubicarse en la rama correcta

```bash
git checkout developer
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar la base de datos

Abre MySQL como administrador (`root`) y ejecuta los siguientes scripts en orden:

```bash
# Crea la base de datos, el usuario y las tablas
sql/database.sql

# Inserta los datos iniciales
sql/data.sql
```

Esto crea:
- Base de datos: `proyecto_integrador`
- Usuario: `app_user_integrador` con contraseña `ADSO_2994281`
- Tablas: `users`, `tasks`, `tasks_users`

### 4. Crear el archivo de variables de entorno

Copia el archivo de ejemplo y completa los valores:

```bash
cp .env.example .env
```

Contenido del `.env`:

```env
PORT=3000

DB_HOST=localhost
DB_USER=app_user_integrador
DB_PASSWORD=ADSO_2994281
DB_NAME=proyecto_integrador
DB_PORT=3306
```

> El archivo `.env` está en `.gitignore` y nunca se sube al repositorio. Cada integrante debe crearlo localmente.

### 5. Iniciar el servidor

```bash
npm run dev
```

Si la conexión es exitosa verás:

```
Conexión a la base de datos MySQL establecida con éxito
Servidor escuchando en http://localhost:3000
```

---

## Endpoints disponibles

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| GET | `/api/users` | Obtener todos los usuarios |
| GET | `/api/users/:id` | Obtener usuario por ID |
| POST | `/api/users` | Crear usuario |
| PUT | `/api/users/:id` | Actualizar usuario |
| DELETE | `/api/users/:id` | Eliminar usuario |
| PATCH | `/api/users/:id/estado` | Cambiar estado del usuario |
| GET | `/api/users/:id/tasks` | Obtener tareas de un usuario |
| GET | `/api/tasks` | Obtener todas las tareas |
| GET | `/api/tasks/:id` | Obtener tarea por ID |
| POST | `/api/tasks` | Crear tarea |
| PUT | `/api/tasks/:id` | Actualizar tarea |
| DELETE | `/api/tasks/:id` | Eliminar tarea |
| PATCH | `/api/tasks/:id/estado` | Cambiar estado de la tarea |
| POST | `/api/tasks/:id/assing` | Asignar usuario a una tarea |
| GET | `/api/tasks/:id/users` | Obtener usuarios de una tarea |
| DELETE | `/api/tasks/:taskid/users/:userid` | Desasignar usuario de una tarea |
