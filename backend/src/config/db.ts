import mongoose from "mongoose";
import colors from "colors";

/**
 * Conexión a la base de datos MongoDB utilizando Mongoose.
 * linktree_node_typescript
 */

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}`;
        console.log(colors.cyan.bold(`MongoDB Conectado en ${url}`));
    } catch (error) {
        console.error(colors.bgRed.white.bold(error.message));
        process.exit(1); // Esto permite que el proceso se detenga si hay un error de conexión
    }
};
