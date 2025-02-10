import Joi from 'joi';

const taskSchema = Joi.object({
    userId: Joi.string().required().messages({
        'any.required': 'User ID is required.',
        'string.empty': 'User ID cannot be empty.'
    }),
    title: Joi.string().required().min(3).max(100).messages({
        'any.required': 'Title is required.',
        'string.empty': 'Title cannot be empty.',
        'string.min': 'Title must be at least 3 characters.',
        'string.max': 'Title cannot be more than 100 characters.'
    }),
    priority: Joi.string().valid('high', 'medium', 'low').required().messages({
        'any.required': 'Priority is required.',
        'any.only': 'Priority must be one of: high, medium, low.'
    }),
    status: Joi.string().valid('open', 'in-progress', 'completed', 'blocked').required().messages({
        'any.required': 'Status is required.',
        'any.only': 'Status must be one of: open, in-progress, completed, blocked.'
    }),
    dueDate: Joi.date().iso().required().messages({
        'any.required': 'Due date is required.',
        'date.format': 'Due date must be a valid ISO date.'
    })
});

export default taskSchema;
