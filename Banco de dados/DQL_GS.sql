--Consulta simples envolvendo SELECT/FROM/WHERE/ORDER BY:
--Queremos obter todos as categorias de artigos que t�m um nome come�ando com 'A', ordenados alfabeticamente.
SELECT *
FROM Categoria_Artigo
WHERE Descricao LIKE 'A%'
ORDER BY Descricao;


--Consulta envolvendo uma ou mais jun��es de tabela, contendo: SELECT/FROM/WHERE/ORDER BY:
--Nesta consulta, queremos saber os restaurantes e suas respectivas culin�rias, apenas para os restaurantes cuja descri��o cont�m a palavra "vegetariana", ordenados pelo nome da culin�ria e depois pelo nome do restaurante.
SELECT R.Nome NomeRestaurante, C.Nome NomeCulinaria
FROM Restaurante R
INNER JOIN Culinaria C ON R.Fk_Id_Culinaria = C.Id_Culinaria
WHERE R.Descricao LIKE '%vegetariana%'
ORDER BY C.Nome, R.Nome;

--Consulta envolvendo fun��o de grupo e agrupamento:
--Nesta consulta, queremos obter a m�dia das avalia��es para cada restaurante. Para isso, vamos agrupar as avalia��es pelo restaurante.
SELECT R.Nome, AVG(A.Valor) MediaAvaliacoes
FROM Avaliacao A
INNER JOIN Restaurante R ON A.Fk_Restaurante_CNPJ = R.CNPJ
GROUP BY R.Nome;


--Consulta envolvendo fun��o de grupo, agrupamento com filtro (having) e jun��o de tabelas:
--Nesta consulta, queremos obter a m�dia das avalia��es para cada restaurante, mas apenas para restaurantes que t�m uma m�dia de avalia��o superior a 4. Vamos usar a cl�usula HAVING para aplicar este filtro.
SELECT R.Nome, AVG(A.Valor) MediaAvaliacoes
FROM Avaliacao A
INNER JOIN Restaurante R ON A.Fk_Restaurante_CNPJ = R.CNPJ
GROUP BY R.Nome
HAVING AVG(A.Valor) > 4;


SELECT * FROM Comentario_Artigo;
SELECT * FROM Artigo;
SELECT * FROM Comentario_Restaurante;
SELECT * FROM Avaliacao;
SELECT * FROM Unidade;
SELECT * FROM Restaurante;
SELECT * FROM Usuario;
SELECT * FROM Praticas_Sustentaveis;
SELECT * FROM Categoria_Artigo;
SELECT * FROM Culinaria;
SELECT * FROM Curte;
SELECT * FROM Restaurante_PraticasSustentaveis;