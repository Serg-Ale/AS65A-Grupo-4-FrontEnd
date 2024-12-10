import axios from "axios";

export const login = async (credentials) => {
    const response = await axios.post("http://localhost:3001/login",credentials);
    return response.data; // Retorna os dados da resposta
};
