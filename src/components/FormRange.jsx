import { useState } from 'react';
import { formatPrice } from '../utils';

const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        className={`range range-primary ${size}`}
      />
      <div className="label">
        <span className="label-text-alt font-bold text-md">0</span>
        <span className="label-text-alt font-bold text-md">
          Max: {formatPrice(maxPrice)}
        </span>
      </div>
    </div>
  );
};

export default FormRange;
