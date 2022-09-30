Create Table Departamentos(
	Cod_postal int,
	Nombre varchar(30),
	Precio decimal,
	PRIMARY KEY (Cod_postal)
);

Create Table Origen(
	Cod_postal int,
	precio int,
	Cod_origen int,
	PRIMARY KEY (Cod_origen),
	FOREIGN KEY (Cod_postal) REFERENCES Departamentos(Cod_postal)
);

Create Table Destino(
	Cod_postal int,
	precio int,
	Cod_destino int,
	PRIMARY KEY (Cod_destino),
	FOREIGN KEY (Cod_postal) REFERENCES Departamentos(Cod_postal)
);

Create Table Destinatario(
	Cod_destinatario int,
	Direccion varchar(50),
	Nombre varchar(30),
	Telefono int,
	Email varchar(30),
	Instrucciones varchar(100),
	Cod_postal int,
	PRIMARY KEY (Cod_destinatario),
	FOREIGN KEY (Cod_postal) REFERENCES Departamentos(Cod_postal)
);

Create Table Remitente(
	Orden int,
	Nombre_tienda varchar(30),
	Cod_postal int,
	PRIMARY KEY (Orden, Nombre_tienda),
	FOREIGN KEY (Cod_postal) REFERENCES Departamentos(Cod_postal)
);
Create Table Estatus(
	Cod_status int,
	Estado varchar(30),
	PRIMARY KEY (Cod_status)
);
Create Table Categoria(
	Cod_categoria int,
	Nombre varchar(30),
	Precio int,
	PRIMARY KEY (Cod_categoria)
);

Create Table Solicitud(
	No_solicitud int,
	Fecha_recoleccion date,
	Cantidad int,
	Orden int,
	Nombre_tienda varchar(30),
    cod_reminente int,
	Peso int,
	Total int,
	Cod_destinatario int,
	Cod_status int,
	Cod_categoria int,
	PRIMARY KEY (No_solicitud),
	FOREIGN KEY (Orden, Nombre_tienda) REFERENCES Remitente(Orden, Nombre_tienda),
	FOREIGN KEY (Cod_destinatario) REFERENCES Destinatario(Cod_destinatario),
	FOREIGN KEY (Cod_status) REFERENCES Estatus(Cod_status),   
	FOREIGN KEY (Cod_categoria) REFERENCES Categoria(Cod_categoria)
);
