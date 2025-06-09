import mongoose, { Schema } from 'mongoose';

export interface Iuser {
    handle: string;
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true, // Elimina espacios en blanco al inicio y al final
        lowercase: true, // Convierte el handle a minúsculas
        unique: true, // Asegura que el handle sea único
    },
    name: {
        type: String,
        required: true,
        trim: true, // Elimina espacios en blanco al inicio y al final
    },
    email: {
        type: String,
        required: true,
        unique: true, // Asegura que el correo electrónico sea único
        trim: true,
        lowercase: true, // Convierte el correo electrónico a minúsculas
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Por favor ingresa un correo electrónico válido'], // Valida el formato del correo electrónico
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    }, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
})

const User = mongoose.model<Iuser>('User', userSchema); // Creo el modelo de usuario
export default User;