CREATE DATABASE IF NOT EXISTS api_ginasio;
USE  api_ginasio;;

CREATE TABLE IF NOT EXISTS horario (
id INTEGER PRIMARY KEY,
turno VARCHAR(50),
horario DATETIME,
nome_equipe VARCHAR(150),
fk_uduario INTEGER,
fk_mural INTEGER
);

CREATE TABLE IF NOT EXISTS mural (
id INTEGER PRIMARY KEY,
status VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS solicita (
fk_usuario INTEGER,
fk_horario INTEGER,
FOREIGN KEY(fk_horario) REFERENCES horario (id)
);

CREATE TABLE IF NOT EXISTS usuario_admin (
id INTEGER PRIMARY KEY,
email VARCHAR(150),
password VARCHAR(50),
status VARCHAR(50),
nome VARCHAR(50),
data_nascimento DATETIME,
n_noticias_cadastradas INTEGER,
n_horario_aceitos INTEGER,
n_horarios_regeitados INTEGER
);

CREATE TABLE IF NOT EXISTS noticias (
id INTEGER PRIMARY KEY,
titulo VARCHAR(150),
descricao VARCHAR(500),
nome_autorr VARCHAR(150),
fk_usuario INTEGER,
FOREIGN KEY(fk_usuario) REFERENCES usuario_admin (id)
);

ALTER TABLE horario ADD FOREIGN KEY(fk_uduario) REFERENCES usuario_admin (id);
ALTER TABLE horario ADD FOREIGN KEY(fk_mural) REFERENCES mural (id);
ALTER TABLE solicita ADD FOREIGN KEY(fk_usuario) REFERENCES usuario_admin (id);
