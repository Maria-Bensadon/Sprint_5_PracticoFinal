
import { validationResult } from 'express-validator';

const handleValidationErrors = (req, res, next) => {

    const errores = validationResult(req);

    if (!errores.isEmpty()) {

        return res.status(400).json({
            errors: errores.array().map(error =>
            ({
                field: error.param,
                message: error.msg,
            }))
        });
    }

    next();
};

export { handleValidationErrors }; 