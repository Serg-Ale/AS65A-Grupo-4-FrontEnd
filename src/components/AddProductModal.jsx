const AddProductModal = () => {
  return (
    <div>
      <h2>Adicionar Produto</h2>
      <form>
        <div className="input-group">
          <label htmlFor="nome">Nome do Produto</label>
          <input type="text" id="nome" name="nome" placeholder="Digite o nome do produto" />
        </div>
        <div className="input-group">
          <label htmlFor="categoria">Categoria</label>
          <input type="text" id="categoria" name="categoria" placeholder="Digite a categoria" />
        </div>
        <div className="input-group">
          <label htmlFor="quantidade">Quantidade</label>
          <input type="number" id="quantidade" name="quantidade" placeholder="Digite a quantidade" />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddProductModal;