import express, {Request, Response} from 'express';

let Router = express.Router();

Router.post('/login', (request: Request, response: Response): void => {
    console.log(request.body);
    const { email, password } = request.body;

    if ( 
        (typeof email == 'string' && email != '') && 
        (typeof password == 'string' && password != '')
    ) {

    } else {
        response.status(500).json({"msg": "You have to send email and password !"})
    }

    
    response.status(200).json('Login page');
});

export default Router;
