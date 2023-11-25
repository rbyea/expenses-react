import httpService from "./http.service";
const expensesEndpoint = "expenses/";

const expensesService = {
  get: async (userId) => {
    const { data } = await httpService.get(expensesEndpoint, {
      params: {
        orderBy: "userId",
        equalTo: `${userId}`
      }
    });
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(expensesEndpoint, payload);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.put(expensesEndpoint, payload);
    return data;
  },
  delete: async (itemId) => {
    const { data } = await httpService.delete(expensesEndpoint + itemId);
    return data;
  }
};

export default expensesService;
