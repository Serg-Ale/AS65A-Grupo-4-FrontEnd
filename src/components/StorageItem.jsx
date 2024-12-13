const StorageItem = () => {
  return (
    <button className="item">
      <div className="item-counter">
        <strong>45</strong>
      </div>
      <div className="image">
        <img
          src="../../public/images/placeholder.png"
          alt="bla bla bla"
        />
      </div>
      <h3>nome do produto</h3>
      <div className="info">
        <span>Clique para modificar...</span>
        <p>categoria</p>
      </div>
    </button>
  );
};

export default StorageItem;