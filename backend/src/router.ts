import { Router } from 'express';
import { body } from 'express-validator';
import { createAccount, login } from './handlers';
import { handleInputErrors } from './middleware/validation';

const router = Router();

// Routing

// Autenticación y Registro

router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede estar vacío'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede estar vacío'),
    body('email')
        .isEmail()
        .withMessage('Debes proporcionar un correo electrónico válido'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres'),
    handleInputErrors, // Middleware para manejar errores de validación
    createAccount
);

router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('Debes proporcionar un correo electrónico válido'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres'),
    handleInputErrors, // Middleware para manejar errores de validación
    login
);

export default router;