const AddAdminModal = () => {
  return (

    <div>
      <h2>Adicionar Novo Administrador</h2>
      <form>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Digite o nome do administrador" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Digite o email" />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite a senha" />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddAdminModal;