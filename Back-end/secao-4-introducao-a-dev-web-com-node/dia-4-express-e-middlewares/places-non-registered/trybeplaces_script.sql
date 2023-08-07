USE trybeplacesdb;

CREATE TABLE places(
  place_id INT NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(50) NOT NULL,
  rating INT NOT NULL,
  difficulty VARCHAR(10) NOT NULL,
  createdAt VARCHAR(20) NOT NULL
);

