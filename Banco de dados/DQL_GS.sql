--Consulta simples envolvendo SELECT/FROM/WHERE/ORDER BY:
--Queremos obter todos as categorias de artigos que têm um nome começando com 'A', ordenados alfabeticamente.
SELECT *
FROM Categoria_Artigo
WHERE Descricao LIKE 'A%'
ORDER BY Descricao;


--Consulta envolvendo uma ou mais junções de tabela, contendo: SELECT/FROM/WHERE/ORDER BY:
--Nesta consulta, queremos saber os restaurantes e suas respectivas culinárias, apenas para os restaurantes cuja descrição contém a palavra "vegetariana", ordenados pelo nome da culinária e depois pelo nome do restaurante.
SELECT R.Nome NomeRestaurante, C.Nome NomeCulinaria
FROM Restaurante R
INNER JOIN Culinaria C ON R.Fk_Id_Culinaria = C.Id_Culinaria
WHERE R.Descricao LIKE '%vegetariana%'
ORDER BY C.Nome, R.Nome;

--Consulta envolvendo função de grupo e agrupamento:
--Nesta consulta, queremos obter a média das avaliações para cada restaurante. Para isso, vamos agrupar as avaliações pelo restaurante.
SELECT R.Nome, AVG(A.Valor) MediaAvaliacoes
FROM Avaliacao A
INNER JOIN Restaurante R ON A.Fk_Restaurante_CNPJ = R.CNPJ
GROUP BY R.Nome;


--Consulta envolvendo função de grupo, agrupamento com filtro (having) e junção de tabelas:
--Nesta consulta, queremos obter a média das avaliações para cada restaurante, mas apenas para restaurantes que têm uma média de avaliação superior a 4. Vamos usar a cláusula HAVING para aplicar este filtro.
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