import express, {Request, Response} from 'express';

let Router = express.Router();

Router.post('/login', (request: Request, response: Response): void => {
    console.log(request.body);

    
    response.status(200).json('Login page');
});

export default Router;
