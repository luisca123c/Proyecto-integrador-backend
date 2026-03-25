drop database if exists proyecto_integrador;
create database proyecto_integrador;
create user 'app_user_integrador'@'localhost' identified by 'ADSO_2994281';

grant all privileges on proyecto_integrador.*
to 'app_user_integrador'@'localhost';

flush privileges;

use proyecto_integrador;

create table users(
	id int auto_increment primary key,
    nombre_completo varchar(150) not null,
    correo varchar(150) not null,
    activo boolean not null default true,
    created_ud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_up TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table tasks(
	id int auto_increment primary key,
    titulo varchar(150) not null,
    descripcion varchar(200) not null,
    prioridad varchar(100) not null,
    estado varchar(100) not null,
    created_ud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_up TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table tasks_users(
	id int auto_increment primary key,
    id_user int not null,
    id_task int not null,
    constraint fk_task_user
    foreign key (id_user)
    references users(id)
    on update cascade
    on delete restrict,
    CONSTRAINT fk_user_task 
    FOREIGN KEY (id_task) 
    REFERENCES tasks(id)
    ON DELETE RESTRICT 
    ON UPDATE CASCADE
);