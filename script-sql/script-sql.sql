show databases;

use futebol;

use kgt_bank;

use kgt_bank;

-- Criando um tabela
CREATE TABLE conta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    saldo DECIMAL,
    senha VARCHAR(6)
);

-- Selecionar a tabela
SELECT * FROM conta;

-- Inserindo dados
INSERT INTO conta (nome, saldo, senha)
VALUES ('Doris', 10, '123');

SELECT * FROM conta; 
INSERT INTO conta (nome, saldo, senha)
VALUES ('Caio', 3000,321);

SELECT * FROM conta;

-- Apagando dados do banco 
delete from conta where id=2;

SELECT * FROM conta;
INSERT INTO conta (nome, saldo, senha)
VALUES ('Pedro', 400, 1234);

SELECT * FROM conta;
INSERT INTO	conta (nome, saldo, senha)
VALUES ('Pepe', 100, 1234)