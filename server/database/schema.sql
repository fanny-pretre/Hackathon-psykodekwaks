-- SQLBook: Code
create table role (
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(255) NOT NULL
);

create table service (
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(255) NOT NULL
);



create table activity_type (
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(255) NOT NULL
);

create table user (
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
  email VARCHAR(255) NOT NULL unique,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  service_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,
  FOREIGN KEY(service_id) REFERENCES service(id) ON DELETE CASCADE
);

create table activity (
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT, 
  date DATE NOT NULL,
  time TIME NOT NULL,
  image VARCHAR(250) NOT NULL,
  is_corporate BOOL, 
  user_id INT UNSIGNED NOT NULL,
  activity_type_id INT UNSIGNED NOT NULL, 
  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY(activity_type_id) REFERENCES activity(id) ON DELETE CASCADE
);

create table participation (
  user_id INT UNSIGNED NOT NULL,
  activity_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY(activity_id) REFERENCES activity(id) ON DELETE CASCADE
);

INSERT INTO service (name) VALUES 
('Service Commercial'),
('Service IT'),
('Service Marketing'),
('Service Support'),
('Service Formation'),
('Service Finance'),
('Service Juridique'),
('Service RH'),
('Service Direction');

INSERT INTO activity_type (name) VALUES 
('Pause'),
('Pause-Déjeuner'),
('After-Work'),
('Autres activités'),
('Evenement entreprise');


INSERT INTO role (name) VALUES 
('Administrateur'),
('Utilisateur');
