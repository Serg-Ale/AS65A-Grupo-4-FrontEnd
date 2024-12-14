import {useEffect} from 'react';
import AdministrationItem from "./AdministrationItem.jsx";
import {useState} from 'react';

const Administration = () => {
  const [administrators,setAdministrators] = useState([]);
  const [loading,setLoading] = useState(true);

  // Função para buscar administradores
  const fetchAdministrators = async () => {
    const token = localStorage.getItem("token"); // Recupera o token do localStorage
    if (!token) {
      console.error("Token não encontrado. Faça login novamente.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/users",{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          console.error("Acesso negado. Verifique suas credenciais.");
        } else {
          throw new Error("Erro ao buscar administradores");
        }
        return;
      }

      const data = await response.json();
      console.log(data);
      setAdministrators(data); // Define os dados no estado
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Hook para executar a busca quando o componente for montado
  useEffect(() => {
    fetchAdministrators();
  },[]);
  return (
    <div id="administration" className="main-container">
      <div className="title">
        <h2>Controle de pessoal</h2>
        <p>Adicione e gerencie os usuários da plataforma.</p>
      </div>
      <div className="user-list">
        <div className="item create">
          <div className="start">
            <div className="icon">
              <i className="fi fi-rr-circle-user"></i>
            </div>
            <div className="info">
              <h3>Novo usuário...</h3>
            </div>
          </div>
          <div className="end">
            <button>
              <i className="fi fi-rr-add"></i>
            </button>
          </div>
        </div>
        {loading ? (
          <p>Carregando...</p>
        ) : administrators.length > 0 ? (
          administrators.map((admin) => (
            <AdministrationItem
              key={admin.id_usuario}
              nome={admin.nome}
            />
          ))
        ) : (
          <p>Nenhum administrador encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Administration;
