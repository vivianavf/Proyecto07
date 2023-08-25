/* usar cuando el servidor no permita ingresar*/
/*ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';*/

DROP DATABASE IF EXISTS  comprasOnline;
create database comprasOnline;
use comprasOnline;

DROP TABLE IF EXISTS CLIENTE;
CREATE TABLE CLIENTE(
PK_idUsuario VARCHAR(50) PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL
);


DROP TABLE IF EXISTS LISTACOMPRA;
CREATE TABLE LISTACOMPRA(
PK_idLista INT AUTO_INCREMENT PRIMARY KEY,
idUsuario VARCHAR(50) NOT NULL,
nombre VARCHAR(50) NOT NULL,
creation_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (idUsuario) REFERENCES CLIENTE (PK_idUsuario)
);


DROP TABLE IF EXISTS SUPERMERCADO;
CREATE TABLE SUPERMERCADO(
PK_idSupermercado INT auto_increment PRIMARY KEY,
nombre VARCHAR(200) NOT NULL,
direccion VARCHAR(300) NOT NULL
);

DROP TABLE IF EXISTS CATEGORIA;
CREATE TABLE CATEGORIA(
PK_idCategoria INT auto_increment PRIMARY KEY,
nombre VARCHAR(100)
);

DROP TABLE IF EXISTS PRODUCTO;
CREATE TABLE PRODUCTO(
PK_idProducto INT AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(100) NOT NULL,
categoria INT NOT NULL,
precio DECIMAL(6,2) NOT NULL,
codigoBarras char(13),
idSupermercado INT NOT NULL,
FOREIGN KEY (idSupermercado) REFERENCES SUPERMERCADO(PK_idSupermercado),
FOREIGN KEY (categoria) REFERENCES CATEGORIA(PK_idCategoria)
);

DROP TABLE IF EXISTS LISTA_COMPRAS_PRODUCTOS;
CREATE TABLE LISTA_COMPRAS_PRODUCTOS(
idLista INT NOT NULL, 
idProducto INT NOT NULL,
FOREIGN KEY (idLista)  REFERENCES LISTACOMPRA(PK_idLista),
FOREIGN KEY (idProducto)  REFERENCES PRODUCTO(PK_idProducto)
);

use comprasOnline;
INSERT INTO CLIENTE (PK_idUsuario, nombre, email)
VALUES
    ('johndoe', 'John Doe', 'john.doe@example.com'),
    ('janedoe', 'Jane Doe', 'jane.doe@example.com'),
    ('mikesmith', 'Mike Smith', 'mike.smith@example.com'),
    ('emilyjones', 'Emily Jones', 'emily.jones@example.com'),
    ('davidwilliams', 'David Williams', 'david.williams@example.com'),
    ('sarahbrown', 'Sarah Brown', 'sarah.brown@example.com'),
    ('robertjohnson', 'Robert Johnson', 'robert.johnson@example.com'),
    ('laurasmith', 'Laura Smith', 'laura.smith@example.com'),
    ('chrismiller', 'Chris Miller', 'chris.miller@example.com'),
    ('amandawilson', 'Amanda Wilson', 'amanda.wilson@example.com');

INSERT INTO LISTACOMPRA (idUsuario, nombre, creation_date) 
VALUES
('johndoe', 'Compras Semanales', '2023-08-21 10:00:00'),
('janedoe', 'Lista de Mercado', '2023-08-21 11:30:00'),
('mikesmith', 'Compras Mensuales', '2023-08-20 15:45:00'),
('emilyjones', 'Lista de Ofertas', '2023-08-19 09:15:00'),
('davidwilliams', 'Lista para Fiesta', '2023-08-18 18:20:00'),
('sarahbrown', 'Lista de Urgencias', '2023-08-17 14:00:00'),
('robertjohnson', 'Compras Diarias', '2023-08-16 12:30:00'),
('laurasmith', 'Lista de Regalos', '2023-08-15 08:00:00'),
('chrismiller', 'Compras de Fin de Semana', '2023-08-14 16:45:00'),
('amandawilson', 'Lista de Salud', '2023-08-13 20:10:00');





