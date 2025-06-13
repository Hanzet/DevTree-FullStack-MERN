import slug from "slug";
import User from "../models/User";
import { validationResult } from "express-validator";
import { checkPassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";

export const createAccount = async (req, res) => {
    const { default: slug } = await import('slug');

    // Manejar errores de validación (Se maneja en el middleware)
    // let errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }

    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error('Un usuario ya existe con este correo electrónico');
        return res.status(409).json({ error: error.message });
    }

    const handle = slug(req.body.handle, '')
    const handleExists = await User.findOne({ handle });
    if (handleExists) {
        const error = new Error('Un usuario ya existe con este nombre de usuario');
        return res.status(409).json({ error: error.message });
    }

    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;

    await user.save();
    res.status(201).send({ message: 'Usuario creado correctamente' });
}


export const login = async (req, res) => {

    // Manejar errores de validación (Se maneja en el middleware)
    // let errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }

    const { email, password } = req.body;

    // Comprobar si el usuario existe

    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error('No se encontró un usuario con este correo electrónico');
        return res.status(404).json({ error: error.message });
    }

    // Comprobar la contraseña

    const isPasswordCorrect = await checkPassword(password, user.password)
    if (!isPasswordCorrect) {
        const error = new Error('Contraseña incorrecta');
        return res.status(401).json({ error: error.message });
    }

    const token = generateJWT({id: user._id})

    res.send(token);
}