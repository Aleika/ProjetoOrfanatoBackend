import express from 'express';
import 'express-async-errors';


import './database/connection';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';
import cors from  'cors';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);




//Rota = conjunto
//Recurso = usuário
//Métodos HTTP - GET (busca), POST (criação), PUT(edição), DELETE(exclusão)

//Parâmetros
//Query Params: http://localhost:3333/users?search=aleika (busca, filtro, paginacao)
//Route Params: http://localhost:3333/users/1 (geramente para identificar um recurso)
//Body: http://localhost:3333/users (geralmente vindos de formulários, com bastante dados)

// app.post('/users/:id', (request, response) => {
//     console.log(request.query);
//     console.log(request.params);
//     console.log(request.body);

//     return response.json({message:"Hello world"});
// });
