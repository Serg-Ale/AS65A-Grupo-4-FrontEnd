const StorageItem = ({nome,categoria,quantidade}) => {
  return (
    <button className="item">
      <div className="item-counter">
        <strong>{quantidade}</strong>
      </div>
      <div className="image">
        <img
          src="../../public/images/placeholder.png"
          alt={`Imagem do produto ${nome}`}
        />
      </div>
      <h3>{nome}</h3>
      <div className="info">
        <span>Clique para modificar...</span>
        <p>{categoria}</p>
      </div>
    </button>
  );
};

export default StorageItem;
