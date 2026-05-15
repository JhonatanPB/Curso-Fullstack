CREATE TABLE times (
id INT PRIMARY KEY AUTO_INCREMENT,
times VARCHAR (50),
titulos DECIMAL,
Vitórias DECIMAL
);

SELECT * FROM times;

 ALTER TABLE times RENAME column ano TO Vitórias;
 
 INSERT INTO times (times, titulos, Vitórias) VALUES
  ("Corinthians", " titulos", 10000);
  
  UPDATE times
    SET
       times = "Corinthians",
       titulos = "54",
       Vitórias =  6372
       WHERE ID =  1;

  
  delete from times where  id=1;

