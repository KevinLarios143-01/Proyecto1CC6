Create Table Departamento(
	cod_postal int,
	nombre varchar(30),
	PRIMARY KEY (cod_postal)
);

Create Table Trayectoria(
	cod_origen int,
	cod_destino int,
	precio int,
	PRIMARY KEY (cod_origen, cod_destino),
	FOREIGN KEY (cod_origen) REFERENCES Departamento(cod_postal),
	FOREIGN KEY (cod_destino) REFERENCES Departamento(cod_postal)
);

Create Table Destinatario(
	id_destinatario int,
	direccion varchar(50),
	nombre varchar(30),
	telefono varchar(30),
	email varchar(30),
	instrucciones varchar(100),
	cod_postal int,
	PRIMARY KEY (id_destinatario),
	FOREIGN KEY (cod_postal) REFERENCES Departamento(cod_postal)
);

Create Table Remitente(
	id_remitente int,
	nombre varchar(30),
	cod_postal int,
	tipo_Cliente int,
	telefono varchar(10),
	PRIMARY KEY (id_remitente),
	FOREIGN KEY (cod_postal) REFERENCES Departamento(cod_postal)
);
Create Table Estado(
	id_estado int,
	nombre varchar(30),
	PRIMARY KEY (id_estado)
);
Create Table Categoria(
	id_categoria int,
	nombre varchar(30),
	precio int,
	PRIMARY KEY (id_categoria)
);

Create Table Solicitud(
	no_solicitud int,
	fecha_recoleccion date,
	cantidad int,
	peso int,
	total int,
    remitente int,
	destinatario int,
	estado int,
	categoria int,
	PRIMARY KEY (no_solicitud),
	FOREIGN KEY (remitente) REFERENCES Remitente(id_remitente),
	FOREIGN KEY (destinatario) REFERENCES Destinatario(id_destinatario),
	FOREIGN KEY (estado) REFERENCES Estado(id_estado),   
	FOREIGN KEY (categoria) REFERENCES Categoria(id_categoria)
);
