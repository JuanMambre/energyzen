ALTER TABLE usuarios
ADD COLUMN userRole VARCHAR(10) NOT NULL DEFAULT 'user' CHECK (userRole IN ('user', 'admin'));
