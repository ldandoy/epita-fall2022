import {Request, Response} from 'express';
import jwt from 'jsonwebtoken'

import userModel from '../models/userModel';

export const isAuth = async (request: any, response: Response, next: any) => {
    try {
        const token = request.header("Authorization");
    
        if(!token) return response.status(503).json({msg: "Not authenticated !"});

        const decoded = <any>jwt.verify(token, `secret-to-change`);
        
        let user = await userModel.findOne({
            email: decoded.user.email
        });

        if(!user) return response.status(503).json({msg: "Not authenticated !"});

        request.user = user;

        next();
    } catch (error) {
        return response.status(503).json({msg: "Not authenticated !"});
    }

    // This is for session part
    /*if (request.session.user) {
        next()
    } else {
        return response.status(503).json({msg: "Not authenticated !"})
    }*/
}