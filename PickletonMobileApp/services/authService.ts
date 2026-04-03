import http from "./httpClient";

export interface LoginResponse {
  userId: number;
  status: 1 | 0;
  message: string;
}

export const authService = {
  login: async (email_Id, password): Promise<LoginResponse> => {
    return await http.post("/login", { email_Id, password });
  },

  register: async (userData) => {
    return await http.post("/signUp", {
      Email_Id: userData.email,
      Password: userData.password
    });
  },

  forgotPassword: async (email) => {
    return await http.post("/Auth/forgot-password", { email });
  }
};
