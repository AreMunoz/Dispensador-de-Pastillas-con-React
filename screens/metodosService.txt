import { useQuery, useMutation } from "@tanstack/react-query";
import { API } from "./services/const";
//POST Plan de Consumo
export type planesDeConsumo1 = {
  nombreMedicamento: string;
  frecuencia: string;
  dosis: string;
  fechaInicio: string;
};

export const postPlanConsumo = async (CreatePlanConsumo: planesDeConsumo1) => {
  try {
    const { data } = await API.post(
      "/planesDeConsumo1/registrar",
      CreatePlanConsumo
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

//mutation for a new plan de consumo
export const useCreatePlanConsumo = () => {
  return useMutation({
    mutationKey: ["planesDeConsumo"],
    mutationFn: postPlanConsumo,
  });
};

//GET Plan de Consumo
export type PlanDeConsumoResponse = {
  idPlanDeConsumo: string;
  nombreMedicamento: string;
  frecuencia: string;
  dosis: string;
  fechaInicio: string;
  fechaFin: string;
};

export const getPlanesDeConsumo = async (id: string) => {
  try {
    const { data } = await API.get<PlanDeConsumoResponse[]>(
      "/planesDeConsumo/",
      { params: { idPlan: id } }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetPlanesDeConsumo = (id: string) => {
  return useQuery({
    queryKey: ["planesDeConsumo", id],
    queryFn: async () => {
      if (id) {
        return getPlanesDeConsumo(id);
      }
    },
    initialData: [],
  });
};

//modificar
// PUT Plan de Consumo
export const putPlanConsumo = async ({ id, updatedPlanConsumo }: { id: string, updatedPlanConsumo: planesDeConsumo }) => {
  try {
    const { data } = await API.put(
      `/planesDeConsumo/${id}`,
      updatedPlanConsumo,
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update plan de consumo");
  }
};

// Mutation for updating a plan de consumo
export const useUpdatePlanConsumo = () => {
  return useMutation({
    mutationKey: ["updatePlanConsumo"],
    mutationFn: putPlanConsumo,
    onError: (error: Error) => {
      console.error("Error updating plan de consumo:", error);
    },
    onSuccess: () => {
      console.log("Plan de consumo actualizado");
    }
  });
};


export type PlanDeConsumoDelete = {
  idPlanDeConsumo: string;
  nombreMedicamento: string;
  frecuencia: string;
  dosis: string;
  fechaInicio: string;
  fechaFin: string;
};

//DELETE Plan de Consumo
export const deletePlanDeConsumo = async (idPlanDeConsumo: string) => {
  try {
    const data = await API.get(
      `/planesDeConsumo/eliminar`, { params: { idPlan: idPlanDeConsumo } }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useDeletePlanConsumo = () => {
  return useMutation({
    mutationKey: ["planesDeConsumo"],
    mutationFn: deletePlanDeConsumo,
  });
};



/** 
//plan de consumo programado
//plan de consumo bajo Demanda GET
export type PlanDeConsumoProgramadoResponse = {
  idPlanDeConsumoProgramado: string;
  fechaDeRegistro: string;
  fechaDeTermino: string;
  pastillasNecesarias: string;
  idPlanDeConsumo: string;
  idCabina: string;
  idUsuario: string;
  planDeConsumoProgramado: string;
};

export const getPlanesDeConsumoProgramado = async (id: string) => {
  try {
    const { data } = await API.get<PlanDeConsumoProgramadoResponse[]>(
      "/planesDeConsumoProgramados",
      { params: { idPlan: id } }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetPlanesDeConsumoProgramado = (id: string) => {
  return useQuery({
    queryKey: ["planesDeConsumoProgramado", id],
    queryFn: async () => {
      if (id) {
        return getPlanesDeConsumoProgramado(id);
      }
    },
    initialData: [],
  });
}

//plan de consumo programado Dispensado GET
export type PlanDeConsumoProgramadoDispensadoResponse = {
  idPlanDeConsumoDispensado: string;
  dosisdispensada: string;
  fechaDispensada: string;
  notas: string;
  idPlanDeConsumoProgramado: string;
  idUsuario: string;
};

export const getPlanesDeConsumoProgramadoDispensado = async (id: string) => {
  try {
    const { data } = await API.get<PlanDeConsumoProgramadoDispensadoResponse[]>(
      "/planeConsumoDispensado/",
      { params: { idPlan: id } }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const useGetPlanesDeConsumoProgramadoDispensado = (id: string) => {
  return useQuery({
    queryKey: ["planesDeConsumoProgramadoDispensado", id],
    queryFn: async () => {
      if (id) {
        return getPlanesDeConsumoProgramadoDispensado(id);
      }
    },
    initialData: [],
  });
}


//Datos de los dispensaodres GET
export type DispensadoresResponse = {
  idCabina: string;
  ipDispensador: string;
  nombreDispensador: string;
  existenciasPastillas: string;
};

export const getDispensadores = async () => {
  try {
    const { data } = await API.get<DispensadoresResponse[]>("/dispensadores");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetDispensadores = () => {
  return useQuery({
    queryKey: ["dispensadores"],
    queryFn: getDispensadores,
    initialData: [],
  });
}
*/

/*
//aca filtra desde el servicio por IdleDeadline//GET Plan de Consumo
export type PlanDeConsumoResponse = {
  idPlanDeConsumo: number;
  siguienteDosis: string; //fecha de inicio
  ultimaDosis: string; //fecha de fin
  dosisEnPastillas: string;
  nombreDeMedicamento: string;
  frecuencia: string;
  numCabina: string;
};

export const getPlanesDeConsumo = async () => {
  try {
    const { data } = await API.get<PlanDeConsumoResponse[]>(
      "/planesDeConsumoProgramado/obtenerPlanes",
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetPlanesDeConsumo = (id: number) => {
  return useQuery({
    queryKey: ["planesDeConsumoProgramado", id],
    queryFn: async () => {
      if (id) {
        const datos = await getPlanesDeConsumo();
        const filtrados = datos?.filter((plan) => plan.idPlanDeConsumo === id);

        return filtrados;
      }
    },
    initialData: [],
  });
};*/