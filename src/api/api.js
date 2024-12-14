export const fetchData = async (url) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token não encontrado. Faça login novamente.");
    return null;
  }

  try {
    const response = await fetch(url,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        console.error("Acesso negado. Verifique suas credenciais.");
      } else {
        throw new Error("Erro ao fazer requisição");
      }
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
