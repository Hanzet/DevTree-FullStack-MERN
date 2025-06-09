import { CorsOptions } from "cors";

export const corsConfig : CorsOptions = {
    origin: function (origin, callback) {
        try {
            if (origin === process.env.FRONTEND_URL) {
                callback(null, true)
            } else {
                callback(new Error('Error de CORS'))
            }
        } catch (error) {
            callback(error instanceof Error ? error : new Error('Error inesperado en la validación CORS'))
        }
    }
}