Create Table Departamento(
	cod_postal varchar(5),
	nombre varchar(30),
	PRIMARY KEY (cod_postal)
);

Create Table Trayectoria(
	cod_origen varchar(5),
	cod_destino varchar(5),
	precio int,
	PRIMARY KEY (cod_origen, cod_destino),
	FOREIGN KEY (cod_origen) REFERENCES Departamento(cod_postal),
	FOREIGN KEY (cod_destino) REFERENCES Departamento(cod_postal)
);

Create Table Destinatario(
	id_destinatario serial,
	direccion varchar(50),
	nombre varchar(30),
	cod_postal varchar(5),
	PRIMARY KEY (id_destinatario),
	FOREIGN KEY (cod_postal) REFERENCES Departamento(cod_postal)
);

Create Table Remitente(
	id_remitente serial,
	nombre varchar(30),
	cod_postal varchar(5),
	PRIMARY KEY (id_remitente),
	FOREIGN KEY (cod_postal) REFERENCES Departamento(cod_postal)
);
Create Table Estado(
	id_estado serial,
	nombre varchar(30),
	PRIMARY KEY (id_estado)
);
Create Table Categoria(
	id_categoria serial,
	nombre varchar(30),
	precio int,
	PRIMARY KEY (id_categoria)
);

Create Table Solicitud(
	no_solicitud serial,
    remitente int,
	destinatario int,
	estado int,
	categoria int,
	total int,
	PRIMARY KEY (no_solicitud),
	FOREIGN KEY (remitente) REFERENCES Remitente(id_remitente),
	FOREIGN KEY (destinatario) REFERENCES Destinatario(id_destinatario),
	FOREIGN KEY (estado) REFERENCES Estado(id_estado),   
	FOREIGN KEY (categoria) REFERENCES Categoria(id_categoria)
);
