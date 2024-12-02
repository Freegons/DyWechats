import axios from "axios";

const API_BASE_URL = "https://yjlian.cn";

export const useApi = () => {
  const login = async (username: string, password: string) => {
    return axios.post(`${API_BASE_URL}/api/login.php`, {
      username,
      password,
    });
  };

  return {
    login,
  };
};
