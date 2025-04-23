//validationMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validationMiddleware = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const message = error.details.map(i => i.message).join(',');
            return res.status(400).json({ message: message });
        }
        next();
    };
};

export default validationMiddleware;
