import {useQuery, useMutation} from "@tanstack/react-query";
import {API} from "../services/const";

//POST Usuarios
export type usuarios = {
    correo: string;
    nombreUsuario: string;
    password: string;
};

export const postUsuarios = async (CreateUsuario: usuarios) => {
    try {
        const {data} = await API.post(
            "/usuarios/registrar",
            CreateUsuario
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

//mutation for a new user
export const useCreateUsuario = () => {
    return useMutation({
        mutationKey: ["usuarios"],
        mutationFn: postUsuarios,
    });
};

//POST Plan de Consumo
export type planesDeConsumo = {
    siguienteDosis: string; //fecha de inicio
    ultimaDosis: string; //fecha de fin
    dosisEnPastillas: string;
    nombreDeMedicamento: string;
    frecuencia: string;
    numCabina: string;
};

