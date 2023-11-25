import httpService from "./http.service";
const incomeEndpoint = "income/";

const incomeService = {
  get: async (userId) => {
    const { data } = await httpService.get(incomeEndpoint, {
      params: {
        orderBy: "userId",
        equalTo: `${userId}`
      }
    });
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(incomeEndpoint, payload);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.put(incomeEndpoint, payload);
    return data;
  },
  delete: async (itemId) => {
    const { data } = await httpService.delete(incomeEndpoint + itemId);
    return data;
  }
};

export default incomeService;
