import { useQuery, useMutation } from "@tanstack/react-query";
import { API } from "../services/const";

//POST Usuarios
export type usuarios = {
  correo: string;
  nombreUsuario: string;
  password: string;
};

export const postUsuarios = async (CreateUsuario: usuarios) => {
  try {
    const { data } = await API.post("/usuarios/registrar", CreateUsuario);
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

//get usuarios
export type UsuarioResponse = {
  id: number;
  correo: string;
  nombreUsuario: string;
  password: string;
};

export const getUsuarios = async (id:number) => {
  try {
    const { data } = await API.get(`/usuarios/obtener`, {
      params: { id },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
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

export type CreatePlanConsumoRequest = {
  id: string;
} & planesDeConsumo;

export const postPlanConsumo = async (payload: CreatePlanConsumoRequest) => {
  try {
    const { data } = await API.post(
      "/planDeConsumoProgramado/crearPlan",
      payload,
      { params: { idUsuario: payload.id } },
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

//mutation for a new plan de consumo
export const useCreatePlanConsumo = () => {
  return useMutation({
    mutationKey: ["planesDeConsumoProgramado"],
    mutationFn: postPlanConsumo,
  });
};

//modificar plan de consumo
//planesDeConsumo
//useUpdatePlanConsumo

export type UpdatePlanConsumoRequest = {
  idUsuario: number;
} & UpdatePlanConsumoBody;

export type UpdatePlanConsumoBody = {
  id: number;
  siguienteDosis: string; //fecha de inicio
  ultimaDosis: string; //fecha de fin
  dosisEnPastillas: number;
  nombreDeMedicamento: string;
  frecuencia: number;
  numCabina: number;
  estado: boolean;
};
export const postUpdatePlanConsumo = async (
  payload: UpdatePlanConsumoRequest,
) => {
  ///planDeConsumoProgramado/modificar?idUsuario=1
  try {
    const { data } = await API.post(
      "/planDeConsumoProgramado/modificar",
      payload,
      { params: { idUsuario: payload.idUsuario } },
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//mutacion para modificar el plan de consumo
export const useUpdatePlanConsumo = () => {
  return useMutation({
    mutationKey: ["planDeConsumoProgramado"],
    mutationFn: postUpdatePlanConsumo,
    onError: (error: Error) => {
      console.error("Error updating plan de consumo:", error);
    },
    onSuccess: () => {
      console.log("Plan de consumo actualizado");
    },
  });
};
//DELETE Plan de Consumo
export type PlanDeConsumoDelete = {
  id: number;
  siguienteDosis: string; //fecha de inicio
  ultimaDosis: string; //fecha de fin
  dosisEnPastillas: string;
  nombreDeMedicamento: string;
  frecuencia: string;
  numCabina: string;
  };

 export const deletePlanDeConsumoProgramado = async (id: number) => {
    try {
        const data = await API.delete(
        `/planDeConsumoProgramado/eliminar`,
        { params: { idPlan: id } },
        );
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const useDeletePlanConsumo = () => {
  return useMutation({
    mutationKey: ["planesDeConsumoProgramado"],
    mutationFn: deletePlanDeConsumoProgramado,
  });
};
   


//GET Plan de Consumo Programado
export type PlanDeConsumoResponse = {
  id: number;
  siguienteDosis: string; //fecha de inicio
  ultimaDosis: string; //fecha de fin
  dosisEnPastillas: string;
  nombreDeMedicamento: string;
  frecuencia: string;
  numCabina: string;
  estado: boolean;
};

export const getPlanesDeConsumo = async (idPlanDeConsumo: string) => {
  try {
    const { data } = await API.get<PlanDeConsumoResponse[]>(
      "/planesDeConsumoProgramado/obtenerPlanes",
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetPlanesDeConsumo = (id: string) => {
  return useQuery({
    queryKey: ["planesDeConsumoProgramado", id],
    queryFn: async () => {
      if (id) {
        return getPlanesDeConsumo(id);
      }
    },
    initialData: [],
  });
};

//historial de consumo de medicamentos
export type HistorialConsumoRespose = {
  id: number;
  fechaDispensada: string;
  numCabina: string;
  dosisEnPastillas: string;
  nombreDeMedicamento: string;
  //dosificado: boolean;
};

export const getHistorialConsumo = async (id: number) => {
  try {
    const { data } = await API.get<HistorialConsumoRespose[]>(
      "/planDeConsumoDispensado/obtenerPlanes",
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetHistorialConsumo = (id: number) => {
  return useQuery({
    queryKey: ["planDeConsumoDispensado", id],
    queryFn: async () => {
      if (id) {
        return getHistorialConsumo(id);
      }
    },
    initialData: [],
  });
};

export type AlertasResponse = {
  id: number;
  siguienteDosis: string;
  ultimaDosis: string;
  dosisEnPastillas: string;
  nombreDeMedicamento: string;
  frecuencia: string;
  numCabina: string;
  estado: boolean;
};

//GET ALERTAS
export const getAlertas = async (id: number) => {
  try {
    const { data } = await API.get<AlertasResponse[]>(
      "/planDeConsumoProgramado/alertasProximos",
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

//post demandaPorCabina solo numCabina es requerido
export type demandaPorCabina = {
  numCabina: string;
};

export const postDemandaPorCabina = async (payload: demandaPorCabina) => {
  try {
    const { data } = await API.post("/cabinas/demandaPorCabina", payload, {
      params: { numCabina: payload.numCabina },
    })
    ;
    return data;
  } catch (error) {
    console.error(error);
  }
};
