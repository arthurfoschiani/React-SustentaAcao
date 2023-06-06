CREATE TABLE Culinaria (
    Id_Culinaria NUMBER(2) CONSTRAINT PK_Culinaria PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL
);

CREATE TABLE Categoria_Artigo (
    Id_CategoriaArtigo NUMBER(2) CONSTRAINT PK_CategoriaArtigo PRIMARY KEY,
    Descricao VARCHAR(50) NOT NULL
);

CREATE TABLE Praticas_Sustentaveis (
    Id_Praticas_Sustentaveis NUMBER(2) CONSTRAINT PK_PraticasSustentaveis PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Descricao VARCHAR(300) NOT NULL
);

CREATE TABLE Usuario (
    Id_Usuario NUMBER(4) CONSTRAINT PK_Usuario PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Senha VARCHAR(30) NOT NULL,
    Email VARCHAR(40) NOT NULL,
    TipoUsuario CHAR(1) NOT NULL
);

CREATE TABLE Restaurante (
    CNPJ NUMBER(14) CONSTRAINT PK_Restaurante PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Descricao VARCHAR(1000) NOT NULL,
    Site VARCHAR(50),
    Fk_Id_Culinaria NUMBER(2) CONSTRAINT FK_Restaurante_Culinaria REFERENCES Culinaria
);

CREATE TABLE Unidade (
    Id_Unidade NUMBER(2) CONSTRAINT PK_Unidade PRIMARY KEY,
    Imagem VARCHAR(100) NOT NULL,
    CEP CHAR(8) NOT NULL,
    Rua VARCHAR(150) NOT NULL,
    Cidade VARCHAR(50) NOT NULL,
    Estado VARCHAR(50) NOT NULL,
    Bairro VARCHAR(50) NOT NULL,
    Fk_Restaurante NUMBER(14) CONSTRAINT FK_Unidade_Restaurante REFERENCES Restaurante
);

CREATE TABLE Avaliacao (
    Id_Avaliacao NUMBER(4) CONSTRAINT PK_Avaliacao PRIMARY KEY,
    Valor NUMBER(2) NOT NULL,
    Momento DATE NOT NULL,
    Fk_Restaurante_CNPJ NUMBER(14) CONSTRAINT FK_Avaliacao_Restaurante REFERENCES Restaurante,
    Fk_IdUsuario NUMBER(4) CONSTRAINT FK_Avaliacao_Usuario REFERENCES Usuario
);

CREATE TABLE Comentario_Restaurante (
    Id_Comentario_Restaurante NUMBER(4) CONSTRAINT PK_ComentarioRestaurante PRIMARY KEY,
    Texto VARCHAR(400) NOT NULL,
    Data DATE NOT NULL,
    Fk_IdUsuario NUMBER(4) CONSTRAINT FK_Comentario_Restaurante_Usuario REFERENCES Usuario,
    Fk_Restaurante_CNPJ NUMBER(14) CONSTRAINT FK_Comentario_Restaurante_Restaurante REFERENCES Restaurante
);

CREATE TABLE Artigo (
    Id_Artigo NUMBER(3) CONSTRAINT PK_Artigo PRIMARY KEY,
    Titulo VARCHAR(80) NOT NULL,
    Texto VARCHAR(4000) NOT NULL,
    Imagem VARCHAR(200) NOT NULL,
    Data DATE NOT NULL,
    Fk_Id_Categoria_Artigo NUMBER(2) CONSTRAINT FK_Artigo_Categoria_Artigo REFERENCES Categoria_Artigo
);

CREATE TABLE Comentario_Artigo (
    Id_Comentario_Artigo NUMBER(4) CONSTRAINT PK_ComentarioArtigo PRIMARY KEY,
    Texto VARCHAR(400) NOT NULL,
    Data DATE NOT NULL,
    Fk_Id_Usuario NUMBER(4) CONSTRAINT FK_Comentario_Artigo_Usuario REFERENCES Usuario,
    Fk_Id_Artigo NUMBER(3) CONSTRAINT FK_Comentario_Artigo_Artigo REFERENCES Artigo
);

CREATE TABLE Restaurante_PraticasSustentaveis (
    Fk_Restaurante_CNPJ NUMBER(14) CONSTRAINT FK_Restaurante_PraticasSustentaveis_Restaurante REFERENCES Restaurante,
    Fk_Id_Praticas_Sustentaveis NUMBER(2) CONSTRAINT FK_Restaurante_PraticasSustentaveis_PraticasSustentaveis REFERENCES Praticas_Sustentaveis
);

CREATE TABLE Curte (
    Fk_Id_Artigo NUMBER(3) CONSTRAINT FK_Curte_Artigo REFERENCES Artigo,
    Fk_Id_Usuario NUMBER(4) CONSTRAINT FK_Curte_Usuario REFERENCES Usuario
);

DROP TABLE Comentario_Artigo CASCADE CONSTRAINTS;
DROP TABLE Artigo CASCADE CONSTRAINTS;
DROP TABLE Comentario_Restaurante CASCADE CONSTRAINTS;
DROP TABLE Avaliacao CASCADE CONSTRAINTS;
DROP TABLE Unidade CASCADE CONSTRAINTS;
DROP TABLE Restaurante CASCADE CONSTRAINTS;
DROP TABLE Usuario CASCADE CONSTRAINTS;
DROP TABLE Praticas_Sustentaveis CASCADE CONSTRAINTS;
DROP TABLE Categoria_Artigo CASCADE CONSTRAINTS;
DROP TABLE Culinaria CASCADE CONSTRAINTS;
DROP TABLE Curte CASCADE CONSTRAINTS;
DROP TABLE Restaurante_PraticasSustentaveis CASCADE CONSTRAINTS;