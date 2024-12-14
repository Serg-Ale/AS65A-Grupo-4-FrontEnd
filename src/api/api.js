export const apiRequest = async (url,method = "GET",body = null) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token não encontrado. Faça login novamente.");
    return null;
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // Se a operação não for GET e tiver um body, ele será transformado em JSON
  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url,options);

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        console.error("Acesso negado. Verifique suas credenciais.");
      } else {
        throw new Error("Erro ao fazer requisição");
      }
      return null;
    }

    // Para as requisições GET, retornamos os dados JSON da resposta
    if (method === "GET") {
      const data = await response.json();
      return data;
    }

    // Para POST, PUT ou DELETE, podemos retornar uma confirmação ou o status da requisição
    return response.status;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const createData = async (url,data) => {
  const status = await apiRequest(url,"POST",data);
  if (status === 201) {
    console.log("Dados criados com sucesso.");
  } else {
    console.error("Erro ao criar dados.");
  }
};

export const fetchData = async (url) => {
  return await apiRequest(url,"GET");
};


export const updateData = async (url,data) => {
  const status = await apiRequest(url,"PUT",data);
  if (status === 200) {
    console.log("Dados atualizados com sucesso.");
  } else {
    console.error("Erro ao atualizar dados.");
  }
};

export const deleteData = async (url) => {
  const status = await apiRequest(url,"DELETE");
  if (status === 200) {
    console.log("Dados deletados com sucesso.");
  } else {
    console.error("Erro ao deletar dados.");
  }
};
