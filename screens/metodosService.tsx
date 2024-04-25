import { useQuery, useMutation } from "@tanstack/react-query";
import { API } from "./services/const";
//POST Plan de Consumo
export type planesDeConsumo = {
  nombreMedicamento: string;
  frecuencia: string;
  dosis: string;
  fechaInicio: string;
};

export const postPlanConsumo = async (CreatePlanConsumo: planesDeConsumo) => {
  try {
    const { data } = await API.post(
      "/planesDeConsumo/registrar",
      CreatePlanConsumo,
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
      { params: { idPlan: id } },
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
