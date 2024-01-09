import express from 'express';
const app = express();
const port = 5000;
import { connectDB, closeDB } from './db.connect.js';
import { queryCreateTable, queryNewWrite } from './sqlQuerys.js';
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.post('/api/create-user', async (req, res) => {

   const { name, email } = req.body;
   if (!name || !email)
      return res.status(400)
         .send({
            'status': 400,
            'message': 'Fields Name and Email is required'
         });

   const connection = connectDB();
   const name_table = 'wait_list';

   try {
      connection.query(queryCreateTable(name_table));
      connection.query(queryNewWrite(name_table, name, email));

      res.send({name, email})
      console.log(name, email)
   } catch (error) {
      res.status(400)
         .send({
            'status': 400,
            'message': error
         })
   } finally {
      closeDB(connection);
   }
})

const server = app.listen(port, () => {
   console.log(`Listening on PORT ${port}`);
})