import configDB from './db.config.js';
import mysql from 'mysql';

export function connectDB () {
   const connection = mysql.createConnection(configDB);
   connection.connect((err) => {
      if (err) {
         console.error('Error connecting to database: ' + err.stack);
         return;
      }
      console.log('Successful connection to the database.');
   });
   return connection;
}

export function closeDB(connection) {
   connection.end(function (err) {
      if (err) {
         console.error('Connection shorting error: ' + err.stack);
         return;
      }
      console.log('Connection closed.');
   });
}