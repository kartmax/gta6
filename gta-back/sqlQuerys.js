export const queryCreateTable = (name_table) => {
   return `CREATE TABLE IF NOT EXISTS ${name_table} (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
      name varchar(255) not null, 
      email varchar(100) not null
   );`
}
export const queryNewWrite = (name_table, name, email) => {
   return `INSERT INTO ${name_table} 
      (name, email) VALUES ('${name}', '${email}')`;
} 