import { useQuery, useMutation } from "@tanstack/react-query";
import { API } from "../services/const";

//POST cabinas/vaciar
export type vaciarCabina = {
  numCabina: string;
};

export const postVaciarCabina = async (payload: vaciarCabina) => {
  try {
    const params = new URLSearchParams({ numCabina: payload.numCabina });
    const url = `/cabinas/vaciar?${params.toString()}`;

    console.log("URL:", API.defaults.baseURL + url);

    const { data } = await API.post(url, payload);
    return data;
  } catch (error) {
    console.error(error);
  }
}
//post cabinas/desatascar
export type desatascarCabina = {
  numCabina: number;
};

export const postDesatascarCabina = async (payload: desatascarCabina) => {
  try {
    const { data } = await API.post("/cabinas/desatascar", payload, {
      params: { numCabina: payload.numCabina },
    })
    ;
    return data;
  } catch (error) {
    console.error(error);
  }
};