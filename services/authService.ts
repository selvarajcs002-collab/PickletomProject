import http from "./httpClient";

export interface LoginResponse {
  userId: number;
  status: 1 | 0;
  message: string;
}

export const authService = {
  login: async (Email_Id: string, Password: string): Promise<LoginResponse> => {
    return await http.post("/login", { Email_Id, Password });
  },

  register: async (userData: any) => {
    return await http.post("/signUp", {
      Email_Id: userData.email,
      Password: userData.password
    });
  },

  forgotPassword: async (email: string) => {
    return await http.post("/Auth/forgot-password", { email });
  }
};

