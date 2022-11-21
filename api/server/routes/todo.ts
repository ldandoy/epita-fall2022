import express, {Request, Response} from 'express';

import todoModel from '../models/todoModel';

let Router = express.Router();

Router.post('/', async (request: Request, response: Response) => {
    const {label, description} = request.body

    let newTodo = new todoModel({
        label,
        description
    })

    try {
        let todo = await newTodo.save()
        return response.status(200).json(todo)
    } catch(error) {
        return response.status(500).json({"msg": error})
    }
});

Router.get('/', async (request: Request, response: Response) => {
    try {
        let todos = await todoModel.find({});

        return response.status(200).json(todos);
    } catch(error) {
        return response.status(500).json({msg: error});
    }
});

Router.get('/:todoId', async (request: Request, response: Response) => {
    let { todoId } = request.params;
    
    try {
        let todo = await todoModel.findOne({
            _id: todoId
        });

        return response.status(200).json(todo);
    } catch(error) {
        return response.status(500).json({msg: error});
    }
});

Router.delete('/:todoId', async (request: Request, response: Response) => {
    let { todoId } = request.params;

    try {
        await todoModel.findOneAndDelete({
            _id: todoId
        });

        return response.status(200).json({"msg": "Todo well deleted !"});
    } catch (error) {
        return response.status(500).json({msg: error});
    }
});

Router.put('/:todoId', async (request: Request, response: Response) => {
    let { todoId } = request.params;
    const {label, description} = request.body

    try {
        let todo = await todoModel.findOneAndUpdate({
            _id: todoId
        }, {
            label,
            description
        }, {
            new: true
        });

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json({msg: error});
    }
});

export default Router;