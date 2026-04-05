import './MomoCard.css';

function MomoCard({ name, price, tag, image, onAdd }) {

  // Function to get background color
  const getBgColor = (type) => {
    const colors = {
      steamed: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      fried: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      jhol: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
      tandoori: 'linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)',
      chilli: 'linear-gradient(135deg, #f83600 0%, #f9d423 100%)',
      dessert: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    };

    return colors[type] || 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)';
  };

  return (
    <div className="momo-card">
      
      <div
        className="momo-card-image"
        style={{ background: getBgColor(image) }}
      >
        {tag && <span className="momo-tag">{tag}</span>}
        <div className="momo-icon">🥟</div>
      </div>

      <div className="momo-card-content">
        <h3>{name}</h3>

        <div className="momo-card-footer">
          <p className="price">₹{price}</p>

          <button className="add-btn" onClick={onAdd}>
            + Add
          </button>
        </div>
      </div>

    </div>
  );
}

export default MomoCard;