insert into users(full_name,email,active) values
("Carlos Ruiz", "juan.perez@email.com", true),
("Lucía Fernández", "lucia.fdez@email.com", true),
("Marcos Paez", "marcos.paez@email.com", true),
("Sofía Castro", "sofia.castro@email.com", true),
("Diego Mora", "diego.mora@email.com", false)
;

insert into tasks(title,description,priority,status) values
("Diseñar mockups", "Crear los wireframes del módulo de usuarios", "Alta", "En Progreso"),
("Configurar base de datos", "Instalar y configurar PostgreSQL en el servidor", "Alta", "Pendiente")
;


insert into tasks_users(id_user,id_task) values
(1, 1),
(2,1),
(3,2)
;