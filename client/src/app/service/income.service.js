import httpService from "./http.service";
const incomeEndpoint = "income/";

const incomeService = {
  get: async (userId) => {
    const { data } = await httpService.get(incomeEndpoint, {
      params: {
        orderBy: "userId",
        equalTo: `${userId}`,
      },
    });
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(incomeEndpoint, payload);
    return data;
  },
};

export default incomeService;
