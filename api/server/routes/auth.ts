import express, {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

import userModel from '../models/userModel';
import {isAuth} from '../middlewares/auth';
import {generateAccessToken, generateRefreshToken} from '../tools';

let Router = express.Router();

Router.post('/register', async (request: Request, response: Response): Promise<Response> => {
    const { email, email_cfg, password, password_cfg } = request.body;

    if (
        (typeof email == 'string' && email != '') && 
        (typeof email_cfg == 'string' && email_cfg != '') && 
        (typeof password == 'string' && password != '') &&
        (typeof password_cfg == 'string' && password_cfg != '')
    ) {
        if ( email != email_cfg || password != password_cfg) {
            return response.status(500).json({"msg": "Email or password confirmation are not valid !"});
        }

        try {
            let user = await userModel.findOne({email})

            if (user) return response.status(500).json({"msg": "User already exists !"});

            user = await userModel.create({
                email,
                "password": bcrypt.hashSync(password, 10)
            });

            return response.status(200).json(user);
        } catch (error) {
            console.log(error)
            return response.status(500).json({"msg": "Error while creating the user !"});
        }
    } else {
        return response.status(500).json({"msg": "You have to send email, password and confirmations !"});
    }
});

Router.post('/login', async (request: any, response: Response): Promise<Response> => {
    const { email, password } = request.body;

    if (
        (typeof email == 'string' && email != '') && 
        (typeof password == 'string' && password != '')
    ) {
            let user = await userModel.findOne({email})

            // if (!user) return response.status(500).json({"msg": "Email and password don't match !"});

            if (user && bcrypt.compareSync(password, user.password)) {
                // request.session.user = user;

                // Here the token generation
                const token = generateAccessToken({ user });
                const refreshtoken = generateRefreshToken ({ user });

                response.cookie('refreshtoken', refreshtoken, {
                    httpOnly: true,
                    maxAge: 30*24*60*60*1000
                });
                
                return response.status(200).json({
                    user,
                    token
                });
            }

            return response.status(500).json({"msg": "Email and password don't match !"});

    } else {
        return response.status(500).json({"msg": "You have to send email and password !"});
    }
});

Router.delete('/logout', async (request: any, response: Response): Promise<Response> => {
    if (request.session) {
        request.session.destroy();
    }
    
    return response.status(200).json({msg: "Session closed !"});
})

Router.get('/me', isAuth, async (request: any, response: Response): Promise<Response> => {
    return response.status(200).json(request.user);
});

Router.get('/refresh-token', async (request: any, response: Response): Promise<Response> => {
    try {
        const rf_token = request.cookies.refreshtoken

        if (!rf_token) return response.status(503).json({ msg: "Not authenticated !" });

        const decoded = <any>jwt.verify(rf_token, `secret-to-change`)

        if (!decoded) return response.status(503).json({ msg: "Not authenticated !" })

        const user = await userModel.findById(decoded.user._id)

        if (!user) return response.status(503).json({ msg: "Not authenticated !" })

        const token = generateAccessToken({ user })

        return response.status(200).json({
            token,
            user
        })
    } catch (error) {
        return response.status(503).json({"msg": "Not authenticated !"});
    }
});

export default Router;
